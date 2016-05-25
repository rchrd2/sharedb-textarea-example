var http = require("http");
var sharedb = require("sharedb");
var connect = require("connect");

var WebSocket = require("ws");
var Duplex = require("stream").Duplex;

// Register text type in server
var ottext = require("ot-text");
var types = require("sharedb/lib/types");
types.register(ottext.type);

var server = http.createServer(
  connect().use(connect['static'](__dirname + "/static")));

var wss = new WebSocket.Server({
  server: server
});
var share = sharedb();

wss.on("connection", function(ws, req) {
  var stream = new Duplex({
    objectMode: true
  });

  stream.headers = ws.upgradeReq.headers;
  stream.remoteAddress = ws.upgradeReq.connection.remoteAddress;
  console.log("remote address:"+stream.remoteAddress);
  stream._write = function(op, encoding, next) {
    ws.send(JSON.stringify(op));
    next();
  };
  stream._read = function() {};
  stream.on("error", function(msg) {
    ws.close();
  });
  stream.on("end", function() {
    ws.close();
  });

  ws.on("message", function(op) {
    console.log('op', JSON.stringify(JSON.parse(op), null, 2));
    stream.push(op);
  });
  ws.on("close", function() {
    stream.push(null);
    stream.emit("close");
    stream.emit("end");
    stream.end();
  });

  share.listen(stream);
});
var port = 8080;
server.listen(port, function() {
  return console.log("Listening on " + port);
});
