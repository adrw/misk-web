plugins {
    id("misk-artifactory-plugin") version "0.0.1"
    `kotlin-dsl`
    `maven-publish`
}

group = "misk-web-plugin"
version = "0.1.3"

gradlePlugin {
    plugins {
        register("MiskArtifactoryPlugin") {
            id = "misk-web-plugin"
            implementationClass = "misk-web-plugin.MiskArtifactoryPlugin"
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