//function to show the trashcan "div" and change the text on the button depending on where the div is.
function showTrashcan(){
    var style = document.querySelector("#trashcan")
    var trashcan = document.getElementById("trashcan");
    var trashcanBtn = document.getElementById("showTrash");
    var trashcanStyle =getComputedStyle(style);//checks the style values of the element
    if(trashcanStyle.right==="-390px"){//checks if the right value is -390px
        trashcan.style.right="0";
        trashcan.style.zIndex="150";
        trashcanBtn.innerHTML="Hide trashcan";//changes the text on the button
    }
    else{
        trashcan.style.right="-390px";
        trashcanBtn.innerHTML="Show trashcan";
    }
    trashcan.style.transition="0.5s";
}

//function to remove all list elements from the list in the trashcan.
function emptyTrash(){
    document.getElementById("trashList").innerHTML="";
}