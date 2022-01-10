// CATA BUADES

let weightInput = document.getElementById('Weight');
let heightInput = document.getElementById('Height');
let sendButton = document.getElementById('Send');
let resultText = document.getElementById('Result');

function bmiCalculation(weight, height) {

  resultText.innerHTML = ((weight / height / height) * 10000).toFixed(2);
  return;
}

sendButton.addEventListener('click', function() {
  bmiCalculation(weightInput.value, heightInput.value);
});

//bmiCalculation(weightInput, heightInput);

// [weight (kg) / height (cm) / height (cm)] x 10,000