function nightDay_bu(self) {
  //밤낮모드 버튼 함수
  var target = document.querySelector("body");

  if (self.value == "night") {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    self.value = "day"; // 여기서 this는 자신이 속한 버튼을 참조함 버튼에 id값을 만든후 document.querySelector('#id값')로 대체가능
    sel_color("powderblue");
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    self.value = "night";
    sel_color("blue");
  }
}

function sel_color(color) {
  var i = 0;
  var site = document.querySelectorAll("a");
  while (i < site.length) {
    site[i].style.color = color;
    i = i + 1;
  }
}
