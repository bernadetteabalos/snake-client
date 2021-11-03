const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  })

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server.")
    conn.write('Name: BRN');

    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
    // setTimeout(() => {
    //   conn.write('Move: down');
    // }, 150);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 100);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 200);
  })


  return conn;
};

module.exports = connect;