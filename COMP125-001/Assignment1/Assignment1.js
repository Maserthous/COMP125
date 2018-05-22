//Far to Cel Conversion
//(F-32)*5
function calcCelsius() {
    var result = 0;
    var tempFar = document.getElementById("txtFar").value;
    if (isNaN(tempFar) || (document.getElementById("txtFar").value=="")) {
        document.getElementById("display").innerHTML = "Please enter a value.";
        return;
    }
    result = (tempFar - 32) * 5 / 9;
    document.getElementById("display").innerHTML = Math.round(result);
}
function calcBMR() {
    var bmr = 0;
    var cal = 0;
    var tempSex = document.getElementById("selSex").value;
    var tempAge = document.getElementById("txtAge").value;
    var tempHeight = document.getElementById("txtHeight").value;
    var tempWeight = document.getElementById("txtWeight").value;
    var tempAct = document.getElementById("radAct").value;
    if (tempSex == "M") { // Male BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
        bmr = (10 * tempWeight) + (6.25 * tempHeight) - (5 * tempAge) + 5;
    }
    if (tempSex == "F") { // BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
        bmr = (10 * tempWeight) + (6.25 * tempHeight) - (5 * tempAge) - 161;
    }
    if (tempAct == "light") {
        cal = bmr * 1.53;
    }
    if (tempAct == "moderate") {
        cal = bmr * 1.76;
    }
    if (tempAct == "heavy") {
        cal = bmr * 2.25;
    }
    document.getElementById("bmr").innerHTML = bmr;
    document.getElementById("calories").innerHTML = Math.round(cal);
}
function clearField() {
    //clear Far text box
    document.getElementById("txtFar").value = "";
}
document.getElementById("btnCalculate").addEventListener("click", calcBMR, false);
document.getElementById("txtFar").addEventListener("click", clearField, false);
