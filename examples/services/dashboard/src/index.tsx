import { createApp, createIndex } from "@misk/components"
import * as Ducks from "./ducks"
import routes from "./routes"
export * from "./components"
export * from "./containers"

createIndex("dashboard", createApp(routes), Ducks)
