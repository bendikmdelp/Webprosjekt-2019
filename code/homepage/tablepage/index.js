function addToIdea(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var input = prompt("Enter card name");
    var cardListElement=document.createElement("li");
    var textNode =document.createTextNode(input);
    cardListElement.appendChild(textNode);
    document.getElementById("ideaList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=input;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("li");
        var descriptionNode=document.createTextNode(description);
        var desNameAtt = document.createAttribute("id");
        desNameAtt.value=prompt("add an id");
        descriptionItem.appendChild(descriptionNode);
        cardList.appendChild(descriptionItem);
        descriptionItem.setAttributeNode(desNameAtt);
    }
    
    var users = prompt("Add users to project, seperate by comma");
    if(users!=null){
        var userItem=document.createElement("li");
        var userNode=document.createTextNode(users);
        var usrNameAtt = document.createAttribute("id");
        usrNameAtt.value=prompt("add an id");
        userItem.appendChild(userNode);
        cardList.appendChild(userItem);
        userItem.setAttributeNode(usrNameAtt);
    }
    cardList.style.border="1px solid black";
    
}
document.addEventListener('click', function(e) {
    var element= document.getElementById(e.target.id);
    //alert(element.tagName);
    if(element.tagName == "LI"){
    var newData = prompt("enter new data");   document.getElementById(e.target.id).innerHTML=newData;
}
}, false);

function addToDoList(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardListElement=document.createElement("li");
    var input = prompt("Enter card name");
    var textNode =document.createTextNode(input);
    cardListElement.appendChild(textNode);
    document.getElementById("todoList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("li");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        cardList.appendChild(descriptionItem);
    }
    
    var users = prompt("Add users to project, seperate by comma");
    if(users!=null){
        var userItem=document.createElement("li");
        var userNode=document.createTextNode(users);
        userItem.appendChild(userNode);
        cardList.appendChild(userItem);
    }
    cardList.style.border="1px solid black";
    
}

function addToProgress(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardListElement=document.createElement("li");
    var input = prompt("Enter card name");
    var textNode =document.createTextNode(input);
    cardListElement.appendChild(textNode);
    document.getElementById("progressList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("li");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        cardList.appendChild(descriptionItem);
    }
    
    var users = prompt("Add users to project, seperate by comma");
    if(users!=null){
        var userItem=document.createElement("li");
        var userNode=document.createTextNode(users);
        userItem.appendChild(userNode);
        cardList.appendChild(userItem);
    }
    cardList.style.border="1px solid black";
 
}

function addToFinished(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardListElement=document.createElement("li");
    var input = prompt("Enter card name");
    var textNode =document.createTextNode(input);
    cardListElement.appendChild(textNode);
    document.getElementById("finishedList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("li");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        cardList.appendChild(descriptionItem);
    }
    
    var users = prompt("Add users to project, seperate by comma");
    if(users!=null){
        var userItem=document.createElement("li");
        var userNode=document.createTextNode(users);
        userItem.appendChild(userNode);
        cardList.appendChild(userItem);
    }
    cardList.style.border="1px solid black";
 
}

