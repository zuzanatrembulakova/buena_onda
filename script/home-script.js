// Adds style.display = "none" to the loader after 3.3 seconds to remove it
var logo = document.getElementById("preload");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('page_type');

if (page_type != null && page_type == "nologo") {
    logo.style.display = "none";
} else {
    setTimeout(function () {
        logo.style.display = "none";
    }, 5000);
}

var mountainCurrentX = 0;
var beachCurrentX = 0;
var seaCurrentX = 0;
var palmsBackCurrentX = 0;
var palmsFrontCurrentX = 0;
var seaFrontCurrentX = 0;

var mountain = document.querySelector('.mountain_back');
var mountainFront = document.querySelector('.mountain_front');
var beach = document.querySelector('.beach');
var palmsBack = document.querySelector('.palms_back');
var palmsFront = document.querySelector('.palms_front');
var seaFront = document.querySelector('.sea_front');

window.addEventListener('wheel', function (e) {

    if (mountainCurrentX <= 0) {
        mountainCurrentX -= e.deltaY / 20;
        mountain.style.transform = "translateY(" + mountainCurrentX + "px)";
        if (mountainCurrentX > 0){
            mountainCurrentX = 0;
        }
    }
    if (mountainCurrentX <= 0) {
        mountainCurrentX -= e.deltaY / 20;
        mountainFront.style.transform = "translateY(" + mountainCurrentX + "px)";
        if (mountainCurrentX > 0){
            mountainCurrentX = 0;
        }
    }

    if (beachCurrentX <= 0) {
        beachCurrentX -= e.deltaY / 30;
        beach.style.transform = "translateY(" + beachCurrentX + "px)";
        if (beachCurrentX > 0){
            beachCurrentX = 0;
        }
    }

    if (palmsBackCurrentX <= 0) {
        palmsBackCurrentX -= e.deltaY / 40;
        palmsBack.style.transform = "translateY(" + palmsBackCurrentX + "px)";
        if (palmsBackCurrentX > 0){
            palmsBackCurrentX = 0;
        }
    }

    if (palmsFrontCurrentX <= 0) {
        palmsFrontCurrentX -= e.deltaY / 50;
        palmsFront.style.transform = "translateY(" + palmsFrontCurrentX + "px)";
        if (palmsFrontCurrentX > 0){
            palmsFrontCurrentX = 0;
        }
    }

    if (seaFrontCurrentX <= 0) {
        seaFrontCurrentX -= e.deltaY / 50;
        seaFront.style.transform = "translateY(" + seaFrontCurrentX + "px)";
        if (seaFrontCurrentX > 0){
            seaFrontCurrentX = 0;
        }
    }

});
