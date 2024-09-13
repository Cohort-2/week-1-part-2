// Until now we have used other peoples asynchronous functions
// How can we create an asynchronous function ourselves?

// ugly way

const fs = require("fs");

function subhReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

//callback function to call

function onDone(data) {
  console.log(data);
}

subhReadFile(onDone);

// it is just a wrapper on top of another async function which is fine .
// Usually all async functions you will write will be on top of JS provided async functions like setTimeout or fs.readFile
