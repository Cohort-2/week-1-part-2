// async and sync functions

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hello from main.js");

let a = 0;
for (i = 0; i < 9999999999; i++) {
  //takes very long time longer than the file read
  a++;
}

console.log("Hello from main.js again");

// while the thread is busy we will be ignoring the callback queue
// event loop checks what is the latest code that need to run out
