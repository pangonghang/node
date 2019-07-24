var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.one;
handle["/one"] = requestHandlers.one;
handle["/two"] = requestHandlers.two;

server.start(router.route, handle);