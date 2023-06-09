const fs = require('fs');
const PID_FILE = '.appId';

let pid = null;

if (fs.existsSync(PID_FILE)) {
    pid = fs.readFileSync('.appId').toString();
    pid = Number(pid);
}

console.log('pid-', pid);
if (!pid) {
    console.log('Error: PID is not valid.');
}


process.kill(pid, 'SIGINT');
