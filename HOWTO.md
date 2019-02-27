# How to make a New Misk Tab

- For this guide, the following tab properties are used for example
  - name: T-Rex Food Log
  - slugified name: trexfoodlog
  - port: 30420
  - action name: TRexFoodLogAction

## Directory Structure

- Any new tabs or `@misk/` packages live in a top level `web/` directory of the same level as your service's `src`, `build`, or `out` directories.
- All tabs live in `web/tabs/` and `@misk/` packages live in `web/@misk/`. For most services, you will only need a `web/tabs/` directory.
- This structure is recommended to structure your tab web code separately from your Kotlin or Java code living in `src` and `test`. An example is included below.

```
  trex-service/
    build/
    out/
    src/
    web/
      tabs/
        trexangermanagement/
        trexhealthcheck/
        trexfoodlog/
          lib/
          node_modules/
          src/
            index.ts

          package.json
```

## Getting Started with a New Tab

- Install the Misk-Web CLI

  ```Bash
  $ npm install -g @misk/cli
  $ miskweb -h
  ```

- Use the Misk-Web CLI to initialize a new tab

  ```Bash
  $ miskweb new
  ```

  or

  ```Bash
  $ curl -s https://raw.githubusercontent.com/square/misk-web/master/new-tab/get-new-tab.sh | bash -s && ./new-tab.sh
  ```

- The new tab script will help initialize a tab prompting for the name of your new tab.
- Your new tab will include a `miskTab.json` file that has all of the core metadata that your tab requires. It will be prefilled but you should consider changing the port number to one that doesn't conflict with other tabs that you'll be developing.
- `miskTab.json` has the following interface (descriptions below)

  ```Typescript
  export interface IMiskTabJSON {
    name: string
    output_path: string
    port: number
    relative_path_prefix: string
    slug: string
    tsconfigCompilerOptions: any
    version: string
    zipOnBuild: boolean
  }
  ```

  - name: `T-Rex Food Log`. Titlecase tab name.
  - output_path: optional override field. By default it will be `lib/web/_tab/{slug}`.
  - port: `30420`. port number for Webpack Dev Server.
    - Todo(adrw): Find a way to centrally reserve a port number. Otherwise there will be the risk that while working in development mode on your tab and another tab, the other tab may fail to serve because of port conflict.
    - `3100-3199`: Misk infrastructure (ex. Loader tab).
    - `3200-3499`: Shipped with Misk tabs (ex. Config).
    - `3500-9000`: Square reserved ports.
    - `30000-39999`: Open ports for all other tabs built on Misk.
  - relative_path_prefix: optional override field. By default, it will be tab slug prefixed by `_tab/`.
  - slug: lowercase, no symbols name to be used in determining URL domain space. Should be the same as the `package.json::name` without the prefix `misktab-`.
  - tsconfigCompilerOptions: any additional or Typescript compiler options that should be overridden for your tab. Usually should be unnecessary. File bugs if you're finding issues building your tab with the shipped default compiler options.
  - version: Misk Web Framework version
  - zipOnBuild: will zip contents of tab into a `.tgz` file in the tab directory.

## Local Development

- Use `miskweb` CLI to kick off builds (ie. `miskweb build` in your tab directory). The CLI will re-generate your build files using the latest `.gitignore`, `package.json`, `tsconfig.json`, `tslint.json`, `webpack.config.js` templates shipped with `Misk-Web`. This ensures that your build system is always up-to-date with the framework.
  - For local developments, you'll need to install local requirements with `$ npm install`. Run this periodically to get latest versions of Misk-Web libraries.
  - To run a build, use `$ miskweb build`.
  - To start a local dev server, use `$ miskweb start`.
- If you have issues with your local development, the following tasks are included with the miskweb cli
  - `cd tabs/trexfoodlog; miskweb build` to build the tab
  - `cd tabs/trexfoodlog; miskweb tart` for a dev-server to do live editing on your tab

## Configuring with a Misk Service

