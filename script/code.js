function calculateBMI() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var resultLabel = document.getElementById('result');

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);

    // if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    //   resultLabel.textContent = 'Invalid input. Please enter valid values.';
    //   return;
    // }

    var bmi = calculateBMIFromValues(weight, height);
    resultLabel.textContent = 'Your BMI: ' + bmi.toFixed(2);
  }

  function calculateBMIFromValues(weight, height) {
    return weight / Math.pow(height, 2);
  }