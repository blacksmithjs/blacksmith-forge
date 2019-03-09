# blacksmith-forge

The official command line interface for BlacksmithJS

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/blacksmith-forge.svg)](https://npmjs.org/package/blacksmith-forge)
[![Downloads/week](https://img.shields.io/npm/dw/blacksmith-forge.svg)](https://npmjs.org/package/blacksmith-forge)
[![License](https://img.shields.io/npm/l/blacksmith-forge.svg)](https://github.com/mark-rodgers/blacksmith-forge/blob/master/package.json)

<!-- toc -->
* [blacksmith-forge](#blacksmith-forge)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g blacksmith-forge
$ blacksmith-forge COMMAND
running command...
$ blacksmith-forge (-v|--version|version)
blacksmith-forge/0.0.0 darwin-x64 node-v10.14.2
$ blacksmith-forge --help [COMMAND]
USAGE
  $ blacksmith-forge COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`blacksmith-forge app:create`](#blacksmith-forge-appcreate)
* [`blacksmith-forge app:update`](#blacksmith-forge-appupdate)
* [`blacksmith-forge cache:clear`](#blacksmith-forge-cacheclear)
* [`blacksmith-forge cache:get`](#blacksmith-forge-cacheget)
* [`blacksmith-forge cache:set`](#blacksmith-forge-cacheset)
* [`blacksmith-forge config:export`](#blacksmith-forge-configexport)
* [`blacksmith-forge config:get`](#blacksmith-forge-configget)
* [`blacksmith-forge config:import`](#blacksmith-forge-configimport)
* [`blacksmith-forge config:set`](#blacksmith-forge-configset)
* [`blacksmith-forge help [COMMAND]`](#blacksmith-forge-help-command)
* [`blacksmith-forge plugin:create`](#blacksmith-forge-plugincreate)
* [`blacksmith-forge plugin:disable`](#blacksmith-forge-plugindisable)
* [`blacksmith-forge plugin:enable`](#blacksmith-forge-pluginenable)
* [`blacksmith-forge plugin:install`](#blacksmith-forge-plugininstall)
* [`blacksmith-forge plugin:list`](#blacksmith-forge-pluginlist)
* [`blacksmith-forge plugin:uninstall`](#blacksmith-forge-pluginuninstall)
* [`blacksmith-forge plugin:update`](#blacksmith-forge-pluginupdate)
* [`blacksmith-forge theme:create`](#blacksmith-forge-themecreate)
* [`blacksmith-forge theme:install`](#blacksmith-forge-themeinstall)
* [`blacksmith-forge theme:list`](#blacksmith-forge-themelist)
* [`blacksmith-forge theme:set`](#blacksmith-forge-themeset)
* [`blacksmith-forge theme:uninstall`](#blacksmith-forge-themeuninstall)
* [`blacksmith-forge theme:update`](#blacksmith-forge-themeupdate)

## `blacksmith-forge app:create`

Create a BlacksmithJS app

```
USAGE
  $ blacksmith-forge app:create

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/app/create.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/app/create.js)_

## `blacksmith-forge app:update`

Update a BlacksmithJS app

```
USAGE
  $ blacksmith-forge app:update

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/app/update.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/app/update.js)_

## `blacksmith-forge cache:clear`

Clear all cached objects

```
USAGE
  $ blacksmith-forge cache:clear

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/cache/clear.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/cache/clear.js)_

## `blacksmith-forge cache:get`

Fetch a cached object and display it

```
USAGE
  $ blacksmith-forge cache:get

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/cache/get.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/cache/get.js)_

## `blacksmith-forge cache:set`

Cache an object expressed in JSON

```
USAGE
  $ blacksmith-forge cache:set

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/cache/set.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/cache/set.js)_

## `blacksmith-forge config:export`

Export configuration to file

```
USAGE
  $ blacksmith-forge config:export

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/config/export.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/config/export.js)_

## `blacksmith-forge config:get`

Get a configuration variable

```
USAGE
  $ blacksmith-forge config:get

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/config/get.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/config/get.js)_

## `blacksmith-forge config:import`

Import configuration from file

```
USAGE
  $ blacksmith-forge config:import

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/config/import.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/config/import.js)_

## `blacksmith-forge config:set`

Set a configuration variable

```
USAGE
  $ blacksmith-forge config:set

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/config/set.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/config/set.js)_

## `blacksmith-forge help [COMMAND]`

display help for blacksmith-forge

```
USAGE
  $ blacksmith-forge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `blacksmith-forge plugin:create`

Create a new plugin

```
USAGE
  $ blacksmith-forge plugin:create

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/create.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/create.js)_

## `blacksmith-forge plugin:disable`

Disable plugin(s)

```
USAGE
  $ blacksmith-forge plugin:disable

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/disable.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/disable.js)_

## `blacksmith-forge plugin:enable`

Enable plugin(s)

```
USAGE
  $ blacksmith-forge plugin:enable

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/enable.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/enable.js)_

## `blacksmith-forge plugin:install`

Install plugin(s) from the BlacksmithJS community repository

```
USAGE
  $ blacksmith-forge plugin:install

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/install.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/install.js)_

## `blacksmith-forge plugin:list`

List installed plugins

```
USAGE
  $ blacksmith-forge plugin:list

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/list.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/list.js)_

## `blacksmith-forge plugin:uninstall`

Uninstall plugin(s)

```
USAGE
  $ blacksmith-forge plugin:uninstall

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/uninstall.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/uninstall.js)_

## `blacksmith-forge plugin:update`

Update plugin(s)

```
USAGE
  $ blacksmith-forge plugin:update

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/plugin/update.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/plugin/update.js)_

## `blacksmith-forge theme:create`

Create a new theme

```
USAGE
  $ blacksmith-forge theme:create

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/theme/create.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/theme/create.js)_

## `blacksmith-forge theme:install`

Install theme(s) from the BlacksmithJS community repository

```
USAGE
  $ blacksmith-forge theme:install

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/theme/install.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/theme/install.js)_

## `blacksmith-forge theme:list`

List installed themes

```
USAGE
  $ blacksmith-forge theme:list

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/theme/list.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/theme/list.js)_

## `blacksmith-forge theme:set`

Set active theme

```
USAGE
  $ blacksmith-forge theme:set

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/theme/set.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/theme/set.js)_

## `blacksmith-forge theme:uninstall`

Uninstall theme(s)

```
USAGE
  $ blacksmith-forge theme:uninstall

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/theme/uninstall.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/theme/uninstall.js)_

## `blacksmith-forge theme:update`

Update theme(s)

```
USAGE
  $ blacksmith-forge theme:update

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/theme/update.js](https://github.com/mark-rodgers/blacksmith-forge/blob/v0.0.0/src/commands/theme/update.js)_
<!-- commandsstop -->
