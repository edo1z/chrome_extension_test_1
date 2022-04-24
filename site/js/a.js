console.log("start a.js");
if (document.querySelector('[data-ext="hoge1"]')) {
  console.log("preview mode");
} else {
  console.log("production mode");
}

if (document.querySelector('[data-ext="hello"]')) {
  console.log("hello OK");
} else {
  console.log("hello NG");
}
console.log("end a.js");

window.onload = function () {
  if (document.querySelector('[data-ext="hoge1"]')) {
    console.log("preview mode 2");
  } else {
    console.log("production mode 2");
  }
};
