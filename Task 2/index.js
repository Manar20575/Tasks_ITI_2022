document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../home.html")
}
var name = prompt("plz, Enter ur name ?")
var Rnum = parseInt(prompt("Plz, Enter Repeatation num : "))
for (let index = 0; index < Rnum; index++) {
    document.write(`<li>${name}</li>`)
}