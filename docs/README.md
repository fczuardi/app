The barebones scaffolding for any new project. Includes:

- ignore files (.gitignore, .jshintignore)
- basic folders structure
- basic tasks for a npm-based build system
- config files for linux and windows CI (travis and appveyor)
- local webserver for serving the app and API

Technology choices/stack
------------------------

Javascript is the main language and is used for almost everything,
from the build scripts, to the web-server, to the application UI,
back-end API and front-end logic, you name it…

node.js/io.js is fun to work with and the npm ecosystem of open
source tools and libraries is insane.

This boilerplate is influenced by React's Flux architecture
and aims to be used with React components (jsx files).

| Function                  | Tool          |
|---------------------------|---------------|
| Task manager/build system | npm scripts, with the help of shelljs for compatibility|
| JS Modules                | node/CommonJS style, require('somelibrary'), module.exports   |
| Bundler                   | browserify    |
| Dev Server/Back-end API   | koa           |
| Front-end UI              | React         |
| Internationalization      | react-intl    |

Comming soon / considering:

| Function                  | Tool          |
|---------------------------|---------------|
| Browser reload            | BrowserSync   |
| Flux implementation       | hoverboard, alt or refulx |

Unrelated recommendations:

| Function                  | Tool          |
|---------------------------|---------------|
| Text editor               | zed           |
| OS                        | lubuntu       |
| Window Manager            | i3            |
| Browser/Dev-tools         | Firefox Developer Edition |

-----

Install
-------

### Install requirements

#### Install git
 - http://git-scm.com/

#### Install nvm (or nvm-windows if on Windows)

- https://github.com/creationix/nvm
- https://github.com/coreybutler/nvm-windows

#### Install io.js (a fork of node.js)

    nvm install iojs
    iojs --version

### Get the source code

    git clone https://github.com/fczuardi/app.git

### Install dev environment dependencies

    cd APP_NAME
    npm install
