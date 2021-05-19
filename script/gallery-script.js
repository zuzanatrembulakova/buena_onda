// Fetching data for gallery
fetch("https://www.rasbery.eu/buena--onda/wp-json/wp/v2/media")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleGalleryData(data)
    })


function handleGalleryData(jsonData) {
    /*jsonData.reverse();*/
    jsonData.forEach(showGallery);
}

var imgList = [];

// Function for creatin gallery of photoshoots using data retrieved from databes
function showGallery(oneImg) {
    const template = document.querySelector("#gallery_templ").content;
    const clone = template.cloneNode(true);

    clone.querySelector("img").src = oneImg.guid.rendered;

    document.querySelector("main").appendChild(clone);
}

window.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;

	var midY = window.innerHeight/2;
	var midX = window.innerWidth/2;

	for (var i = 0; i < imgList.length; i++) {
		imgList[i].style.transform = "translate(" + ((x-midX)/40) + "px," + ((y-midY)/50) + "px)";
	}

	imgList = document.querySelectorAll(".about_img2");

	for (var i = 0; i < imgList.length; i++) {
		imgList[i].style.transform = "translate(" + ((x-midX)/70) + "px," + ((y-midY)/20) + "px)";
	}
});

