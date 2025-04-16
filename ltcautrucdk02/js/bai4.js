function checkCVDT(){
    let canhA = document.getElementById("canhA").value;
    let canhB = document.getElementById("canhB").value;
    let chuvi = (canhA + canhB) * 2;
    let dientich = canhA * canhB;
    document.getElementById('result').innerHTML = `Chu vi : ${chuvi} m  Dien tich : ${dientich} m2 `;
}