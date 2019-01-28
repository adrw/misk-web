plugins {
    `kotlin-dsl`
    `maven-publish`
}

group = "misk-artifactory-plugin"
version = "0.0.1"

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

tasks {

}

repositories {
    jcenter()
}
