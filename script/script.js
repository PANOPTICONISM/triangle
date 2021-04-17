window.addEventListener("DOMContentLoaded", buttonClicked);

function buttonClicked() {
    const calcButton = document.querySelector("#calculate");
    calcButton.addEventListener("click", checkFields);

    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", resetFields);
}

function checkFields() {

    const result = document.createElement("h2");
    const resultPlacement = document.querySelector(".result");

    const inputs = document.getElementsByTagName("input");

    // check to see if fields have been filled, else throw an error message
    if (inputs[1].value === "" || inputs[0].value === "" || inputs[2].value === "") {
        resultPlacement.textContent = "";
        result.textContent = "Please, try again by entering measurements to all the sides."
    } else {
        resizeTriangle();
    }

    resultPlacement.append(result);

    function resizeTriangle() {

        const leftSide = document.querySelector("#borderleft").value;
        const rightSide = document.querySelector("#borderright").value;
        const triangleHeight = document.querySelector("#triangleheight").value;

        const triangle = document.querySelector(".triangle");
        triangle.style.borderRightWidth = rightSide + "px";
        triangle.style.borderLeftWidth = leftSide + "px";
        triangle.style.borderBottomWidth = triangleHeight + "px";

        calculateResult(triangle, leftSide, rightSide, triangleHeight, resultPlacement, result);
    }
}

function calculateResult(triangle, leftSide, rightSide, triangleHeight, resultPlacement, result) {

    let shape;
    let height;

    // calculation and result
    if (leftSide === rightSide && rightSide === triangleHeight) {
        shape = "equilateral";
        height = leftSide * (Math.sqrt(3) / 2);
        resultPlacement.textContent = "";
        result.textContent = "This is an equilateral triangle, in which all three sides are of equal length.";
    } else if (leftSide === rightSide || leftSide === triangleHeight || triangleHeight === leftSide || triangleHeight === rightSide) {
        shape = "isosceles";
        height = 2 * leftSide;
        resultPlacement.textContent = "";
        result.textContent = "This is an isosceles triangle, with two equal sides and two equal angles.";
    } else if (leftSide !== rightSide && leftSide !== triangleHeight && triangleHeight !== rightSide) {
        shape = "scalene";
        height = (Number(leftSide) + Number(rightSide)) * 0.4;
        resultPlacement.textContent = "";
        result.textContent = "This is a scalene triangle, in which all sides are of different lengths.";
    } else {
        return false;
    }

    // resize depending on type of triangle
    if (shape === "equilateral") {
        triangle.style.borderBottomWidth = height + "px";
    } else if (shape === "isosceles") {
        triangle.style.borderBottomWidth = height + "px";
    } else if (shape === "scalene") {
        triangle.style.borderBottomWidth = height + "px";
    }

}

function resetFields() {

    document.querySelector("#borderleft").value = "";
    document.querySelector("#borderright").value = "";
    document.querySelector("#triangleheight").value = "";
    document.querySelector(".result").textContent = "";

    document.querySelector(".triangle").removeAttribute("style");

    buttonClicked();
}