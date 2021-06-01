// Fetching data for gallery
fetch("https://www.rasbery.eu/buena--onda/wp-json/wp/v2/image?per_page=100")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleGalleryData(data)
    })


function handleGalleryData(jsonData) {
    jsonData.forEach(showGallery);
}


// Function for creating gallery using data retrieved from the database
function showGallery(oneImg) {
    const template = document.querySelector("#gallery_templ").content;
    const clone = template.cloneNode(true);
    const category = oneImg.categories.length;
    clone.querySelector("img").src = oneImg.image.guid;
    if (category=="2"){
        clone.querySelector("img").classList.add("frame");
    }

    document.querySelector("main").appendChild(clone);
}



