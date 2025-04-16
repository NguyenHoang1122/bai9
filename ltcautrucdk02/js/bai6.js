function checkPhuongTrinh() {
    let numberA = +document.getElementById('numberA').value;
    let numberB = +document.getElementById('numberB').value;
    let result;
    if(numberA === 0 && numberB !== 0) {
        result = 'Phuong Trinh vo nghiem';
    }else if (numberA === 0 && numberB === 0){
        result = 'Phuong Trinh vo so nghiem';
    }else{
        result = -numberB/numberA;
    }
    document.getElementById('result').innerHTML = result;
}