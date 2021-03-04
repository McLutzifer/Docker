// Datei hello-world-node/Server.js
const http = require("http"),
    os = require("os");

http.createServer((req, res) => {
    const dateTime = new Date(),
    load = os.loadavg(),
    doc = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
    <h1> Hello world: node </h1>
    Serverzeit: ${dateTime}<br />
    Serverauslastung (load): ${load[0]}
</body>
</html>`
res.setHeader('Content-Type', 'text/html');
res.end(doc);
}).listen(8080);