window.addEventListener("DOMContentLoaded", buttonClicked);

function buttonClicked() {
    const calcButton = document.querySelector("#calculate");
    calcButton.addEventListener("click", checkFields);
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
        const bottomSide = document.querySelector("#borderbottom").value;

        console.log(leftSide, rightSide, bottomSide);

        const triangle = document.querySelector(".triangle");
        triangle.style.borderRightWidth = rightSide + "px";
        triangle.style.borderLeftWidth = leftSide + "px";
        triangle.style.borderBottomWidth = bottomSide + "px";

        calculateResult(triangle, leftSide, rightSide, bottomSide, resultPlacement, result);
    }
}

function calculateResult(triangle, leftSide, rightSide, bottomSide, resultPlacement, result) {

    let shape;
    let height;

    // calculation and result
    if (leftSide === rightSide && rightSide === bottomSide) {
        shape = "equilateral";
        height = leftSide * (Math.sqrt(3) / 2);
        resultPlacement.textContent = "";
        result.textContent = "This is an equilateral triangle, in which all three sides are of equal length.";
    } else if (leftSide === rightSide || leftSide === bottomSide || bottomSide === leftSide || bottomSide === rightSide) {
        shape = "isosceles";
        height = leftSide * 1.5;
        console.log(height)
        resultPlacement.textContent = "";
        result.textContent = "This is an isosceles triangle, with two equal siges and two equal angles.";
    } else if (leftSide !== rightSide && leftSide !== bottomSide && bottomSide !== rightSide) {
        shape = "scalene";
        height = leftSide * 0.6;
        resultPlacement.textContent = "";
        result.textContent = "This is a scalene triangle, in which all sides are of different lengths.";
    } else {
        return false;
    }

    // math depending on type of triangle
    if (shape === "equilateral") {
        triangle.style.borderBottomWidth = height + "px";
    } else if (shape === "isosceles") {
        triangle.style.borderBottomWidth = height + "px";
    } else if (shape === "scalene") {
        triangle.style.borderBottomWidth = height + "px";
        console.log(height + "px")
    }

    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", resetFields);

}

function resetFields() {

    document.querySelector("#borderleft").value = "";
    document.querySelector("#borderright").value = "";
    document.querySelector("#borderbottom").value = "";
    document.querySelector(".result").textContent = "";

    buttonClicked();
}