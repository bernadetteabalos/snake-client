const stdin = process.stdin;
let connection;
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    stdin.on("data", (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        conn.write('Move: up');
      }
      if (key === 's') {
        conn.write('Move: down');
      }
      if (key === 'a') {
        conn.write('Move: left');
      }
      if (key === 'd') {
        conn.write('Move: right');
      }
      if (key === 'j') {
        conn.write('Say: Zoomers');
      }
  })};




  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = setupInput;