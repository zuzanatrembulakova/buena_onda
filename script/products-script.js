
// var currentTransY = 0;
// var currentSpeed = 0;
// var moveAnimationIsRunning = false;

/* Aktualna pozicia v rolovani vyjadrena v stupnoch */
var currentAlpha = 0;
/* Polomer kruhu po ktorom rotujem produkty */
var radius = 500;
/* Scale Max a Min definuje maximalne zvacsenie a maximalne zmensenie */
var scaleMaxFactor = 1;
var scaleMinFactor = 0.33;

setup_product_divs();

window.addEventListener('wheel', function (e) {

    currentAlpha -= e.deltaY/20;
    if (currentAlpha > 360){
        currentAlpha -= 360;
    }
    if (currentAlpha < -360){
        currentAlpha += 360;
    }

    moveScene();
});



function moveScene(){
    var productsList = document.getElementsByClassName('product_wrapper');

    for (var i = 0; i < productsList.length; i++) {

        var pId = productsList[i].id;
        var anglePosition = currentAlpha + parseInt(pId.substring(pId.length-3));

        place_product_div(productsList[i], anglePosition);
    }
}

function setup_product_divs(){

    var productsList = document.getElementsByClassName('product_wrapper');

    for (var i = 0; i < productsList.length; i++) {

        var pId = productsList[i].id;
        var anglePosition = parseInt(pId.substring(pId.length-3));

        place_product_div(productsList[i], anglePosition);
    }
}

function place_product_div(item, angle){
    y = radius + radius * Math.sin(Math.PI * angle/180);
    x = (-1) * radius * Math.cos(Math.PI * angle/180);

    var realScale = 1;
    var opacity = 0.2 + 0.8 * (x+500)/(2*radius);
    if (x >= 0){
        realScale = 1 + scaleMaxFactor * x/radius;
    } else {
        realScale = (1-scaleMinFactor * (-x)/radius);
    }

    //console.log(angle, x, realScale);
    item.style.transform = "translateY(" + y + "px) scale(" + realScale + ")";
    item.style.opacity = "" + opacity;
    item.style.zIndex = "" + Math.floor(x);
}

/*
function moveScene2() {

    var maxHeight = itemProduct.scrollHeight- itemProduct.clientHeight + 100;

    currentTransY = Math.trunc(currentTransY + currentSpeed);

    currentSpeed = 0.95 * currentSpeed;
    if (currentSpeed < 1.0 && currentSpeed > -1.0) {
        currentSpeed = 0;
    }

    itemProduct.style.transform = "translateY(" + currentTransY.toString() + "px)";

    if (currentTransY > 0) {
        currentSpeed = -currentTransY * 0.85;
    }

    if (currentTransY < -maxHeight) {
        currentSpeed = (-currentTransY - maxHeight) * 0.85;
    }

    if (currentSpeed != 0) {
        setTimeout(moveScene, 20);
    }

}
*/
