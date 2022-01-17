// weight
// height
// result
// calculate

let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let resultsArea = document.getElementById("result");
let resultButton = document.getElementById("calculate");

// formula BMI (function)

// function calculateBMI(height, weight) {
//   return ((weight / height / height) * 10000).toFixed(2);
// }
//

// event listeners

resultButton.addEventListener("click", function () {
  let weight = weightInput.value;
  let height = heightInput.value;
  let requestData = { height: height, weight: weight };
  fetch("http://127.0.0.1:3000/bmi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(function (responseData) {
      resultsArea.innerHTML = responseData.bmi;
    });
});
