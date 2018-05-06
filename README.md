# Lab 10 Stacks
**Author**: Lacy Hogan
**Version**: 1.0.1

## Overview
This applications creates a Stack constructor that uses 4 methods: push, pop, peek, and isEmpty. It requires in a Linked List and Node constructors. 

## Getting Started
As a user, you will need to have Nodemon installed on your computer in order to start the server.

You will need to include the following scripts in your package.json in order to run the tests and nodemon:

 "scripts": {
    "test": "eslint . && jest --coverage",
    "start": "nodemon main.js"

You will need to init the following dependencies and devDependencies before utilizing this application:

  "devDependencies": {
    "babel-eslint": "^8.2.3",
    "babel-preset-env": "^1.6.1",
    "babel-register": "^6.26.0",
    "eslint": "^4.19.1",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.11.0",
    "eslint-plugin-jest": "^21.15.1",
    "jest": "^22.4.3",
    "nodemon": "^1.17.3",
    "superagent": "^3.8.2"
  },
  "dependencies": {
    "dotenv": "^5.0.1",
    "winston": "^3.0.0-rc5"
  }

Create a .env file and include the following:
NODE_ENV=development
PORT=3000

## Architecture
This application is written in JavaScript and uses Node.js. You will need nodemon installed.  

The test will be run using jest. In one terminal, run the command: nodemon index.js. Then, in a separate terminal, run the commands: npm run test.


## Change Log
04-27-2018 5:34pm - Application functions created and passing all tests

## Credits and Collaborations
