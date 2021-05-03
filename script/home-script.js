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
var whiteWavesFrontCurrentX = 0;

var mountain = document.querySelector('.mountain_back');
var mountainFront = document.querySelector('.mountain_front');
var beach = document.querySelector('.beach');
var seaBack = document.querySelector('.sea_back');
var palmsBack = document.querySelector('.palms_back');
var palmsFront = document.querySelector('.palms_front');
var seaFront = document.querySelector('.sea_front');
var whiteWaves = document.querySelector('.white_waves');

document.addEventListener('scroll', function (e) {
    var posY = window.scrollY;

    whiteWaves.style.transform = "translateY(" + (-posY*.85) + "px)";
    seaFront.style.transform = "translateY(" + (-posY*.75) + "px)";
    beach.style.transform = "translateY(" + (-posY*.50) + "px)";
    seaBack.style.transform = "translateY(" + (-posY*.50) + "px)";
    palmsFront.style.transform = "translateY(" + (-posY*.40) + "px)";
    palmsBack.style.transform = "translateY(" + (-posY*.30) + "px)";
    mountainFront.style.transform = "translateY(" + (-posY*.20) + "px)";
    mountain.style.transform = "translateY(" + (-posY*.10) + "px)";
});