- Add the following multibindings to a KAbstractModule that will not be included with Testing Modules.

  - If the tab is part of base `Misk`, then install that module in the list of tabs in `misk/src/main/kotlin/misk/web/AdminDashboardModule.kt`.
  - Else If it's a service specific tab, then add to your main service module (ie. for a `UrlShortenerFrontend` tab, install it in `UrlShortenerServiceModule`).
  - Else, install it in your main service module.

  ```Kotlin
  // Tab API Endpoints (not necessary to get your tab working, only serves as an example of an associated WebAction endpoint)
  multibind<WebActionEntry>().toInstance(WebActionEntry<TRexFoodAction>())
  // Add tab to the AdminDashboard in Misk. It will now know to look for it and show up in the dashboard menu.
  multibind<DashboardTab, AdminDashboardTab>().toInstance(DashboardTab(
        name = "T-Rex Food Log",
        slug = "trexfoodlog",
        url_path_prefix = "/_admin/trexfoodlog/",
        category = "Dinosaurs"
        ))
  // Wire up tab resources: slug is used to find the tab compiled code in {service}/web/tab/{slug} and the web_proxy_url is used when developing the tab using Webpack Dev Server so that requests forward to the server and not to the filesystem)
  install(WebTabResourceModule(
        environment = environment,
        slug = "trexfoodlog",
        web_proxy_url = "http://localhost:30420/"
        ))
  ```

  - The following explains why each multibinding is used:

    - WebActionEntry: Installs and configures a WebAction with optional prefix, for binding any API endpoints used in the Tab. This is not necessary to get your tab working, and only serves as an example of an associated WebAction endpoint.
    - DashboardTab: Metadata of the tab that is used to generate dashbaord menu and other views. This adds the tab to the AdminDashboard in Misk. It will now know to look for it and show up in the dashboard menu.
    - WebTabResourcesModule: Binds the location of the compiled web code and dev-server so the tab code can be served through the service. The slug is used to find the tab compiled code in {service}/web/tab/{slug} and the web_proxy_url is used when developing the tab using Webpack Dev Server so that requests forward to the server and not to the filesystem)

  - **Tab not loading?** Make sure you have done an initial build before running your service or building a jar. The compiled JS code needs to already be in the filesystem before a jar is created. If you've already added `jar.dependsOn web` then you can re-run the jar task, and it should now include the web tab code.

  - WebTabResourceModule Environment Differences
    - Live Editing a Tab: Use `$miskweb start` in `tabs/trexfoodlog` directory (or `./gradlew web -Pcmd='-d' -Ptabs='tabs/trexfoodlog'`) to start a Webpack-Dev-Server for the specific tab you're editing to see edits live in the browser. This will only work in Development environment. If requests to the dev-server fail, service returns any matching static compiled code for that tab from `classpath` or jar.
    - In Development Mode but not Editing: Use `miskweb build` in `tabs/trexfoodlog` (or `./gradlew web -Ptabs='tabs/trexfoodlog'`) to do a tab build. Proxy web server will still be attempted to be reached but failed requests will return the most recently built tab code from `classpath` or jar.
    - In Production: All web assets are served from the most recently `miskweb build` compiled code that was bundled in the jar.

## Adding your Tab Webpack Build to Gradle

In your service's project `build.gradle` file you will need to add the following to add your tab's compiled code to your service's production Jar artifact.

```Gradle
  sourceSets {
    ...
    main.resources {
      srcDirs += [
        'web/tabs/trexangermanagement/lib',
        'web/tabs/trexhealthcheck/lib',
        'web/tabs/trexfoodlog/lib'
      ]
      exclude '**/node_modules'
    }
  }

  jar.dependsOn web
```

To confirm that your tab is shipping in the jar, you can run the following commands to build the jar, find it in your filesystem, browse the included files, and confirm that related compiled JS code is in your jar.

```Bash
  $ ./gradlew clean assemble jar
  $ find misk/build | grep jar
  $ jar -tf misk/build/libs/{your jar location found above}.jar | grep _tab/trexfoodlog/
```

## Building your Tab

1. Kick off an initial build
   - CLI: (from your tab directory) `$ miskweb build`
   - OR Gradle: (from your project root directory) `$ ./gradlew clean jar` or `$ ./gradlew web`.
1. Start your primary Misk service in IntelliJ.
1. Open up [`http://localhost:8080/_admin/`](http://localhost:8080/_admin/) in the browser.

## Developing your Tab

1. Follow the steps above to build all local tabs and start your service.
1. Run the following commands to spin up a Webpack-Dev-Server to serve live edits to your service.
   - CLI: (from each tab directory in separate terminal windows) `$ miskweb start`
1. This will start webpack-dev-servers for each of your tabs.
1. Your service will now automatically route traffic (when in development mode) to the dev servers and you should see any changes you make appearing live.
1. Restart your service after your webpack-dev-servers are running to take effect.

## Visual Studio Code

Extensions: [`@misk/dev/vscode.extensions.js`](https://raw.githubusercontent.com/square/misk-web/master/packages/%40misk/dev/vscode.extensions.js)
Settings: [`@misk/dev/vscode.settings.js`](https://raw.githubusercontent.com/square/misk-web/master/packages/%40misk/dev/vscode.settings.js)

Add settings by copying the JSON from the file into `.vscode/settings.json` in your Tab repo.

## Other Development Notes

- Notice in the Misk multibindings that the AdminTabAction url had the prefix `_admin/` but all other multibindings had the prefix `_tab/`. This allows you to develop your tab without any of the surrounding Admin dashboard UI or overhead. Use the respective link below to open your tab in the browser.
  - [`http://localhost:8080/_admin/trexfoodlog/`](http://localhost:8080/_admin/trexfoodlog/): full dashboard UI with menu, other tabs...etc. Before the tab is pushed in production, extensive testing should be done here to ensure there are no bugs when the tab is loaded into the dashboard.
  - [`http://localhost:8080/_tab/trexfoodlog/`](http://localhost:8080/_tab/trexfoodlog/): develop your tab in the full browser window without dashboard nav bar or other UI. All functionality and styling should end up being identical to when the tab is loaded in the dashboard.
