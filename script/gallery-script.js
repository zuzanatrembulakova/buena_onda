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


// Function for creating gallery using data retrieved from the database
function showGallery(oneImg) {
    const template = document.querySelector("#gallery_templ").content;
    const clone = template.cloneNode(true);
    const category = oneImg.categories.length;
    clone.querySelector("img").src = oneImg.image.guid;
    console.log(category);
    if (category=="2"){
        clone.querySelector("img").classList.add("frame");
    }

    document.querySelector("main").appendChild(clone);
}


/*fetch("https://rasbery.eu/buena--onda/wp-json/wp/v2/categories")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleFrameData(data)
    })


function handleFrameData(jsonData) {
    jsonData.reverse();
    jsonData.forEach(showFrames);
}

function showFrames(oneFrame) {
    const category = oneFrame.name;
    console.log(category)
    if (category=="frame"){
        document.querySelector("img").classList.add = "frame";
    }
}*/



