# WARNING:
## Do not edit the files on this folder

The files in the directory ```/transpiled``` are generated, if you need
to change something, find the correspondent file under the ```/src``` path.

## Why does this folder got checked in the version control?

External services made to work with Javascript files,
such as the static code analisys tools [Codacy][codacy] and
[Code Climate][codeclimate] (as of in the day of this writing)
, do not expect other languages that
compiles to Javascript, such as React's JSX.

Keeping a directory of transpiled source files is not an elegant
solution, but was the hack that I could come up with, if you
have a better suggestion please let me know by opening an issue
or sending me an email, the contacts are on the
```package.json``` file.


[codacy]: https://www.codacy.com
[codeclimate]: https://codeclimate.com
