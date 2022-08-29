
document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../index.html")
}

var element = document.getElementById('ER');
document.getElementById("valid").addEventListener("click",validate);
document.getElementById("clear").addEventListener("click",clear);
function validate() {
    var str = document.getElementById('username').value
    // console.log(str.length);
    var tag = document.createElement("p")
    if(str.length == 0){
        tag.innerHTML='Plz, Enter ur name *-* '
        element.appendChild(tag);
    }
    else if(str.length < 3){
        tag.innerHTML='Name must be 3 char or more *-* '
        element.appendChild(tag);
        }
    else{
        document.getElementById("ER").removeChild(document.getElementsByTagName("p")[0])
    }
}
// ?? nt active
function clear() {
    document.getElementById("ER").removeChild(document.getElementsByTagName("p")[0])
}
