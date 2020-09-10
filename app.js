const heightInp = document.getElementById("height-input");
const weightInp = document.getElementById("weight-input");
const calculateButton = document.getElementById("cal-btn");
const resultArea = document.getElementById("result");
const reset = document.getElementById("reset-btn");

// Cal BMI Function
const calBmi = (e) => {
  const height = +heightInp.value;
  const weight = +weightInp.value;
  const bmi = (weight / (height * height)).toFixed(2);
  if (isNaN(bmi)) {
    alert("Not a Number, Please Check Your Inputs!");
    return;
  }
  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
  <ion-card-content>
    <h2>
        ${bmi}
    </h2>
  </ion-card-content>
 `;
  resultArea.innerHTML = "";
  resultArea.appendChild(resultElement);
};

//Reset Inputs Function
const resetInputsHandler = (e) => {
  heightInp.value = "";
  weightInp.value = "";
  resultArea.textContent = "";
};

calculateButton.addEventListener("click", calBmi);
reset.addEventListener("click", resetInputsHandler);
