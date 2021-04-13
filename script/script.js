window.addEventListener("DOMContentLoaded", buttonClicked);

function buttonClicked() {
    const calcButton = document.querySelector("#calculate");
    calcButton.addEventListener("click", resizeTriangle);
}

function resizeTriangle() {

    const leftSide = document.querySelector("#borderleft").value;
    const rightSide = document.querySelector("#borderright").value;
    const bottomSide = document.querySelector("#borderbottom").value;

    const triangle = document.querySelector(".triangle");
    triangle.style.borderRightWidth = rightSide + "px";
    triangle.style.borderLeftWidth = leftSide + "px";
    triangle.style.borderBottomWidth = bottomSide + "px";

    calculateResult(leftSide, rightSide, bottomSide);
}

function calculateResult(leftSide, rightSide, bottomSide) {

    if (leftSide === rightSide && rightSide === bottomSide) {
        console.log("i am an equilateral triangle");
    } else if (leftSide === rightSide || leftSide === bottomSide || bottomSide === leftSide || bottomSide === rightSide) {
        console.log("i am a isosceles triangle");
    } else if (leftSide !== rightSide && leftSide !== bottomSide && bottomSide !== rightSide) {
        console.log("i am a scalene triangle");
        return true;
    } else {
        return false;
    }

}