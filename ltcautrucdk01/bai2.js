let age = +prompt('Nhap so tuoi hien tai cua ban');
let result;
if(age <16){
    result = `Ban ${age} tuoi nen van chua du dieu kien vao lop 10`;
}else{
    result = `Ban ${age} tuoi da du dieu kien vao lop 10`;
}
document.getElementById("demo").innerHTML = result;