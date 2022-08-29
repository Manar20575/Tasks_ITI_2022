document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../home.html")
}

var num = parseInt(prompt("Plz, Enter the number"));
if(num % 2 == 0){
    document.write("<h1>Number is Even</h1>")
}
else{
    document.write("<h1>Number is Odd</h1>")
}