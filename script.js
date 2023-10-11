document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateBMI);
});

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const resultElement = document.getElementById("result");

   

    // Determine health status
    let healthStatusDescription = "";
    if (bmi < 16) {
        healthStatusDescription = "Severely underweight - Please consult a healthcare professional.";
    } else if (bmi >= 16 && bmi < 18.4) {
        window.location.href = "advice.html";
        return;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        healthStatusDescription = "Healthy weight - Maintain a balanced diet and exercise regularly.";
    } else {
        healthStatusDescription = "UnHealthy weight - Seek medical advice for weight management.";
    } 
    resultElement.innerHTML += `<br>${healthStatusDescription}`;
}


