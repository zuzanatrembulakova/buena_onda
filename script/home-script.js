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


