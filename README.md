Forge
=====

A language that compiles to WebAssembly and mirrors the syntax of Elixir.

[![Version](https://img.shields.io/npm/v/@thinkforge/forge.svg)](https://www.npmjs.com/package/@thinkforge/forge)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ThinkForge/forge?branch=master&svg=true)](https://ci.appveyor.com/project/ThinkForge/forge/branch/master)
[![Codecov](https://codecov.io/gh/ThinkForge/forge/branch/master/graph/badge.svg)](https://codecov.io/gh/ThinkForge/forge)
[![Downloads/week](https://img.shields.io/npm/dw/thinkforge/forge.svg)](https://www.npmjs.com/package/@thinkforge/forge)
[![License](https://img.shields.io/npm/l/@thinkforge/forge.svg)](https://github.com/ThinkForge/forge/blob/master/LICENSE.md)
[![Greenkeeper badge](https://badges.greenkeeper.io/ThinkForge/Forge.svg)](https://greenkeeper.io/)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g @thinkforge/forge
$ forge COMMAND
running command...
$ forge (-v|--version|version)
@thinkforge/forge/0.0.3-ALPHA win32-x64 node-v9.11.1
$ forge --help [COMMAND]
USAGE
  $ forge COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @thinkforge/forge
$ forge COMMAND
running command...
$ forge (-v|--version|version)
@thinkforge/forge/0.0.2-ALPHA win32-x64 node-v9.11.1
$ forge --help [COMMAND]
USAGE
  $ forge COMMAND
...
```

# Commands
<!-- commands -->
* [`forge build [FILE]`](#forge-build-file)
* [`forge help [COMMAND]`](#forge-help-command)

## `forge build [FILE]`

Builds your .frg file(s).

```
USAGE
  $ forge build [FILE]

OPTIONS
  -f, --force      force replace output files
  -h, --help       show CLI help
  -o, --name=name  output file

EXAMPLE
  $ forge build test.frg -o test.wasm
       Built test.wasm!
```

_See code: [src\commands\build.ts](https://github.com/ThinkForge/forge/blob/v0.0.3-ALPHA/src\commands\build.ts)_

## `forge help [COMMAND]`

display help for forge

```
USAGE
  $ forge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src\commands\help.ts)_
<!-- commandsstop -->
* [`forge hello [FILE]`](#forge-hello-file)
* [`forge help [COMMAND]`](#forge-help-command)

## `forge hello [FILE]`

describe the command here

```
USAGE
  $ forge hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ forge hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/ThinkForge/forge/blob/v0.0.2-ALPHA/src\commands\hello.ts)_

## `forge help [COMMAND]`

display help for forge

```
USAGE
  $ forge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src\commands\help.ts)_
<!-- commandsstop -->
