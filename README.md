# Node development starting point

This is currently (I think) my preferred way of setting up a project with Node.js

The setup includes
* Browserify for modular javascript
* Node Express for the server side
* Connect livereload middleware when in development
* Less for CSS

To install dependencies, run `npm install`

To spin up a server for development, run `grunt server`

Any changes to javascript files in the `src/js` folder will make the browser reload itself
Any changes to less files in the `src/less` folder will make the browser reload itself
Any changes to javascript files in the `server` folder will restart express

When in production, make sure `NODE_ENV` is set correctly unless for some reason you actually want livereloading
