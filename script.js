//your JS code here. If required.
function removeColor(color) {
  var colorList = document.getElementById("colorSelect");
  var colorItems = colorList.getElementsByTagName("option");

  for (var i = 0; i < colorItems.length; i++) {
    var item = colorItems[i];
    if (item.firstChild.nodeValue.trim() === color) {
      colorList.removeChild(item);
      break;
    }
  }
}




