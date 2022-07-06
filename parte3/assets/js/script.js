function passwordCheck() {
  var select1 = document.querySelector("#digit1");
  var option1 = select1.options[select1.selectedIndex];
  var select2 = document.querySelector("#digit2");
  var option2 = select2.options[select2.selectedIndex];
  var select3 = document.querySelector("#digit3");
  var option3 = select3.options[select3.selectedIndex];

  var total = option1.value + option2.value + option3.value;

  var para = document.createElement("p");

  if (total === "911") {
    para.innerHTML = "Password 1 correcto";
    document.querySelector(".container").appendChild(para);
  } else if (total === "714") {
    para.innerHTML = "Password 2 correcto";
    document.querySelector(".container").appendChild(para);
  } else {
    para.innerHTML = "Password incorrecto";
    document.querySelector(".container").appendChild(para);
  }
}
