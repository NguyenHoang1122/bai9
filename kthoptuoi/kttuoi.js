function checkTuoi() {
    let birthday = document.getElementById("birthday").value;
    let birthday1 = document.getElementById("birthday1").value;
    birthday = new Date(birthday);
    birthday1 = new Date(birthday1);
    let birthYear = birthday.getFullYear();
    let birthYear1 = birthday1.getFullYear();
    let can = birthYear%10;
    let can1 = birthYear1%10;
    let chi = (birthYear%100)%12;
    let chi1 = (birthYear1%100)%12;
    let thienCan = "";let thienCan1 = "";
    let diaChi = ""; let diaChi1 = "";
    let thiencanHopxung ="";
    let diachiHopxung ="";
    let result;
    switch (can){
        case 1:
            thienCan = "Tân";
             break;
        case 2:
            thienCan = "Nhâm";
            break;
        case 3:
            thienCan = "Quý";
            break;
        case 4:
            thienCan = "Giáp";
            break;
        case 5:
            thienCan = "Ất";
            break;
        case 6:
            thienCan = "Bính";
            break;
        case 7:
            thienCan = "Đinh";
            break;
        case 8:
            thienCan = "Mậu";
            break;
        case 9:
            thienCan = "Kỷ";
            break;
        default:
            thienCan = "Canh";
    }
    switch (can1){
        case 1:
            thienCan1 = "Tân";
            break;
        case 2:
            thienCan1 = "Nhâm";
            break;
        case 3:
            thienCan1 = "Quý";
            break;
        case 4:
            thienCan1 = "Giáp";
            break;
        case 5:
            thienCan1 = "Ất";
            break;
        case 6:
            thienCan1 = "Bính";
            break;
        case 7:
            thienCan1 = "Đinh";
            break;
        case 8:
            thienCan1 = "Mậu";
            break;
        case 9:
            thienCan1 = "Kỷ";
            break;
        default:
            thienCan1 = "Canh";
    }
    switch (chi){
        case 1:
            diaChi = "Sửu";
            break;
        case 2:
            diaChi = "Dần";
            break;
        case 3:
            diaChi = "Mão";
            break;
        case 4:
            diaChi = "Thìn";
            break;
        case 5:
            diaChi = "Tỵ";
            break;
        case 6:
            diaChi = "Ngọ";
            break;
        case 7:
            diaChi = "Mùi";
            break;
        case 8:
            diaChi = "Thân";
            break;
        case 9:
            diaChi = "Dậu";
            break;
        case 10:
            diaChi = "Tuất";
            break;
        case 11:
            diaChi = "Hợi";
            break;
        default:
            diaChi = "Tý";
    }
    switch (chi1){
        case 1:
            diaChi1 = "Sửu";
            break;
        case 2:
            diaChi1 = "Dần";
            break;
        case 3:
            diaChi1 = "Mão";
            break;
        case 4:
            diaChi1 = "Thìn";
            break;
        case 5:
            diaChi1 = "Tỵ";
            break;
        case 6:
            diaChi1 = "Ngọ";
            break;
        case 7:
            diaChi1 = "Mùi";
            break;
        case 8:
            diaChi1 = "Thân";
            break;
        case 9:
            diaChi1 = "Dậu";
            break;
        case 10:
            diaChi1 = "Tuất";
            break;
        case 11:
            diaChi1 = "Hợi";
            break;
        default:
            diaChi1 = "Tý";
    }
    if((can==="Kỷ" && can1==="Giáp")||(can==="Giáp"&& can1==="Kỷ")||
        (can==="Ất" && can1==="Canh")||(can==="Canh" && can1==="Ất")||
        (can==="Bính" && can1==="Tân")||(can==="Tân" && can1==="Bính")||
        (can==="Đinh" && can1==="Nhâm")||(can==="Nhâm" && can1==="Đinh")||
        (can==="Mậu" && can1==="Quý")||(can==="Quý" && can1==="Mậu")){
        thiencanHopxung = "Tốt";
    }else if((can==="Canh" && can1==="Giáp")||(can==="Giáp"&& can1==="Canh")||
        (can==="Ất" && can1==="Tân")||(can==="Tân" && can1==="Ất")||
        (can==="Bính" && can1==="Nhâm")||(can==="Nhâm" && can1==="Bính")||
        (can==="Đinh" && can1==="Quý")||(can==="Quý" && can1==="Đinh")||
        (can==="Mậu" && can1==="Giáp")||(can==="Giáp" && can1==="Mậu")||
        (can==="Kỷ" && can1==="Ất")||(can==="Ất"&& can1==="Kỷ")){
        thiencanHopxung = "Xấu";
    }else{
        thiencanHopxung = "Bình thường";
    }
    if(diaChi==="Tý" && diaChi1==="Sửu"||
        diaChi==="Dần" && diaChi1==="Hợi"||
        diaChi==="Mão" && diaChi1==="Tuất"||
        diaChi==="Thìn" && diaChi1==="Dậu"||
        diaChi==="Tỵ" && diaChi1==="Thân"||
        diaChi==="Ngọ" && diaChi1==="Mùi"||
        diaChi1==="Sửu" && diaChi==="Tý"||
        diaChi1==="Hợi" && diaChi==="Dần"||
        diaChi1==="Tuất" && diaChi==="Mão"||
        diaChi1==="Dậu" && diaChi==="Thìn"||
        diaChi1==="Thân" && diaChi==="Tỵ"||
        diaChi1==="Mùi" && diaChi==="Ngọ"
        ){
        diachiHopxung = "Rất hợp";
    }else if (diaChi==="Tý"&&(diaChi1==="Thân"||diaChi1==="Thìn")||
              diaChi==="Sửu"&&(diaChi1==="Tỵ"||diaChi1==="Dậu")||
            diaChi==="Dần"&&(diaChi1==="Ngọ"||diaChi1==="Tuất")||
              diaChi==="Mão"&&(diaChi1==="Hợi"||diaChi1==="Mùi")||
            diaChi==="Thìn"&&(diaChi1==="Tý"||diaChi1==="Thân")||
              diaChi==="Tỵ"&&(diaChi1==="Sửu"||diaChi1==="Dậu")||
            diaChi==="Ngọ"&&(diaChi1==="Dần"||diaChi1==="Tuất")||
              diaChi==="Mùi"&&(diaChi1==="Hợi"||diaChi1==="Mão")||
            diaChi==="Thân"&&(diaChi1==="Tý"||diaChi1==="Thìn")||
              diaChi==="Dậu"&&(diaChi1==="Sửu"||diaChi1==="Tỵ")||
            diaChi==="Tuất"&&(diaChi1==="Dần"||diaChi1==="Ngọ")||
              diaChi==="Hợi"&&(diaChi1==="Mão"||diaChi1==="Mùi")
            ){
        diachiHopxung = "Hợp";
    }else if(diaChi==="Tý"&&(diaChi1==="Ngọ"||diaChi1==="Mão"||diaChi1==="Dậu")||
            diaChi==="Sửu"&&(diaChi1==="Thìn"||diaChi1==="Tuất"||diaChi1==="Mùi")||
            diaChi==="Dần"&&(diaChi1==="Thân"||diaChi1==="Tỵ"||diaChi1==="Hợi")||
            diaChi==="Mão"&&(diaChi1==="Tý"||diaChi1==="Ngọ"||diaChi1==="Dậu")||
            diaChi==="Thìn"&&(diaChi1==="Sửu"||diaChi1==="Mùi"||diaChi1==="Tuất")||
            diaChi==="Tỵ"&&(diaChi1==="Dần"||diaChi1==="Hợi"||diaChi1==="Thân")||
            diaChi==="Ngọ"&&(diaChi1==="Tý"||diaChi1==="Mão"||diaChi1==="Dậu")||
            diaChi==="Mùi"&&(diaChi1==="Sửu"||diaChi1==="Thìn"||diaChi1==="Tuất")||
            diaChi==="Thân"&&(diaChi1==="Dần"||diaChi1==="Tỵ"||diaChi1==="Hợi")||
            diaChi==="Dậu"&&(diaChi1==="Ngọ"||diaChi1==="Mão"||diaChi1==="Tý")||
            diaChi==="Tuất"&&(diaChi1==="Mùi"||diaChi1==="Sửu"||diaChi1==="Thìn")||
            diaChi==="Hợi"&&(diaChi1==="Thân"||diaChi1==="Dần"||diaChi1==="Tỵ")
            ){
            diachiHopxung = "Xung";
    }else{
        diachiHopxung = "Không hợp rõ ràng";
    }
    if(thiencanHopxung==="Tốt"&&(diachiHopxung==="Rất hợp"||diachiHopxung==="Hợp")){
        result = "✅Rất hợp";
    }else if(thiencanHopxung==="Tốt"||diachiHopxung==="Rất hợp"||diachiHopxung==="Hợp"){
        result = "👍Hợp";
    }else if(thiencanHopxung==="Bình thường"&& diachiHopxung==="Không hợp rõ ràng"){
        result = "⚖️Bình hòa";
    }else if(thiencanHopxung==="Xấu"||diachiHopxung==="Xung"){
        result = "❗ Xung";
    }else{
        result = "❌ Rất xung";
    }
    document.getElementById("result").innerHTML = `Can chi (Nam) : ${can} ${chi} <br> Can chi (Nu) : ${can1} ${chi1} <br> Chi của hai bạn là :${thiencanHopxung} và ${diachiHopxung} <br> Nên hai ban là : ${result}`;
}