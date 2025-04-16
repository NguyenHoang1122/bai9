let myImg = null;
function init(){
    myImg = document.getElementById('img');
    myImg.style.position = 'relative';
    myImg.style.left = '0px';
}
function move(){
    myImg.style.left = parseInt(myImg.style.left) + 10 + 'px';
}
window.onload = init();