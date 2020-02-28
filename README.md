# dpkg-library
A small web page for displaying Debian packages and their depencies.

For data parsing I used my own parser: https://github.com/lauripalonen/dpkg-status-parser

## Installation
**Requirements:** Node.js  

clone project with `git clone git@github.com:lauripalonen/dpkg-library.git` or extract the project [.zip](https://github.com/lauripalonen/dpkg-library/archive/master.zip) to a desired directory.  

run `npm install` in the root directory and in ./frontend/ to install depencies.  

To start the development server, run `npm run watch` in root directory. Start the web page by running `npm start` in ./frontend/ directory.  

## For further development
- Filtering feature for filtering the package list
- Tests for backend to ensure that the data is valid in case of changes in code
