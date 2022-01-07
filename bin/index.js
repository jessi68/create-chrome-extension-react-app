const fs = require("fs");

const babelrc = require("./template/requiredConfiguration/babelrc");
const eslintrc = require("./template/requiredConfiguration/eslintrc");
const prettierrc = require("./template/requiredConfiguration/prettierrc");
const gitignore = require("./template/requiredConfiguration/gitignore");
const tsconfig = require("./template/requiredConfiguration/tsconfig");
const typeDts = require("./bin/template/requiredConfiguration/type.d.ts.js.js");
const webpackConfig = require("./template/requiredConfiguration/webpackconfig");

// js 확장자 붙여도 아무 문제 없기를!
const background = require("./template/chrome/background");
const content = require("./template/chrome/content");
const popup = require("./template/chrome/popup");
const { default: execCommandSynchronized } = require("./util/commandExec");
const packageJson = require("./template/requiredConfiguration/packageJson");
const { exec } = require("child_process");
const appTemplate = require("./app");

const run = () => {
    const projectName = process.argv[2] || "default-app";

    execCommandSynchronized(`mkdir ${projectName}`);
    execCommandSynchronized(`cd ${projectName}`);
    
    fs.writeFileSync(
        `package.json`,
        packageJson({name: projectName})
    );

    fs.writeFileSync('./babelrc', babelrc);
    fs.writeFileSync('./eslintrc', eslintrc);
    fs.writeFileSync('./prettierrc', prettierrc);
    fs.writeFileSync('./gitignore', gitignore);
    
    fs.writeFileSync(`${projectName}/webpack.config.js`, webpackConfig);

    fs.writeFileSync(`tsconfig.json`, tsconfig);
    fs.writeFileSync(`type.d.ts`, typeDts);

    execCommandSynchronized(`mkdir src && cd src`);
   
    // chrome extension configuration
    fs.writeFileSync('./background.ts', background);
    fs.writeFileSync('./content.tsx', content);
    fs.writeFileSync('./popup.tsx', popup);
    fs.writeFileSync('./App.tsx', appTemplate);

    
}

run();