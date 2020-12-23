const http=require("http");
const { runInNewContext } = require("vm");
http.createServer(function (req,res){
    res.writeHead(200,{"Content-Type":'text/plain'});
    res.end("hello world")
}).listen(8124,"127.0.0.1");
console.log("werver running at http://127.0.0.1:8124")