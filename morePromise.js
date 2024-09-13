// var d = new Date();

// console.log(d.getDate());
// console.log(d.getMonth());

// this thing above is just initializing object of a class
// it is similar to creating an object of a class

// but whenever i am creating it i need to give the first argument as a function and the function also need to have the first argument as resolve

// => Pending , resolve , reject

// var date = new Promise(function (onDone) {});
//     // Promise { <pending> }this means onDone has not been called yet
// console.log(date);

var date = new Promise(function (resolve) {
  resolve("foo");
});

function callback() {
  console.log(date);
}

date.then(callback); //Promise { undefined }
