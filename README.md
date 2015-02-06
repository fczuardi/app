# app
My current webapp project boilerplate

[![Linux Build](https://travis-ci.org/fczuardi/app.svg)](https://travis-ci.org/fczuardi/app)
[![Windows Build](https://ci.appveyor.com/api/projects/status/knff59625s294m7c?svg=true)](https://ci.appveyor.com/project/fczuardi/app)
[![Code Climate](https://codeclimate.com/github/fczuardi/app/badges/gpa.svg)](https://codeclimate.com/github/fczuardi/app)
[![Codacy Badge](https://www.codacy.com/project/badge/70cbbef2a38a4dac902aa5c34e62ff00)](https://www.codacy.com/public/fabricio/app)
[![devDependency Status](https://david-dm.org/fczuardi/app/dev-status.svg)](https://david-dm.org/fczuardi/app#info=devDependencies)

-----

The barebones scaffolding for any new project. Includes:

- ignore files (.gitignore, .jshintignore)
- basic tasks for a npm-based build system
- config files for linux and windows CI (travis and appveyor)

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

    git clone git@bitbucket.org:fabricio/private-tc-net.git

### Install dev environment dependencies

    cd APP_NAME
    npm install
