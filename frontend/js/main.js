// alert("hello");

let height = document.querySelector("#heightInput");
let weight = document.querySelector("#weightInput");
const button = document.querySelector("#calculateBtn");
let resultArea = document.querySelector("#result");

function calculateBMI(height, weight) {
  return ((weight / height / height) * 10000).toFixed(2);
}

button.addEventListener("click", function (event) {
  let height = heightInput.value;
  let weight = weightInput.value;
  resultArea.innerHTML = calculateBMI(height, weight);
});
