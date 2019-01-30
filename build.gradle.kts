ext.set("isCi", "true" == System.getenv("CI"))

tasks {
  val miskWebPlugin by registering(GradleBuild::class) {
    dir = file("misk-web-plugin")
    tasks = listOf("publish")
  }

  val jar by registering(GradleBuild::class) {
    dir = file("misk-web")
    tasks = listOf("webBuild", "jar")
  }

  jar {
    dependsOn(miskWebPlugin)
  }

  val example by registering(GradleBuild::class) {
    dir = file("examples/gradle")
    tasks = listOf("example")
  }

  example {
    dependsOn(miskWebPlugin)
  }

  val test by registering(GradleBuild::class) {
    dir = file("examples/gradle")
    tasks = listOf("test")
  }

  test {
    dependsOn(miskWebPlugin)
  }

  val cashUploadPlugin by registering(GradleBuild::class) {
    dir = file("cash-upload-plugin")
    tasks = listOf("publish")
  }

  val uploadMiskWeb by registering(GradleBuild::class) {
    dir = file("misk-web")
    tasks = listOf("jar", "uploadArchives")
  }

  val uploadMiskWebPlugin by registering(GradleBuild::class) {
    dir = file("misk-web-plugin")
    tasks = listOf("uploadArchives")
  }

  uploadMiskWeb {
    dependsOn(cashUploadPlugin)
  }

  uploadMiskWebPlugin {
    dependsOn(cashUploadPlugin)
  }

  register("uploadArchives") {
    dependsOn(listOf(uploadMiskWeb, uploadMiskWebPlugin))
  }
}
