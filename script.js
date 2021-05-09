var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

const viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onscroll = function () {
    stickybar(document.URL.includes("index.html"));

    if(document.getElementById("topBtn")){
        scrollFunction();
    }

    check_and_add_fadein_animation("fadeinleft", 1.5);
    check_and_add_fadein_animation("fadeinright", 1.5);
    check_and_add_fadein_animation("fadeinbottom", 1.5);
    check_and_add_fadein_animation("fadein", 1.5);
}

function check_and_add_fadein_animation(animationName, animationTime) {

    var elements = document.getElementsByClassName(animationName);

    for (i = 0; i < elements.length; i++) {
        var offset = elements[i].offsetTop;

        if (window.pageYOffset + viewport_height > offset) {
            elements[i].style.animation = animationName + " " + animationTime + "s";
        }
    }
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

/*-------GO TO TOP BTN------------------------------*/

//enable/disable scroll button based on scroller position
function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() { // eslint-disable-line no-unused-vars
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function dropDownFirst() {
  var dropDownContent = document.querySelector(".dropdown_content1");
    console.log(dropDownContent.style.display);
  if (dropDownContent.style.display == "none" ||
     dropDownContent.style.display == "") {
    dropDownContent.style.display = "block";
  } else {
    dropDownContent.style.display = "none";
  }
}

function dropDownSecond() {
  var dropDownContent2 = document.querySelector(".dropdown_content2");
  if (dropDownContent2.style.display == "none") {
    dropDownContent2.style.display = "block";
  } else {
    dropDownContent2.style.display = "none";
  }
}
