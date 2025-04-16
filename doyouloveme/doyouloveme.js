function changePositionBtnNo(){
    let btnNo = document.getElementById("btn-no");
    let numberLeftRandom = Math.random()*window.innerWidth;
    let numberTopRandom = Math.random()*window.innerHeight;
    btnNo.style.left = numberLeftRandom + "px";
    btnNo.style.top = numberTopRandom + "px";
}
function btnYes(){
    alert("Vâng tôi cũng rất yêu bạn !!!!!!!");
}