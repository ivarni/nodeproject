# Node development starting point

This is currently (I think) my preferred way of setting up a project with Node.js

The setup includes
* Browserify for modular javascript
* Node Express for the server side
* Connect livereload middleware when in development
* Less for CSS
* Growl support for notifications when something fails

1. To install dependencies, run `npm install`
2. To spin up a server for development, run `grunt server`
3. Any changes to source files will make the browser reload itself

## Notes about livereload
When in production, make sure `NODE_ENV` is set correctly unless for some reason you actually want livereloading

## Notes about Growl
The Growl client should be installed (and running) and `growlnotify` must be on PATH.
Using Growl is optional, grunt will not crash if it can't find a local client

## Minification
To avoid screwing up the sourcemap, there is no minification for the dev server, use `grunt dist` to uglify the Javascript source

## TODO
* Run JSHint
* Run tests
