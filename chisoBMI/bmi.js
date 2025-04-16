function check() {
    let Height = +document.getElementById('height').value;
    let Weight = +document.getElementById('weight').value;
    let bmi = Weight / (Height * Height);
    let result;
    if (bmi >= 30) {
        result = "Obese";
    } else if (bmi >= 25) {
        result = "Overweight";
    } else if (bmi >= 18.5) {
        result = "Normal";
    } else {
        result = "Underweight";
    }
    document.getElementById('result').innerHTML = `Chỉ số BMI của bạn là ${bmi.toFixed(2)} --> nằm trong nhóm ${result}`;
}