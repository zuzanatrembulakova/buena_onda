// Adds style.display = "none" to the loader after 3 seconds to remove it
var logo = document.getElementById("preload");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('page_type');

if (page_type != null && page_type == "nologo") {
    logo.style.display = "none";
} else {
    setTimeout(function () {
        logo.style.display = "none";
    }, 3000);
}

var seaFrontCurrentX = 0;
var whiteWavesFrontCurrentX = 0;

var seaFront = document.querySelector('.sea_front');
var whiteWaves = document.querySelector('.white_waves');

document.addEventListener('scroll', function (e) {
    var posY = window.scrollY;

    whiteWaves.style.transform = "translateY(" + (-posY*.85) + "px)";
    seaFront.style.transform = "translateY(" + (-posY*.75) + "px)";

});
