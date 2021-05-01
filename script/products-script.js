
var currentSpeed = 0;

/* Aktualna pozicia v rolovani vyjadrena v stupnoch */
var currentAlpha = 0;
/* Polomer kruhu po ktorom rotujem produkty */
var radius = viewport_height / 2;
/* Scale Max a Min definuje maximalne zvacsenie a maximalne zmensenie */
var scaleMaxFactor = 1;
var scaleMinFactor = 0.8;

var moveAnimationIsRunning = false;

moveScene();

document.onkeydown = function (e) {

    switch (e.key) {
        case 'ArrowUp':
			currentSpeed += 2;
            break;
        case 'ArrowDown':
			currentSpeed -= 2;
            break;
        case 'ArrowLeft':
            // left arrow
            break;
        case 'ArrowRight':
            // right arrow
    }
	if (moveAnimationIsRunning == false){
		moveScene();
	}
};

window.addEventListener('wheel', function (e) {

    currentSpeed += e.deltaY/100;
	if (moveAnimationIsRunning == false){
		moveScene();
	}
});

function moveScene(){
    var productsList = document.getElementsByClassName('product_wrapper');

	moveAnimationIsRunning = true;

    currentAlpha -= currentSpeed;
    if (currentAlpha > 360){
        currentAlpha -= 360;
    }
    if (currentAlpha < -360){
        currentAlpha += 360;
    }

	currentSpeed = 0.95 * currentSpeed;
    if (currentSpeed < 0.05 && currentSpeed > -0.05) {
        currentSpeed = 0;
    }

    for (var i = 0; i < productsList.length; i++) {

        var pId = productsList[i].id;
        var anglePosition = currentAlpha + parseInt(pId.substring(pId.length-3));

        place_product_div(productsList[i], anglePosition);
    }

	if (currentSpeed != 0) {
        setTimeout(moveScene, 20);
    } else {
		moveAnimationIsRunning = false;
	}
}

function place_product_div(item, angle){
    y = radius + radius * Math.sin(Math.PI * angle/180);
    x = (-1) * radius * Math.cos(Math.PI * angle/180);

    var opacity = 0.2 + 0.8 * (x+500)/(2*radius);
	var realScale = scaleMinFactor + scaleMaxFactor * ((x+500)/(2*radius));

    //console.log(angle, x, realScale);
    item.style.transform = "translateY(" + y + "px) scale(" + realScale + ")";
    /*item.style.opacity = "" + opacity;*/
    item.style.zIndex = "" + Math.floor(x);
}

