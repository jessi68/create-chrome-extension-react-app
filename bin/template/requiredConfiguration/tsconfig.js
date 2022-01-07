const tsconfig = `{
    "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "jsx": "react",
      "strict": true,
      "noImplicitReturns": true,
      "noImplicitAny": true,
      "module": "es6",
      "moduleResolution": "node",
      "target": "es5",
      "allowJs": true
    },
    "include": ["./src/**/*", "src/type.d.ts"]
  }
  
  `;

module.exports = tsconfig;