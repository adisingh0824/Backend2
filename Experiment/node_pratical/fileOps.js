// fileOps.js

const fs = require('fs');

// 1. File create + write
fs.writeFileSync('student.txt', 'Student Log Start\n');
console.log("File created and data written");

// 2. Append data
fs.appendFileSync('student.txt', 'Student logged in\n');
console.log("Data appended");

// 3. Read file
const data = fs.readFileSync('student.txt', 'utf8');
console.log("File Content:\n", data);

// 4. Overwrite (write again)
fs.writeFileSync('student.txt', 'New Data Written\n');
console.log("File overwritten");

// 5. Delete file (optional)
// fs.unlinkSync('student.txt');
// console.log("File deleted");