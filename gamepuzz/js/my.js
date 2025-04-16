function changeImageOne(){
    let imageOne = document.getElementById("image-1");
    let currentImage = imageOne.getAttribute("src");
    if(currentImage === "img/funny-cat1_part1x1.jpg"){
        imageOne.setAttribute("src", "img/monkey_part1x1.jpg");
    }else if(currentImage === "img/monkey_part1x1.jpg"){
        imageOne.setAttribute("src", "img/panda_swap_part1x1.jpg");
    }else{
        imageOne.setAttribute("src","img/funny-cat1_part1x1.jpg");
    }
}
function changeImageTwo(){
    let imageTwo = document.getElementById("image-2");
    let currentImage = imageTwo.getAttribute("src");
    if(currentImage === "img/funny-cat1_part2x1.jpg"){
        imageTwo.setAttribute("src", "img/monkey_part2x1.jpg");
    }else if(currentImage === "img/monkey_part2x1.jpg"){
        imageTwo.setAttribute("src", "img/panda_swap_part2x1.jpg");
    }else{
        imageTwo.setAttribute("src","img/funny-cat1_part2x1.jpg");
    }
}
function changeImageThree(){
    let imageThree = document.getElementById("image-3");
    let currentImage = imageThree.getAttribute("src");
    if(currentImage === "img/funny-cat1_part3x1.jpg"){
        imageThree.setAttribute("src", "img/monkey_part3x1.jpg");
    }else if(currentImage === "img/monkey_part3x1.jpg"){
        imageThree.setAttribute("src", "img/panda_swap_part3x1.jpg");
    }else{
        imageThree.setAttribute("src","img/funny-cat1_part3x1.jpg");
    }
}
function changeImageFour(){
    let imageFour = document.getElementById("image-4");
    let currentImage = imageFour.getAttribute("src");
    if(currentImage === "img/funny-cat1_part4x1.jpg"){
        imageFour.setAttribute("src", "img/monkey_part4x1.jpg");
    }else if(currentImage === "img/monkey_part4x1.jpg"){
        imageFour.setAttribute("src", "img/panda_swap_part4x1.jpg");
    }else{
        imageFour.setAttribute("src","img/funny-cat1_part4x1.jpg");
    }
}
function changeImageFive(){
    let imageFive = document.getElementById("image-5");
    let currentImage = imageFive.getAttribute("src");
    if(currentImage === "img/funny-cat1_part5x1.jpg"){
        imageFive.setAttribute("src", "img/monkey_part5x1.jpg");
    }else if(currentImage === "img/monkey_part5x1.jpg"){
        imageFive.setAttribute("src", "img/panda_swap_part5x1.jpg");
    }else{
        imageFive.setAttribute("src","img/funny-cat1_part5x1.jpg");
    }
}