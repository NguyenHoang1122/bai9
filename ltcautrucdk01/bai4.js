let number1 = +prompt("Nhap gia tri so nguyen thu 01");
let number2 = +prompt("Nhap gia tri so nguyen thu 02");
let number3 = +prompt("Nhap gia tri so nguyen thu 03");
let max = number1;
if(max <= number2){
    max = number2;
    if(max <= number3){
        max = number3;
    }
}else if(max <= number3){
    max = number3;
    if(max <= number2){
        max = number2;
    }
}
document.getElementById("demo").innerHTML = `So nguyen lon nhat trong 3 so ${number1}, ${number2}, ${number3} la so ${max}.`;