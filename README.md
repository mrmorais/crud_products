# CRUD - Products &middot; ![](https://img.shields.io/badge/node-v8.11.3%20-brightgreen.svg) ![](https://img.shields.io/badge/npm-v5.6.0%20-brightgreen.svg) ![](https://img.shields.io/badge/mongo-v4.0.8%20-brightgreen.svg)

A simple CRUD application on products made with Node + React + MongoDB stack.

## Installation

This project is npm managed, so you must install the required npm packages in the project root directory

```
$ npm install 
```

You have to configure the environment variables by setting your `.env` file. Copy or rename the `.env.example` to `.env` and modify the constants on it.

Once everything is done is time to run or build our sources.

## Starting / Building

### API Server

To start, without build, the API server while developing the app uses `@babel/cli` to it. To make use of it run:

```
$ npm run start:server
```

On the other hand if you want to build a "node runnable" application run:

```
$ npm run build:server
```

It will generate a processed code at `dist` folder. So, in order to start execute:

```
$ node ./dist/server.js
```

### React App

The React application is bundled by `webpack`, it will generate a single `.js` file `./public/js/bundle.js`.

```
4 npm run build:react
```

## Documentation
