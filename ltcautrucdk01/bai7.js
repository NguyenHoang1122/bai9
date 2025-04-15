function check() {
    let internal = +document.getElementById("internal").value;
    let outside = +document.getElementById("outside").value;
    let internalMessage = +document.getElementById("internalMessage").value;
    let outsideMessage = +document.getElementById("outsideMessage").value;
    let result = 	220000+ internal*220 + outside*1090 + internalMessage*50 + outsideMessage*150;
    document.getElementById("result").innerHTML = result;
}