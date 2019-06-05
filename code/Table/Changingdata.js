//evenlistener with function to change the data of an <li> element when clicked on
document.addEventListener('click', function(e) {
    var element= document.getElementById(e.target.id);
    if(element.tagName === "LI"){
        var newData = prompt("enter new data");   document.getElementById(e.target.id).innerHTML=newData;
    }
}, false);