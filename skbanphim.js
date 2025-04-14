let newImg = document.getElementById("img");
let leftPos = 0;
let topPos = 0;

window.addEventListener("keydown", function(event) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
    }
    switch (event.key) {
        case "ArrowUp":
            topPos -= 5;
            break;
        case "ArrowDown":
            topPos += 5;
            break;
        case "ArrowLeft":
            leftPos -= 5;
            break;
        case "ArrowRight":
            leftPos += 5;
            break;
    }

    // Cập nhật lại vị trí của hình
    newImg.style.top = topPos + "px";
    newImg.style.left = leftPos + "px";
});