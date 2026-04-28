// coreModules.js

// 1. OS MODULE
const os = require('os');

console.log("=== OS MODULE ===");
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());


// 2. PATH MODULE
const path = require('path');

console.log("\n=== PATH MODULE ===");
const filePath = path.join('folder', 'student', 'data.txt');
console.log("Joined Path:", filePath);

console.log("File Name:", path.basename(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));


// 3. URL MODULE
const url = require('url');

console.log("\n=== URL MODULE ===");
const myUrl = new URL('https://example.com:8080/path/name?user=arjun&id=101');

console.log("Full URL:", myUrl.href);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Query Params:", myUrl.searchParams.get('user'));