const connect = require('./client');
// establishes a connection with the game server

//client.write('Name: Hi');

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const stdin = process.stdin;
const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
})};

setupInput();