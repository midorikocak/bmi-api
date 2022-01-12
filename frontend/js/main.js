// alert("Hello World");
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let calculateBtn = document.getElementById('calculate');
let displayResult = document.getElementById('result');


function calculateBMI(height, weight) {
    return ((weight / height / height) * 10000).toFixed(2);
}

calculateBtn.addEventListener('click', function() {
    displayResult.innerHTML = calculateBMI(heightInput.value, weightInput.value);
});