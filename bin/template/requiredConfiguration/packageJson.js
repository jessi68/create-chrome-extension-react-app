const packageJson = ({ name }) => `{
      "name": "${name}",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "repository": "",
      "author": "",
      "license": "MIT",
      "devDependencies": {
        "@babel/cli": "^7.16.7",
      "@babel/core": "^7.16.7",
      "@babel/preset-env": "^7.12.1",
      "@babel/preset-react": "^7.12.1",
      "@hot-loader/react-dom": "^17.0.0-rc.2",
      "@storybook/addon-actions": "^6.4.9",
      "@storybook/addon-essentials": "^6.4.9",
      "@storybook/addon-links": "^6.4.9",
      "@storybook/builder-webpack5": "^6.4.9",
      "@storybook/manager-webpack5": "^6.4.9",
      "@storybook/react": "^6.4.9",
      "@types/chrome": "0.0.125",
      "@types/react": "^16.14.21",
      "@types/react-dom": "^16.9.14",
      "babel-loader": "^8.1.0",
      "copy-webpack-plugin": "^6.2.1",
      "eslint": "^8.5.0",
      "eslint-config-airbnb": "^19.0.4",
      "eslint-config-prettier": "^8.3.0",
      "eslint-plugin-import": "^2.25.3",
      "eslint-plugin-jsx-a11y": "^6.5.1",
      "eslint-plugin-prettier": "^4.0.0",
      "eslint-plugin-react": "^7.28.0",
      "eslint-plugin-react-hooks": "^4.3.0",
      "prettier": "^2.5.1",
      "react-hot-loader": "^4.13.0",
      "ts-loader": "^8.0.5",
      "typescript": "^4.5.4",
      "url-loader": "^4.1.1",
      "webpack": "^5.2.0",
      "webpack-cli": "^4.0.0",
      "webpack-dev-server": "^4.7.2"
    },
    "dependencies": {
      "react": "^16.14.0",
      "react-dom": "^16.14.0"
    },
    "scripts": {
      "start": "webpack --watch",
      "build": "webpack"
    }
  }`;

  module.exports = packageJson;