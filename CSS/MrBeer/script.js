function ShopNow() {
  document.getElementById("ShopNow").style.backgroundColor = "black";
  document.getElementById("ShopNow").style.color = "#ffd700";
  var delayInMilliseconds = 50; //1 second

  setTimeout(function () {
    window.location.href = "shop.html";
  }, delayInMilliseconds);
}

function ReadMore() {
  document.getElementById("ReadMore").style.backgroundColor = "black";
  document.getElementById("ReadMore").style.color = "#ffd700";
  var delayInMilliseconds = 50; //1 second

  setTimeout(function () {
    window.location.href = "about.html";
  }, delayInMilliseconds);
}

function GridTrigger1() {
  document.getElementById("GridTrigger1").style.letterSpacing = "3px";
  document.getElementById("GridTrigger1").style.color = "#FFF";
}

function GridTriggerRelease1() {
  document.getElementById("GridTrigger1").style.letterSpacing = "0px";
  document.getElementById("GridTrigger1").style.color = "#ffd700";
}

function GridTrigger2() {
  document.getElementById("GridTrigger2").style.letterSpacing = "3px";
  document.getElementById("GridTrigger2").style.color = "#FFF";
  document.getElementById("GridTriggerIcon2").className += " fa-3x";
}

function GridTriggerRelease2() {
  document.getElementById("GridTrigger2").style.letterSpacing = "0px";
  document.getElementById("GridTrigger2").style.color = "#ffd700";
  let str = document.getElementById("GridTriggerIcon2").className;
  str = str.substring(0, str.length - 6);
  document.getElementById("GridTriggerIcon2").className = str;
  console.log(str);
}

function GridTrigger3() {
  document.getElementById("GridTrigger3").style.letterSpacing = "3px";
  document.getElementById("GridTrigger3").style.color = "#FFF";
  document.getElementById("GridTriggerIcon3").className += " fa-3x";
}

function GridTriggerRelease3() {
  document.getElementById("GridTrigger3").style.letterSpacing = "0px";
  document.getElementById("GridTrigger3").style.color = "#ffd700";
  let str = document.getElementById("GridTriggerIcon3").className;
  str = str.substring(0, str.length - 6);
  document.getElementById("GridTriggerIcon3").className = str;
  console.log(str);
}

function GridTrigger4() {
  document.getElementById("GridTrigger4").style.letterSpacing = "3px";
  document.getElementById("GridTrigger4").style.color = "#FFF";
  document.getElementById("GridTriggerIcon4").className += " fa-3x";
}

function GridTriggerRelease4() {
  document.getElementById("GridTrigger4").style.letterSpacing = "0px";
  document.getElementById("GridTrigger4").style.color = "#ffd700";
  let str = document.getElementById("GridTriggerIcon4").className;
  str = str.substring(0, str.length - 6);
  document.getElementById("GridTriggerIcon4").className = str;
  console.log(str);
}

function GridTrigger5() {
  document.getElementById("GridTrigger5").style.letterSpacing = "3px";
  document.getElementById("GridTrigger5").style.color = "#FFF";
  document.getElementById("GridTriggerIcon5").className += " fa-3x";
}

function GridTriggerRelease5() {
  document.getElementById("GridTrigger5").style.letterSpacing = "0px";
  document.getElementById("GridTrigger5").style.color = "#ffd700";
  let str = document.getElementById("GridTriggerIcon5").className;
  str = str.substring(0, str.length - 6);
  document.getElementById("GridTriggerIcon5").className = str;
  console.log(str);
}

function contact() {
  document.getElementById("target").scrollIntoView();
  setTimeout(function () {
    document.getElementById("footer").style.backgroundColor = "#808080";
    setTimeout(function () {
      document.getElementById("footer").style.backgroundColor = "#16191c";
    }, 300);
  }, 500);
}
