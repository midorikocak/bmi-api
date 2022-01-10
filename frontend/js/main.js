//alert("Hello world!"); Anna :)

const heightInp = document.getElementById("heightInput");
const weightInp = document.getElementById("weightInput");
const calculateBtn = document.getElementById("calculate");

let resultTxt = document.getElementById("result");

function calculateBmi(weight, height) {
  return ((weight / height / height) * 10000).toFixed(2);
}

calculateBtn.addEventListener("click", function () {
  console.log(weightInp.value, heightInp.value);
  resultTxt.innerHTML = calculateBmi(weightInp.value, heightInp.value);
});
