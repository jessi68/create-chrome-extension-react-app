const fs = require("fs");

const babelrc = require("./template/requiredConfiguration/babelrc");
const eslintrc = require("./template/requiredConfiguration/eslintrc");
const prettierrc = require("./template/requiredConfiguration/prettierrc");
const gitignore = require("./template/requiredConfiguration/gitignore");
const tsconfig = require("./template/requiredConfiguration/tsconfig");
const typeDts = require("./template/requiredConfiguration/type.d.ts.js");
const webpackConfig = require("./template/requiredConfiguration/webpackconfig");

// js 확장자 붙여도 아무 문제 없기를!
const background = require("./template/chrome/background");
const content = require("./template/chrome/content");
const popup = require("./template/chrome/popup");

