package `misk-artifactory-plugin`

import java.io.File
import java.io.IOException
import java.lang.System
import java.time.LocalDateTime
import java.util.concurrent.TimeUnit
import java.util.UUID
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.publish.*
import org.gradle.api.tasks.Upload
import org.gradle.kotlin.dsl.*

open class MiskArtifactoryPlugin : Plugin<Project> {
  fun String.execute(
    workingDir: File = File("."),
    timeoutAmount: Long = 30,
    timeoutUnit: TimeUnit = TimeUnit.SECONDS
  ): String? {
    return try {
      ProcessBuilder(*this.split("\\s".toRegex()).toTypedArray())
          .directory(workingDir)
          .redirectOutput(ProcessBuilder.Redirect.PIPE)
          .redirectError(ProcessBuilder.Redirect.PIPE)
          .start().apply {
            waitFor(timeoutAmount, timeoutUnit)
          }.inputStream.bufferedReader().readText()
    } catch (e: IOException) {
      e.printStackTrace()
      null
    }
  }

  fun versionName(): String = "git show -s --format=%cI".execute()!!.slice(0..9).replace("-",
      ".") + "-" +
      "git rev-parse --short HEAD".execute()!!.trim()

  fun kochikuArtifactoryCredentialsProperties(): MutableMap<String, String> {
    val artifactoryProperties = mutableMapOf<String, String>()
    if (System.getenv("SECRETS_PATH") != null) {
      File("${System.getenv(
          "SECRETS_PATH")}/kochiku-artifactory-credentials.properties").forEachLine {
        artifactoryProperties.put(it.split("=").first().toString(), it.split("=").last().toString())
      }
    }
    return artifactoryProperties
  }

  fun findUsername(project: Project, artifactoryProperties: MutableMap<String, String>): String {
    val SQUARE_ARTIFACTORY_USERNAME: String by project
    return artifactoryProperties.get("USERNAME") ?: SQUARE_ARTIFACTORY_USERNAME
  }

  fun findApiKey(project: Project, artifactoryProperties: MutableMap<String, String>): String {
    val SQUARE_ARTIFACTORY_API_KEY: String by project
    return artifactoryProperties.get("PASSWORD") ?: SQUARE_ARTIFACTORY_API_KEY
  }

  override fun apply(project: Project) {
    project.run {
      //      register("publish", Task::class) {
//        publishing {
//          repositories {
//            maven(url = "build/repository")
//            maven(url = "https://maven.global.square/artifactory/thirdparty/") {
//              authentication {
//                credentials {
//                  username = findUsername(project, kochikuArtifactoryCredentialsProperties())
//                  password = findApiKey(project, kochikuArtifactoryCredentialsProperties())
//                }
//              }
//            }
//          }
//        }
//      }
      tasks {
        getByName<Upload>("uploadArchives") {
          repositories {
            println("uploadArchives.................")
            println(versionName())
            val artifactoryProperties = kochikuArtifactoryCredentialsProperties()
            println(findUsername(project, artifactoryProperties))
            println(findApiKey(project, artifactoryProperties))

            maven(url = "https://maven.global.square/artifactory/thirdparty/") {
              version = versionName()
              authentication {
                credentials {
                  username = findUsername(project, kochikuArtifactoryCredentialsProperties())
                  password = findApiKey(project, kochikuArtifactoryCredentialsProperties())
                }
              }
            }

//          publishing {
//            repositories {
//              maven(url = "https://maven.global.square/artifactory/thirdparty/")
//              repositoryUsername = username(project, artifactoryProperties)
//              repositoryPassword = apiKey(project, artifactoryProperties)
//
//            }
          }
        }
      }
    }
  }
}
