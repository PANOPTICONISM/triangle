window.addEventListener("DOMContentLoaded", buttonClicked);

function buttonClicked() {
    const calcButton = document.querySelector("#calculate");
    calcButton.addEventListener("click", checkFields);
}

function checkFields() {

    const result = document.createElement("h2");
    const resultPlacement = document.querySelector(".result");

    const inputs = document.getElementsByTagName("input");

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

        console.log(leftSide, rightSide, bottomSide)

        const triangle = document.querySelector(".triangle");
        triangle.style.borderRightWidth = rightSide + "px";
        triangle.style.borderLeftWidth = leftSide + "px";
        triangle.style.borderBottomWidth = bottomSide + "px";

        calculateResult(leftSide, rightSide, bottomSide, resultPlacement, result);
    }
}

function calculateResult(leftSide, rightSide, bottomSide, resultPlacement, result) {

    if (leftSide === rightSide && rightSide === bottomSide) {
        resultPlacement.textContent = "";
        result.textContent = "This is an equilateral triangle with " + leftSide + "cm on the left side, " + rightSide + "cm on the right, and " + bottomSide + "cm at the bottom.";
    } else if (leftSide === rightSide || leftSide === bottomSide || bottomSide === leftSide || bottomSide === rightSide) {
        resultPlacement.textContent = "";
        result.textContent = "This is an isosceles triangle with " + leftSide + "cm on the left side, " + rightSide + "cm on the right, and " + bottomSide + "cm at the bottom.";
    } else if (leftSide !== rightSide && leftSide !== bottomSide && bottomSide !== rightSide) {
        resultPlacement.textContent = "";
        result.textContent = "This is a scalene triangle with " + leftSide + "cm on the left side, " + rightSide + "cm on the right, and " + bottomSide + "cm at the bottom.";
    } else {
        return false;
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