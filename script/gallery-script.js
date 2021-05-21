// Fetching data for gallery
fetch("https://www.rasbery.eu/buena--onda/wp-json/wp/v2/image?per_page=100")
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


// Function for creatin gallery of photoshoots using data retrieved from databes
function showGallery(oneImg) {
    const template = document.querySelector("#gallery_templ").content;
    const clone = template.cloneNode(true);

    clone.querySelector("img").src = oneImg.image.guid;

    document.querySelector("main").appendChild(clone);
}

