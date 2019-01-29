plugins {
  `kotlin-dsl`
  `maven-publish`
}

group = "misk-artifactory-plugin"

gradlePlugin {
  plugins {
    register("MiskArtifactoryPlugin") {
      id = "misk-artifactory-plugin"
      implementationClass = "misk-artifactory-plugin.MiskArtifactoryPlugin"
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

//apply(plugin: `misk-artifactory-plugin`)