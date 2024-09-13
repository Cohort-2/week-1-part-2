// simple function

function subhAsyncfunction(callback) {
  setTimeout(callback, 2000);
}

subhAsyncfunction(function () {
  console.log("Hello from subhAsyncfunction");
});

// intimidating async functions

function subhAsyncfunction2() {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
  return p;
}

const value = subhAsyncfunction2();
value.then(function () {
  console.log("Hi there");
});
