// ---------------------------------------------
const fs = require('fs');
console.log('process.pid - ', process.pid);
fs.writeFileSync('.appId', String(process.pid))
// ---------------------------------------------


// -----------------------------
const http = require('http');
const port = 3000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(port);
// -----------------------------



process.on('SIGINT', (code, signal) => {
    console.log('Received signal - SIGINT');
    console.log('code-', code);
    console.log('signal-', signal);
    process.exit(0)
})

process.on('SIGKILL', (code, signal) => {
    console.log('Received signal - SIGKILL');
    console.log('code-', code);
    console.log('signal-', signal);
    process.exit(0)
})
