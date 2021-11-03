const connect = require('./client');
const setupInput = require("./input");
// establishes a connection with the game server

//client.write('Name: Hi');

console.log("Connecting ...");
let connection = connect();
setupInput(connection);
// setup interface to handle user input from stdin

