const packageJson = ({ name }) => `{
    "name": "${name}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "repository": "",
    "author": "",
    "license": "MIT",
    "devDependencies": {
      
    },
    "dependencies": {
      
    },
    "scripts": {
      "start": "webpack --watch",
      "build": "webpack"
    }
  }`;

  module.exports = packageJson;