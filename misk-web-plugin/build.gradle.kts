plugins {
  `kotlin-dsl`
  `maven-publish`
//  id("cash-upload-plugin") version "0.0.1"
}

group = "misk-web-plugin"

gradlePlugin {
  plugins {
    register("MiskWebPlugin") {
      id = "misk-web-plugin"
      implementationClass = "misk-web-plugin.MiskWebPlugin"
    }
  }
}

publishing {
  repositories {
    maven(url = "build/repository")
  }
}

repositories {
  jcenter()
}

if (rootProject.file("../hooks.gradle.kts").exists()) {
  apply(from = rootProject.file("../hooks.gradle.kts"))
}