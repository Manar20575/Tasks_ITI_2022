document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../home.html")
}
var num = prompt("Enter Number From 1 to 10 *-* ");
var rnumber  = '4'
if(num == rnumber){
document.write("<h1> Nicce Right Number <h1>")
}
else{
    
        if(num == rnumber){
            document.write("<h1> congratulations  <h1>")
        }
        else{
            for (let index = 0; index < 2; index++) {
            tst(num);
            }
            document.write("<h1> Failed the right number is : "+rnumber+" *-* <h1>")
        }
}
function tst(num) {
            alert("plzz, Enter Another Num");
            prompt("Enter Number From 1 to 10 *-* ");
}