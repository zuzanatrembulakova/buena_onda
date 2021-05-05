/*var navbar = document.getElementById("navbar");*/
var navbar = document.getElementById("menu");
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
