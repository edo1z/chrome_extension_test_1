document.getElementById("hoge").addEventListener("click", function () {
  console.log("clicked hoge");
  color = this.style.backgroundColor;
  if (color == "rgb(255, 0, 0)") {
    this.style.backgroundColor = "#00f";
  } else {
    this.style.backgroundColor = "#f00";
  }
});
