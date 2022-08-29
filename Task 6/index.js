// 
// var newDiv = existElement.cloneNode(true);
// const target =document.querySelector('.itemImg');
// function mouseisIn(params) {
//     console.log("mouse is in");
//     target.parentNode.insertBefore(newDiv,target);
//     for (let index = 0; index < 6; index++) {
//         $(".img").animate({
//             top:'50px',
//             left:'-100px',width:'200px',height:'200px',
//             position:'absolute'
//         })
//     }
// }
// function mouseisOut(params) {
//     console.log("mouse is out");
// }
// $(".itemImg").hover(mouseisIn, mouseisOut)
// $(document).ready(function() {
//     for (let index = 0; index < 6; index++) {
//         var srcexistElement = document.getElementsByClassName("img")[index].src;
//     } 
document.getElementById("Back").addEventListener("click", OpenWindow);
function OpenWindow() {
    window.open("../home.html")
}
    var xpos = ""
    var ypos = ""
    $(".img").hover( function () {
            var src = $(this).attr("src")
            $("img").mousemove(
                function (event) {
                    xpos = event.pageX+10;
                    ypos = event.pageY+20;
                    $("#disp").css({'display':'block', 'top':ypos, 'left':xpos}).attr("src",src)
                }
            );
        },function () {$("#disp").css({'display':'none'})}
    );