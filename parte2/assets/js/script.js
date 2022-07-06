function result() {
  var sticker1Quant = parseInt(document.querySelector("#sticker1Quant").value);
  var sticker2Quant = parseInt(document.querySelector("#sticker2Quant").value);
  var sticker3Quant = parseInt(document.querySelector("#sticker3Quant").value);

  var total = sticker1Quant + sticker2Quant + sticker3Quant;

  if (total <= 10) {
    document.querySelector("#stickerTotal").innerHTML = total;
  } else {
    stickerTotal.innerHTML = "demasiados";
  }
}
