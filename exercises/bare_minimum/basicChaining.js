/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var prom = require('../../exercises/bare_minimum/promisification.js');
var con = require('../../exercises/bare_minimum/promiseConstructor.js');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return new Promise(function(resolve, reject){
      resolve(con.pluckFirstLineFromFileAsync(readFilePath))})
.then(username => prom.getGitHubProfileAsync(username))
.then(user => fs.writeFileSync(writeFilePath, JSON.stringify(user)))
}

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
