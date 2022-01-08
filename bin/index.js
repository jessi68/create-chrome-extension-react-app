#! /usr/bin/env node

const fs = require("fs");

const babelrc = require("./template/requiredConfiguration/babelrc");
const eslintrc = require("./template/requiredConfiguration/eslintrc");
const prettierrc = require("./template/requiredConfiguration/prettierrc");
const gitignore = require("./template/requiredConfiguration/gitignore");
const tsconfig = require("./template/requiredConfiguration/tsconfig");
const typeDts = require("./template/requiredConfiguration/type.d.ts");
const webpackConfig = require("./template/requiredConfiguration/webpackconfig");

// js 확장자 붙여도 아무 문제 없기를!
const background = require("./template/chrome/background");
const content = require("./template/chrome/content");
const popup = require("./template/chrome/popup");
const packageJson = require("./template/requiredConfiguration/packageJson");
const appTemplate = require("./app");
const {execSync} = require("child_process");


const execCommandSynchronized = function(command) {
    execSync(command).toString();
}




const run = () => {
 
    const removeChromeCra = function () {
        try {
          execSync("rm -rf node_modules/ package.json yarn.lock");
          execSync(`mv ./${projectName}/* ./`);
          execSync(`mv ./${projectName}/.* ./`);
        } catch (error) {
          console.error(error);
        } finally {
          execSync(`rmdir ${projectName}`);
        }
      };
    
    // const goToFolderAndExecCommand = function (cmd) {
    //     execSync(`cd ${projectName} && ${cmd}`);
    //   };
    
   const projectName = process.argv[2] || "default-app";

    execCommandSynchronized(`mkdir ${projectName}`);
   
 
    //execCommandSynchronized('npm install');

    fs.writeFileSync(`${projectName}/.babelrc`, babelrc);
    fs.writeFileSync(`${projectName}/.eslintrc`, eslintrc);
    fs.writeFileSync(`${projectName}/.prettierrc`, prettierrc);
    fs.writeFileSync(`${projectName}/.gitignore`, gitignore);

   
    fs.writeFileSync(
        `${projectName}/package.json`,
        packageJson({name: projectName})
    );

    
    fs.writeFileSync(`${projectName}/webpack.config.js`, webpackConfig);

    fs.writeFileSync(`${projectName}/tsconfig.json`, tsconfig);
    fs.writeFileSync(`${projectName}/type.d.ts`, typeDts);

    execCommandSynchronized(`cd ${projectName} && mkdir src`);
   
    // chrome extension configuration
    fs.writeFileSync(`${projectName}/src/background.ts`, background);
    fs.writeFileSync(`${projectName}/src/content.tsx`, content);
    fs.writeFileSync(`${projectName}/src/popup.tsx`, popup);
    fs.writeFileSync(`${projectName}/src/App.tsx`, appTemplate);

    execCommandSynchronized(`npm install --legacy-peer-deps`);
    execCommandSynchronized('npm install');
    //removeChromeCra();
}

run();