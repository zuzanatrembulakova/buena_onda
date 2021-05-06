var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function () {
    stickybar(document.URL.includes("index.html"));
    scrollFunction();
}

var prevScrollpos = window.pageYOffset;

/*-------STICKY NAVBAR-----------------------------*/

function stickybar() {

    navbar.classList.add("sticky");
    document.getElementsByTagName("main")[0].classList.add("main_sticky");

    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        var nHeight = navbar.offsetHeight;
        navbar.style.top = "-" + nHeight + "px";
    }
    prevScrollpos = currentScrollPos;

}

/*-------NAV ICON HOVER ANIMATION-----------------------------*/

var navIcon = document.querySelector(".nav_icon");
navIcon.addEventListener("mouseover", mOver, false);
navIcon.addEventListener("mouseout", mOut, false);

function mOver() {
    navIcon.classList.remove("icon_out");
    navIcon.classList.add("icon_in");
}

function mOut() {
    navIcon.classList.remove("icon_in");
    navIcon.classList.add("icon_out");
}

function dropDownFirst() {
  var dropDownContent = document.querySelector(".dropdown_content1");
  if (dropDownContent.style.display === "none") {
    dropDownContent.style.display = "block";
  } else {
    dropDownContent.style.display = "none";
  }
}

function dropDownSecond() {
  var dropDownContent2 = document.querySelector(".dropdown_content2");
  if (dropDownContent2.style.display === "none") {
    dropDownContent2.style.display = "block";
  } else {
    dropDownContent2.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


