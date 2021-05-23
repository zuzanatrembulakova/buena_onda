// Scene rotation speed and direction
var currentSpeed = 0;

//Speed value apllied while moving the scene by key or button
const speedFactor = 3;

// Scene position in degrees
var currentAlpha = 0;

// Scene radius for circle
var radius = viewport_height / 2;

// Scale Max and Min define maximal scale and maximal scale down
const scaleMaxFactor = 1.5;
const scaleMinFactor = 0;

var moveAnimationIsRunning = false;

//sets correct layout of products at the beggining when page loads
moveScene();

document.onkeydown = function (e) {

    switch (e.key) {
        case 'ArrowUp':
            moveSceneUp();
            break;
        case 'ArrowDown':
            moveSceneDown();
            break;
        case 'ArrowLeft':
            // left arrow
            break;
        case 'ArrowRight':
            // right arrow
    }
};

function moveSceneUp(){
    currentSpeed -= speedFactor;
    if (moveAnimationIsRunning == false) {
        moveScene();
    }
}

function moveSceneDown(){
    currentSpeed += speedFactor;
    if (moveAnimationIsRunning == false) {
        moveScene();
    }
}

window.addEventListener('wheel', function (e) {
    // Speed calculated according to the wheel movement
    currentSpeed += e.deltaY/1000;
	if (moveAnimationIsRunning == false){
		moveScene();
	}
});

//touch listeners are for touchscreen devices

//defines were we touched display
var touchStartPosition = 0;

window.addEventListener('touchstart', function (e) {
    //gets touch event - support one finger touch only
    var touch = e.touches[0] || e.changedTouches[0];

    touchStartPosition = touch.pageY;
});

window.addEventListener('touchmove', function (e) {
    //gets touch event - support one finger touch only
    var touch = e.touches[0] || e.changedTouches[0];

    //speed of movement is calculated based on first touch
    //position and current touch position (direction/axe Y)
    currentSpeed += (touch.pageY-touchStartPosition)/100;
	if (moveAnimationIsRunning == false){
		moveScene();
	}

    touchStartPosition = touch.pageY;
});

function moveScene() {

    moveAnimationIsRunning = true;

    currentAlpha -= currentSpeed;
    if (currentAlpha > 360) {
        currentAlpha -= 360;
    }
    if (currentAlpha < 0) {
        currentAlpha += 360;
    }

    //slowing down the animation speed by 5%
    currentSpeed = 0.95 * currentSpeed;

    //stops animation when speed is very slow
    if (currentSpeed < 0.05 && currentSpeed > -0.05) {
        currentSpeed = 0;
    }

    var productsList = document.getElementsByClassName('product_wrapper');

    for (var i = 0; i < productsList.length; i++) {

        var pId = productsList[i].id;
        var anglePosition = currentAlpha + parseInt(pId.substring(pId.length - 3));

        place_product_div(productsList[i], anglePosition);
    }

    //schedule next scene refresh when the speed is not 0
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

    var realScale = scaleMinFactor + scaleMaxFactor * ((x + radius) / (2 * radius));

    //sets item final position and item scale
    item.style.transform = "translateY(" + y + "px) scale(" + realScale + ")";

    //sets z index
    /*var zx = (-1) * radius * Math.cos(Math.PI * (angle + 45) / 180);*/
    item.style.zIndex = "" + Math.floor(x);

    var itemOpacity = 1.0;
    if (angle > 140 && angle < 180) {
        itemOpacity = (angle -  140) / 40.0;
    } else if (angle < 140 && angle > 90) {
        itemOpacity = 0.0;
    }
    item.style.opacity = "" + itemOpacity;
}
