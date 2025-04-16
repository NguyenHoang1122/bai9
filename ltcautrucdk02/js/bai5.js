function checkDT(){
    let canhA = document.getElementById('canhA').value;
    let canhB = document.getElementById('canhB').value;
    let dientich = canhA * canhB/2;
    document.getElementById('result').innerHTML=`Dien tich : ${dientich} m2`;
}