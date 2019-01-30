pluginManagement {
    repositories {
        maven { url = uri("../cash-upload-plugin/build/repository") }
        maven { url = uri("../misk-web-plugin/build/repository") }
        maven("https://plugins.gradle.org/m2/")
    }
}
