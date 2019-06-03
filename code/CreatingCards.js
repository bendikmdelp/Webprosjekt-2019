function addToIdea(){
    //var card=document.createElement("li");
    //card.setAttribute("id", Math.random);
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameIdea").value;
    var cardListElement=document.createElement("li");
    
    cardList.setAttribute("id", Math.random);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30";  
    
    var textNode =document.createTextNode("Name: "+cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("ideaList").appendChild(cardList);
    //card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    description.style.fontSize="25";
    description.style.width="180px";
    cardList.appendChild(descriptionItem);
    
    /*var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);*/ 
    
    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: "+ dueDate);
    dueDateItem.setAttribute("id", Math.random);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    
    
    var users = prompt("Add users to task")
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to: " + users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt); 
    
    cardList.style.border="1px solid black";
    cardList.style.width="200px";
}

function addToDoList(){
    //var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameTodo").value;
   
    var cardListElement=document.createElement("li");
    cardList.setAttribute("id", Math.random);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30"; 
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("todoList").appendChild(cardList);
    //card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=Math.random;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);
    description.style.fontSize="25";
    description.style.width="180px";

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: "+ dueDate);
    dueDateItem.setAttribute("id", Math.random);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    
    var users = prompt("Add users to task")
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to: " + users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
    cardList.style.width="200px";
     
}

function addToProgress(){
    //var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameprogress").value;
   
    var cardListElement=document.createElement("li");
    cardList.setAttribute("id", Math.random);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30"; 
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("progressList").appendChild(cardList);
    //card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);
    description.style.fontSize="25";
    description.style.width="180px";

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: "+ dueDate);
    dueDateItem.setAttribute("id", Math.random);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    
    var users = prompt("Add users to task")
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to: " + users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
    cardList.style.width="200px";
    
}

function addToFinished(){
    //var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameFinished").value;
   
    //var input = document.createElement("input").innerHTML="enter Card name";
    var cardListElement=document.createElement("li");
    cardList.setAttribute("id", Math.random);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30"; 
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("finishedList").appendChild(cardList);
    //card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=Math.random;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);
    description.style.fontSize="25";
    description.style.width="180px";

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);

    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: "+ dueDate);
    dueDateItem.setAttribute("id", Math.random);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    
    var users = prompt("Add users to task")
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to: " + users);
    var usrNameAtt = document.createAttribute("id");
    usrNameAtt.value=Math.random;
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.setAttributeNode(usrNameAtt);
    
    cardList.style.border="1px solid black";
    cardList.style.width="200px";
    
}