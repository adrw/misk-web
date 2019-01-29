plugins {
  `kotlin-dsl`
  `maven-publish`
  id("misk-artifactory-plugin") version "0.0.1"
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
