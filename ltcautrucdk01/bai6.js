function check() {
let number = +document.getElementById("number").value;
let money = +document.getElementById("money").value;
let hoahong = 0;
if(number >= 50 && money >= 10000000){
    hoahong = money*5/100;
}else if(number >= 100 && money >= 20000000){
    hoahong = money*10/100;
}else if(number >= 200 && money >= 4000000){
    hoahong = money*15/100;
}else if(number >= 350 && money >= 6500000){
    hoahong = money*20/100;
}
let tong = money + hoahong;
document.getElementById("result").innerHTML = `So tien hoa hong nhan duoc thang nay la : ${hoahong}vnd <br> Tong luong thang nay la : ${tong}vnd`;
}