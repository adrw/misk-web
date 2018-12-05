# squareup/misk-web

Base Alpine NodeJS package for Misk Web builds.

Includes `misk-web` script and `@misk/` packages. `misk-web` handles running various commands over all @misk/ packages and tabs

# Example Usage

- Build on all tabs:

  ```bash
  $ docker run -d --rm --name container-name -v /absolute/local/path/to/web:/web squareup/misk-web:0.0.1 misk-web -b
  ```

- Build on single tab:

  ```bash
  $ docker run -d --rm --name container-name -v /absolute/local/path/to/web/tabs/tabname:/web/tabs/tabname squareup/misk-web:0.0.1 misk-web -b
  ```

- Dev Server on a single tab:

  ```bash
  $ docker run -d --rm --name container-name -v /absolute/local/path/to/web/tabs/tabname:/web/tabs/tabname squareup/misk-web:0.0.1 misk-web -d
  ```

- Any command over all tabs:

  ```bash
  $ docker run -d --rm --name container-name -v /absolute/local/path/to/web:/web squareup/misk-web:0.0.1 misk-web -z "your command here"
  ```

- See `misk-web -h` for more usage options

# Changelog

| Date       | Docker/ `squareup/ misk-web` | NPM/ `@misk/ common` | NPM/ `@misk/ core` | NPM/ `@misk/ dev` | NPM/ `@misk/ tslint` | Release Notes                                                                                                             |
| ---------- | ---------------------------- | -------------------- | ------------------ | ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 2018-12-\* | `0.1.1-alpha-*`              | `0.1.1-*`            | `0.1.1-*`          | `0.1.1-*`         | `0.1.1-*`            | Alpha                                                                                                                     |
| 2018-12-6  | `0.1.1-alpha-0.5`            | `0.1.1-alpha-3`      | `0.1.1-alpha-17`   | `0.1.1-alpha-3`   | `0.1.1-alpha-1`      | Revert changes in 0.1.1-alpha-0.4                                                                                         |
| 2018-12-5  | `0.1.1-alpha-0.4`            | `0.1.1-alpha-3`      | `0.1.1-alpha-14`   | `0.1.1-alpha-3`   | `0.1.1-alpha-1`      | [DEPRECATED] DashboardTabContainer                                                                                        |
| 2018-12-4  | `0.1.1-alpha-0.3`            | `0.1.1-alpha-3`      | `0.1.1-alpha-9`    | `0.1.1-alpha-3`   | `0.1.1-alpha-1`      | SimpleNetwork Ducks with Selectors                                                                                        |
| 2018-11-30 | `0.1.1-alpha-0.1`            | `0.1.1-alpha-0.1`    | `0.1.1-alpha-0.1`  | `0.1.1-alpha-0.2` | `0.1.1-alpha-0.1`    | Rename @misk/core to @misk/core.                                                                                          |
| 2018-11-30 | `0.1.0`                      | `0.1.0`              | `0.1.0`            | `0.1.0`           | `0.1.0`              | Stable Release 0.1.0. Migrate from awesome-typescript-loader to ts-loader. Rename @misk/core to @misk/core.               |
| 2018-11-29 | `0.0.12`                     | `0.1.0-alpha-0.6`    | `0.1.0-alpha-0.16` | `0.1.0-alpha-0.3` | `0.1.0-alpha-0.1`    | Added `reselect` library                                                                                                  |
| 2018-11-28 | `0.0.11`                     | `0.1.0-alpha-0.5`    | `0.1.0-alpha-0.16` | `0.1.0-alpha-0.2` | `0.1.0-alpha-0.1`    | [DEPRECATED] Added `reselect` library.                                                                                    |
| 2018-11-27 | `0.0.10`                     | `0.1.0-alpha-0.3`    | `0.1.0-alpha-0.15` | `0.1.0-alpha-0.1` | `0.1.0-alpha-0.1`    | Robust ErrorCalloutComponent, async network requests                                                                      |
| 2018-11-26 | `0.0.9`                      | `0.1.0-alpha-0.3`    | `0.1.0-alpha-0.7`  | `0.1.0-alpha-0.1` | `0.1.0-alpha-0.1`    | Fixed refreshNodeModules command.                                                                                         |
| 2018-11-20 | `0.0.8`                      | `0.0.70`             | `0.0.90`           | `0.0.69`          | `0.0.10`             | 0.0.5 misk-web runtime. Large changes to Topbar Component, color Enum added with standard colors.                         |
| 2018-11-19 | `0.0.7`                      | `0.0.70`             | `0.0.90`           | `0.0.69`          | `0.0.10`             | [DEPRECATED] Large changes to Topbar Component, color Enum added with standard colors.                                    |
| 2018-11-16 | `0.0.6`                      | `0.0.70`             | `0.0.90`           | `0.0.69`          | `0.0.10`             | [DEPRECATED] Large changes to Topbar Component, color Enum added with standard colors.                                    |
| 2018-11-07 | `0.0.5`                      | `0.0.61`             | `0.0.79`           | `0.0.64`          | `0.0.10`             | Includes CSS to support all `@blueprintjs` packages.                                                                      |
| 2018-11-06 | `0.0.4`                      | `0.0.60`             | `0.0.76`           | `0.0.61`          | `0.0.10`             | Includes all `@blueprintjs` packages.                                                                                     |
| 2018-11-05 | `0.0.3`                      | `0.0.59`             | `0.0.76`           | `0.0.60`          | `0.0.10`             | Assumes `node_modules` installed centrally in `web/node_modules`. This will involve updating `tsconfig.json` in each tab. |
| 2018-11-02 | `0.0.2`                      | `0.0.55`             | `0.0.71`           | `0.0.57`          | `0.0.8`              |                                                                                                                           |
| 2018-10-26 | `0.0.1`                      | `0.0.52`             | `0.0.68`           | `0.0.46`          | `0.0.7`              |                                                                                                                           |
