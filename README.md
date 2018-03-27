# Node.js Babel Boilerplate
A minimal boilerplate for running Node.js with Babel, Webapck 4 or Rollup. I started this project because there are some universal or near universal patterns that all node project share in common (like building). Rather than continuously rebuild these, I decide to collect in one repo, which I can pull and then start modifying it.

What you get:

- a simple Babel configuration
- a simple Webpack 4 configuration with sourcemaps
- a simple Rollup configuration with sourcemaps
- a simple setup for testing with Mocha

## 1. Clone project

    git clone git@github.com:pmcalabrese/node-babel.git

## 2. Install dependencies

    npm install

## 3. Start work (Babel by default)

The workflow consist of running the compiler with:

    npm run watch

This command will watch the files in the `src` folder and automatically compile them and put in the `dist` folder.
When you are done you can run your application with:

    npm start

You also have the option to build your app once with:

    npm run build

## 4. Build with Webpack 4

If Babel is not your thing, a minimal configuration for Webpack 4 has been added. This allow you to use webpack for build and bundle your application. The script `build` will generate source map.

The commands are:

- `npm run webpack:build`
- `npm run webpack:watch`
- `npm run webpack:buildprod`

## 5. Build with Rollup

You also have the choice to bundle your application with Rollup. The script `build` will generate source map.

The commands are:

- `npm run rollup:build`
- `npm run rollup:watch`
- `npm run rollup:buildprod`

## 6. Run tests

Test are written in the `test` folder can are bundled with Rollup as default, the destination folder for the tests is `test_dist`. You can write ES6 and import source straight from the `src` folder. For run the test type:

    npm test