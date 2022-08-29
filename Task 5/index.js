document.getElementById("RandomBtn").addEventListener("click", CopyDiv);
document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../home.html")
}
function CopyDiv() {
    var existElement = document.getElementsByClassName("RandonMain")[0];
    // document.getElementById("RandomDiv").insertBefore();
    var newDiv = existElement.cloneNode(true);
    const target =document.querySelector('#RandomDiv');
    target.parentNode.insertBefore(newDiv,target);
    ChangeColor();
}
function ChangeColor() {
    var colors, symbols;
    colors = "#";
    symbols = "0123456789ABCDEF"
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colors = colors + randomColor;
    console.log(colors);
    document.getElementById('RandomDiv').style.backgroundColor = colors;
}