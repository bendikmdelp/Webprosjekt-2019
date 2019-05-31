function addToIdea(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameIdea").value;
    //var input = document.createElement("input").innerHTML="enter Card name";
    var cardListElement=document.createElement("li");
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("ideaList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("value", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var users = document.createElement("p").innerHTML="drag to add users to card";
    var userItem=document.createElement("li");
    var userNode=document.createTextNode(users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
    
}

document.addEventListener('click', function(e) {
    var element= document.getElementById(e.target.id);
    if(element.tagName == "LI"){
    var newData = prompt("enter new data");   document.getElementById(e.target.id).innerHTML=newData;
    }
}, false);

function addToDoList(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameTodo").value;
    //var input = document.createElement("input").innerHTML="enter Card name";
    var cardListElement=document.createElement("li");
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("todoList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("value", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var users = document.createElement("p").innerHTML="drag to add users to card";
    var userItem=document.createElement("li");
    var userNode=document.createTextNode(users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
     
}

function addToProgress(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameProgress").value;
    //var input = document.createElement("input").innerHTML="enter Card name";
    var cardListElement=document.createElement("li");
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("progressList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("value", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var users = document.createElement("p").innerHTML="drag to add users to card";
    var userItem=document.createElement("li");
    var userNode=document.createTextNode(users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
   
}

function addToFinished(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameFinished").value;
    //var input = document.createElement("input").innerHTML="enter Card name";
    var cardListElement=document.createElement("li");
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("finisedList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("value", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var users = document.createElement("p").innerHTML="drag to add users to card";
    var userItem=document.createElement("li");
    var userNode=document.createTextNode(users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
   
}