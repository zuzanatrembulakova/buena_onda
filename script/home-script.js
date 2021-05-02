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
var mountin = document.querySelector('.mountains2');
var beach = document.querySelector('.beach');
var sea = document.querySelector('.wave2');

window.addEventListener('wheel', function (e) {

    if (mountainCurrentX <= 0) {
        mountainCurrentX -= e.deltaY / 20;
        mountin.style.transform = "translateY(" + mountainCurrentX + "px)";
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

    if (seaCurrentX <= 0) {
        seaCurrentX -= e.deltaY / 40;
        sea.style.transform = "translateY(" + seaCurrentX + "px)";
        if (seaCurrentX > 0){
            seaCurrentX = 0;
        }
    }

});
