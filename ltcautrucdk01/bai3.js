let number = +prompt('Hay nhap so');
let result;
if(number < 0){
    result = `so ${number}  nho hon 0`;
}else if(number === 0){
    result = 'Day la so 0';
}else{
    result = `So ${number} lon hon 0`;
}
document.getElementById("demo").innerHTML = result;