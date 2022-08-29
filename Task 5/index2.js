var myWindow;
const img = document.getElementById("girl");
const img2 = document.getElementById("relax");
const img3 = document.getElementById("cute");
document.getElementById("img-new").addEventListener("click",openWindow);
document.getElementById("img-close").addEventListener("click",close);
document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../index.html")
}
// var girl = document.getElementById("girl");
// var relax = document.getElementById("relax");
// var cute = document.getElementById("cute");
// document.getElementById("girl").addEventListener("click", changeimg(girl));
// document.getElementById("relax").addEventListener("click", changeimg(relax));
// document.getElementById("cute").addEventListener("click", changeimg(cute));
// function changeimg(source) {
//     var img = source.src;
//     var changeimg = document.getElementById("img-replace")
//     changeimg.src = img;
// }
img.addEventListener("click", 
function changeImg() {
    var isrc = img.src;
    const changeimg = document.getElementById("img-replace");
    changeimg.src = isrc;
    document.getElementById("img-details").innerHTML="....Img:- Girl";
})
img2.addEventListener("click", 
function changeImg() {
    var isrc = img2.src;
    const changeimg = document.getElementById("img-replace");
    changeimg.src = isrc;
    document.getElementById("img-details").innerHTML="....Img:- Relaxation";
    openn = img2;
})
img3.addEventListener("click", 
function changeImg() {
    var isrc = img3.src;
    const changeimg = document.getElementById("img-replace");
    changeimg.src = isrc;
    document.getElementById("img-details").innerHTML="....Img:- Cutee Chick"
})
function openWindow() {
    myWindow = window.open('', '', 'width=200,height=200');
    myWindow.document.write("<h2>New Img<h2/>")
    var newsrc = document.getElementById("img-replace").src;
    myWindow.document.write("<img src=n "+newsrc+" ></img>")
}
function close(){ 
    myWindow.close();    
}
