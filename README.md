# typescript startup kit for pptr

## Purpose

This is a start-up kit for a typescript project, which uses puppeteer.

## Instruction

1. Git clone this repository
2. Run "npm install" once to get necessary node modules.
3. Run "mkdir img" onece to create a test save folder.
4. Run "npm start"
5. Check if there is a png file in the src directory.

## Without cloneing the repository

Followings are basic command for setting typescript & pptr
see https://typescript-jp.gitbook.io/deep-dive/nodejs, https://www.npmjs.com/package/@types/puppeteer

### Run the following commands.

```shell
# set up package.json
npm init -y

# install typescript
npm install typescript --save-dev

# Install node.d.ts for Node.js programs
npm install @types/node --save-dev

# install puppeteer
npm i puppeteer puppeteer-core

# Install @types/puppeteer package
npm install --save-dev @types/puppeteer

# Initialize TypeScript configuration file tsconfig.json
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

# Compile TypeScript and install ts-node to run in Node.js
npm install ts-node --save-dev

# Install nodemon to restart ts-node each time a file is changed
npm install nodemon --save-dev
```

### Add the following script to package.json

```package.json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
```

> Now you can develop comfortably:
> every time you run npm start and change index.ts, the following will happen automatically: npm start will run > npm start and index.ts will be changed automatically.

- nodemon re-runs ts-node
- ts-node automatically retrieves tsconfig.json and TypeScript version and compiles TypeScript
- ts-node executes the output JavaScript in Node.js
  When you are ready to deploy your JavaScript application, run npm run build.

### create src dir & files

```shell
mkdir src
touch src/index.ts
```

### Testing "npm start"
