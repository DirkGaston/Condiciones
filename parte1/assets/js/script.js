var image = document.querySelector("img");

function borderFunction() {
  if (image.style.border == "2px solid red")
    image.style.border = "none";
  else image.style.border = "2px solid red";
}
