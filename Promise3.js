// leaner way
// pretty code

const fs = require("fs");

// my own function

function subhReadFile() {
  console.log("inside subhReadFile");
  return new Promise(function (resolve) {
    console.log("Inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before resolve");
      resolve(data);
    });
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

subhReadFile().then(onDone);

// const ans = subhReadFile();
// console.log(ans);
