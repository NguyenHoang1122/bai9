function getAge() {
    let birthDay = document.getElementById("birthday").value;
    let date = new Date(birthDay);
    let year = date.getFullYear();
    //Lay nam hien tai tu dong
    let currentYear = new Date();
    let currenYear = currentYear.getFullYear();
    let age = currenYear - year;
    document.getElementById("demo").innerHTML = `Nam nay ban da ${age} tuoi`;
}