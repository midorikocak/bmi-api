let height = document.querySelector("#heightInput");
let weight = document.querySelector("#weightInput");
const button = document.querySelector("#calculateBtn");
let resultArea = document.querySelector("#result");

button.addEventListener("click", function (event) {
  let height = heightInput.value;
  let weight = weightInput.value;
  let requestData = {
    height: height,
    weight: weight,
  };
  fetch("http://localhost:3000/bmi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(function (responseData) {
      console.log(responseData);
      resultArea.innerHTML = responseData.bmi;
    });
});
