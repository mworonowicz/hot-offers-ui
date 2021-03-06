This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It's built using the following libraries:
* [React](https://facebook.github.io/react/)
* [Flow](https://flowtype.org/)
* [Redux](http://redux.js.org/)

## Prerequisites 
* [FlowType](https://flowtype.org/)
* [Flow-Typed](https://flowtype.org/blog/2016/10/13/Flow-Typed.html)
    * Install flow-typed `npm install -g flow-typed` typing declaration
    * Run `flow-typed install`

In order to use Flow in Intellij, please familiarize yourself with [Using the Flow Type Checker](https://www.jetbrains.com/help/idea/2016.2/using-the-flow-type-checker.html)
As an alternative to Intellij, [Nuclide](https://nuclide.io) may be helpful. 

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    app.js
    app.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

