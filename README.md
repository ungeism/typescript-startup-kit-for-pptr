# typescript startup kit for pptr

## Purpose

This is a start-up kit for a typescript project, which uses puppeteer.

## Instruction

1. Git clone this repository
2. Run "npm install" once to get necessary node modules.
3. Open the firebase console (from https://firebase.google.com) and add a project
4. From the dashboard of this project, add an app and choose "web" (</>).
5. From the setting of this app, choose "Config" (in Firebase SDK snippet)
6. Copy the config file, and paste into src/config.js file.
7. Replace the word "blog-us" in .firebaserc file with your Firebase project name.
8. Open the firebase console, and create a Cloud Firestore (make it "secure" for now).

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

3. Add the following script to package.json

```package.json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
```

Now you can develop comfortably:
every time you run npm start and change index.ts, the following will happen automatically: npm start will run npm start and index.ts will be changed automatically.

- nodemon re-runs ts-node
- ts-node automatically retrieves tsconfig.json and TypeScript version and compiles TypeScript
- ts-node executes the output JavaScript in Node.js
  When you are ready to deploy your JavaScript application, run npm run build.

4. create src dir & files

```shell
mkdir src
touch index.ts
```
