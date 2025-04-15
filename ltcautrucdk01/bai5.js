let diemKT = +prompt('Nhap diem bai kiem tra ');
let diemGK = +prompt('Nhap diem bai giua ky ');
let diemCK = +prompt('Nhap diem bai cuoi ky');
let dtb = (diemKT + diemGK + diemCK)/3;
let result;
if(dtb >=0 && dtb <= 10) {
    if (dtb > 8) {
        result = `DTB : ${dtb} la hoc sinh Gioi`;
    } else if (dtb > 6) {
        result = `DTB : ${dtb} la hoc sinh Kha`;
    } else if (dtb > 4) {
        result = `DTB : ${dtb} la hoc sinh Trung Binh`;
    } else {
        result = `DTB : ${dtb} la hoc sinh Yeu`;
    }
}else{
    result = `Ban da nhap sai`;
}
document.getElementById("demo").innerHTML = result;