console.log("start content script");

const meta = document.createElement("meta");
meta.setAttribute("data-ext", "hoge1");
const head = document.getElementsByTagName("head")[0];
head.appendChild(meta);

console.log("end content script");
