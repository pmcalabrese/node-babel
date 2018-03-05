# Node.js Babel Boilerplate
A minimal boilerplate for running Node.js with Babel or Webapck 4.

## 1. Clone project

    git clone git@github.com:pmcalabrese/node-babel.git

## 2. Install dependencies

    npm install

## 3. Start work

The workflow consist of running the compiler with:

    npm run watch

This command will watch the files in the src folder and automatically compile them and put in the dist folder.
When you are done you can run your application with:

    npm start

## 4. Build

You also have the option to build once with

    npm run build

## 5. With webpack 4

If Babel is not your thing, a minimal configuration for Webpack 4 has been added. This allow you to use webpack for buiild and bundle the application. Source map in development mode are working.
The commands are:
- npm run webpack:build
- npm run webpack:watch
- npm run webpack:buildprod