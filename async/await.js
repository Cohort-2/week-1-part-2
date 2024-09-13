// without using async / await

function subhAsyncfunction(callback) {
  let p = new Promise(function (resolve) {
    resolve("Hi there !!!");
  });
  return p;
}

function main() {
  subhAsyncfunction().then(function (data) {
    console.log(data);
  });
}

main();

// using async / await

function subhAsyncfunction2() {
  let p = new Promise(function (resolve) {
    // Do some async logic here
    resolve("Hi there using async/await!!!");
  });
  return p;
}

async function main2() {
  const value = await subhAsyncfunction2(); // pending is no await
  console.log(value);
}
main2();
