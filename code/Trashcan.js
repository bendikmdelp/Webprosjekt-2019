//function to show the trashcan "div"
function showTrashcan(){
    var style = document.querySelector("#trashcan")
    var trashcan = document.getElementById("trashcan");
    var trashcanStyle =getComputedStyle(style);
    if(trashcanStyle.right==="-390px"){
        trashcan.style.right="0";
        trashcan.style.zIndex="150";
    }
    else{
        trashcan.style.right="-390px";
    }
    trashcan.style.transition="0.5s";
}