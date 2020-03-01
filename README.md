# dpkg-library [![CircleCI](https://circleci.com/gh/lauripalonen/dpkg-library.svg?style=svg)](https://circleci.com/gh/lauripalonen/dpkg-library)
A small web page for displaying Debian packages and their depencies.  

Deployed to Heroku: https://dpkg-library.herokuapp.com  

For data parsing I used a parser created by myself: https://github.com/lauripalonen/dpkg-status-parser

## Installation
**Requirements:** Node.js  

clone project with `git clone git@github.com:lauripalonen/dpkg-library.git` or extract the project [.zip](https://github.com/lauripalonen/dpkg-library/archive/master.zip) to a desired directory.  

run `npm install` in the root directory and in ./frontend/ to install depencies.  

To start the development server, run `npm run watch` in root directory. Start the web page by running `npm start` in ./frontend/ directory. Dev server will run in port 3001 and frontend in port 3000 by default. 

## Deployment

To create a production build, run `npm run build:ui` in root directory. After this the web page can be deployed for example to [Heroku](https://devcenter.heroku.com/articles/git)  

Remember to change original heroku url in frontend/App.js to a corresponding address.

## Test

Run tests with command `npm test` on root directory. This will also create a test coverage data to folder ./coverage/.  

Note: at this point tests are only done for backend.

## For further development
- Filtering feature for filtering the package list
- More comprehensive testing
