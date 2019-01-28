package `misk-artifactory-plugin`

import java.io.File
import java.io.IOException
import java.lang.System
import java.time.LocalDateTime
import java.util.concurrent.TimeUnit
import java.util.UUID
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.Task
import org.gradle.api.tasks.Copy
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

  fun String.slugify(): String {
    return this.replace("/", "-").replace(":", "-").replace(".", "-")
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

  fun username(project: Project, artifactoryProperties: MutableMap<String, String>) : String {
    val SQUARE_ARTIFACTORY_USERNAME: String by project
    return artifactoryProperties.get("USERNAME") ?: SQUARE_ARTIFACTORY_USERNAME
  }

  fun apiKey(project: Project, artifactoryProperties: MutableMap<String, String>) : String {
    val SQUARE_ARTIFACTORY_API_KEY: String by project
    return artifactoryProperties.get("PASSWORD") ?: SQUARE_ARTIFACTORY_API_KEY
  }

  override fun apply(project: Project) {
    project.run {
      tasks {
        register("uploadArchives", Task::class) {
          println("uploadArchives.................")
          println(versionName())
          val artifactoryProperties = kochikuArtifactoryCredentialsProperties()
          println(username(project, artifactoryProperties))
          println(apiKey(project, artifactoryProperties))


        }
      }
    }
  }
}
