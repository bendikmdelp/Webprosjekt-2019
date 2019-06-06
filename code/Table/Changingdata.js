//evenlistener with function to change the data of an <li> element when clicked on
document.addEventListener('click', function(e) {
    var element= document.getElementById(e.target.id); //Gets the id of the element clicked on
    if(element.tagName === "LI"){//Checks if the elemnt clicked on is a list element
        var newData = prompt("enter new data");   document.getElementById(e.target.id).innerHTML=newData;//changes the data of the list element
    }
}, false);