// weight
// height
// result
// calculate

let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let resultsArea = document.getElementById("result");
let resultButton = document.getElementById("calculate");

// formula BMI (function)

function calculateBMI(height, weight) {
  return ((weight / height / height) * 10000).toFixed(2);
}
//

// event listeners

resultButton.addEventListener("click", function () {
  let weight = weightInput.value;
  let height = heightInput.value;
  resultsArea.innerHTML = calculateBMI(height, weight);
});
