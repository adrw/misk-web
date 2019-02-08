import java.io.File
import java.io.IOException
import java.lang.System
import java.time.LocalDateTime
import java.util.concurrent.TimeUnit
import java.util.UUID
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.publish.*
import org.gradle.api.publish.maven.plugins.MavenPublishPlugin
import org.gradle.api.tasks.Upload
import org.gradle.kotlin.dsl.*

plugins {
  `kotlin-dsl`
  `maven-publish`
  `java-gradle-plugin`
  id("com.gradle.plugin-publish") version "0.10.0"
}

pluginBundle {
  website = "https://github.com/square/misk-web"
  vcsUrl = "https://github.com/square/misk-web"
  tags = listOf("misk", "misk-web")
}

group = "com.squareup.misk-web-plugin"
version = "0.1.3"

gradlePlugin {
  plugins {
    create("MiskWebPlugin") {
      id = "com.squareup.misk-web-plugin"
      displayName = "Misk-Web Plugin"
      description = "Web build tasks for to compile your Misk-Web tabs in a Gradle project."
      implementationClass = "com.squareup.misk-web-plugin.MiskWebPlugin"
    }
  }
}

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

fun loadGradleProperties(path: String): MutableMap<String, String> {
  val gradleProperties = mutableMapOf<String, String>()
  File(path).forEachLine {
    gradleProperties.put(it.split("=").first().toString(), it.split("=").last().toString())
  }
  return gradleProperties
}

fun kochikuArtifactoryCredentialsProperties(): MutableMap<String, String> {
  return if (System.getenv("SECRETS_PATH") != null) {
    loadGradleProperties("${System.getenv(
        "SECRETS_PATH")}/kochiku-artifactory-credentials.properties")
  } else {
    mutableMapOf()
  }
}

fun localArtifactoryCredentialsProperties(): MutableMap<String, String> {
  return loadGradleProperties("${System.getenv(
      "HOME")}/.gradle/gradle.properties")
}

fun findUsername(project: Project): String {
  val SQUARE_ARTIFACTORY_USERNAME: String by project
  return kochikuArtifactoryCredentialsProperties().get("USERNAME")
      ?: localArtifactoryCredentialsProperties().get("SQUARE_ARTIFACTORY_USERNAME")
      ?: SQUARE_ARTIFACTORY_USERNAME
}

fun findApiKey(project: Project): String {
  val SQUARE_ARTIFACTORY_API_KEY: String by project
  return kochikuArtifactoryCredentialsProperties().get("PASSWORD")
      ?: localArtifactoryCredentialsProperties().get("SQUARE_ARTIFACTORY_API_KEY")
      ?: SQUARE_ARTIFACTORY_API_KEY
}

fun String.normalizePath(): String {
  return if (this.startsWith("/") && this.endsWith("/")) {
    this.drop(1).dropLast(1)
  } else if (this.startsWith("/") && !this.endsWith("/")) {
    this.drop(1)
  } else if (!this.startsWith("/") && this.endsWith("/")) {
    this.dropLast(1)
  } else {
    this
  }
}

publishing {
  repositories {
    maven(url = "build/repository")
//    maven(url = "https://maven.global.square/artifactory/thirdparty/") {
//      version = versionName()
//      authentication {
//        credentials {
//          username = findUsername(project)
//          password = findApiKey(project)
//        }
//      }
//    }
  }
}

tasks {
  getByName<Upload>("uploadArchives") {
    repositories {
      maven(url = "https://maven.global.square/artifactory/thirdparty/") {
        version = versionName()
        authentication {
          credentials {
            username = findUsername(project)
            password = findApiKey(project)
          }
        }
      }
    }
  }
}

repositories {
  jcenter()
}
