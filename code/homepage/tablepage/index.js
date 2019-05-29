function addToIdea(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardListElement=document.createElement("li");
    var input = prompt("Enter card name");
    var textNode =document.createTextNode(input);
    card.appendChild(textNode);
    document.getElementById("ideaList").appendChild(card);
//    document.card.appendChild(cardList);
//    document.cardList.appendChild(cardListElement);
    
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("dd");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        document.getElementById("ideaList").appendChild(descriptionItem);
    }
 /*   
    var users = prompt("Add users to project");
    if(users!=null){
        var userItem=document.createElement("li");
        var userNode=document.createTextNode(user);
        userItem.appendChild(userNode);
        document.cardList.appendChild(userItem);
    }
    */
}

function addToDoList(){
    var card=document.createElement("li");
    var input = prompt("Enter card name")
    var textNode =document.createTextNode(input);
    card.appendChild(textNode);
    document.getElementById("todoList").appendChild(card);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("dd");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        document.getElementById("todoList").appendChild(descriptionItem);
    }
    
}

function addToProgress(){
    var card=document.createElement("li");
    var input = prompt("Enter card name")
    var textNode =document.createTextNode(input);
    card.appendChild(textNode);
    document.getElementById("progressList").appendChild(card);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("dd");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        document.getElementById("progressList").appendChild(descriptionItem);
    }
}

function addToFinished(){
    var card=document.createElement("li");
    var input = prompt("Enter card name")
    var textNode =document.createTextNode(input);
    card.appendChild(textNode);
    document.getElementById("finishedList").appendChild(card);
    var description = prompt("Add a description");
    if(description!=null){
        var descriptionItem=document.createElement("dd");
        var descriptionNode=document.createTextNode(description);
        descriptionItem.appendChild(descriptionNode);
        document.getElementById("finishedList").appendChild(descriptionItem);
    }
}