function checkMet(){
    let dodaiM = +document.getElementById("donviMet").value;
    let dodaiFeet = dodaiM * 3.2808;
    document.getElementById("result").innerHTML = `${dodaiFeet} F`;
}