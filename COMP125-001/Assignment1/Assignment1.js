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
function clearField() {
    //clear Far text box
    document.getElementById("txtFar").value = "";
}
document.getElementById("btnCalculate").addEventListener("click", calcCelsius, false);
document.getElementById("txtFar").addEventListener("click", clearField, false);
