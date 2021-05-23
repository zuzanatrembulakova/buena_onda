/* Scene rotation speed */
var currentSpeed = 0;

/* Scene position in degrees */
var currentAlpha = 0;

/* Scene radius for circle */
var radius = viewport_height / 2;

/* Scale Max a Min definuje maximalne zvacsenie a maximalne zmensenie */
/*var scaleMaxFactor = 1;*/
var scaleMaxFactor = 1.5;
/*var scaleMinFactor = 0.8;*/
var scaleMinFactor = 0;

var moveAnimationIsRunning = false;

moveScene();

document.onkeydown = function (e) {

    switch (e.key) {
        case 'ArrowUp':
            currentSpeed -= 3;
            break;
        case 'ArrowDown':
            currentSpeed += 3;
            break;
        case 'ArrowLeft':
            // left arrow
            break;
        case 'ArrowRight':
            // right arrow
    }
    if (moveAnimationIsRunning == false) {
        moveScene();
    }
};

function moveSceneUp(){
    currentSpeed -= 3;
    if (moveAnimationIsRunning == false) {
        moveScene();
    }
}

function moveSceneDown(){
    currentSpeed += 3;
    if (moveAnimationIsRunning == false) {
        moveScene();
    }
}

window.addEventListener('wheel', function (e) {

    currentSpeed += e.deltaY/1000;
	if (moveAnimationIsRunning == false){
		moveScene();
	}
});

//touch listeners are for touchscreen devices

var touchStart = 0;

window.addEventListener('touchmove', function (e) {
    var touch = e.touches[0] || e.changedTouches[0];

    //speed of movement is calculated based on first touch
    //position and current touch position (direction/axe Y)
    currentSpeed += (touch.pageY-touchStart)/100;
	if (moveAnimationIsRunning == false){
		moveScene();
	}

    touchStart = touch.pageY;
});

window.addEventListener('touchstart', function (e) {
    var touch = e.touches[0] || e.changedTouches[0];

    //defines were we touched display
    touchStart = touch.pageY;
});

function moveScene() {
    var productsList = document.getElementsByClassName('product_wrapper');

    moveAnimationIsRunning = true;

    currentAlpha -= currentSpeed;
    if (currentAlpha > 360) {
        currentAlpha -= 360;
    }
    if (currentAlpha < -360) {
        currentAlpha += 360;
    }

    currentSpeed = 0.95 * currentSpeed;
    if (currentSpeed < 0.05 && currentSpeed > -0.05) {
        currentSpeed = 0;
    }

    for (var i = 0; i < productsList.length; i++) {

        var pId = productsList[i].id;
        var anglePosition = currentAlpha + parseInt(pId.substring(pId.length - 3));

        place_product_div(productsList[i], anglePosition);
    }

    if (currentSpeed != 0) {
        setTimeout(moveScene, 20);
    } else {
        moveAnimationIsRunning = false;
    }
}

function place_product_div(item, angle) {

    if (angle > 360) {
        angle -= 360;
    }
    if (angle < 0) {
        angle += 360;
    }

    var y = 120 + radius + radius * Math.sin(Math.PI * angle / 180);
    var x = (-1) * radius * Math.cos(Math.PI * angle / 180);

    /*var opacity = 1.0;
    if (x < 0) {
        opacity = 1.0 * (radius+x)/(radius);
    }*/
    var realScale = scaleMinFactor + scaleMaxFactor * ((x + 500) / (2 * radius));

    //console.log(angle, x, realScale);
    item.style.transform = "translateY(" + y + "px) scale(" + realScale + ")";
    /*item.style.opacity = "" + opacity;*/

    var zx = (-1) * radius * Math.cos(Math.PI * (angle + 45) / 180);
    item.style.zIndex = "" + Math.floor(zx);

    var itemOpacity = 1.0;
    if (angle > 140 && angle < 180) {
        itemOpacity = (angle -  140) / 40.0;
    } else if (angle < 140 && angle > 90) {
        itemOpacity = 0.0;
    }
    item.style.opacity = "" + itemOpacity;
}
