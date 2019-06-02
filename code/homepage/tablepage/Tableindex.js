let tasks=[
    {
        id: 1,
        name: "Creating a simple webapp",
        dueDate: "2019-06-05",
        description: "We need to create a simple webapp that fulfills the criteria"
    },
    {
        id: 2,
        name: "Finish app",
        dueDate: "2019-06-05",
        description: "We need to finish the app by the deadline"
    },
    {
        id: 3,
        name: "Creating cards",
        dueDate: "2019-06-01",
        description: "Need to create the card needed in the app"
        
    },
    {
        id:4,
        name: "Download tools",
        dueDate: "2019-05-29",
        description: "Download the tools needed to complete the assignment"
    }
];

window.onload = function addToTask(){
    for(var i=0; i<=tasks.length; i++){
        var card=document.createElement("li");
        var cardList=document.createElement("ul");
        var cardListElement=document.createElement("li");
        card.setAttribute("id", tasks[i].name);
       
        if(tasks[i].id===1){
            document.getElementById("ideaList").appendChild(card);
        }
         else if(tasks[i].id===2){
            document.getElementById("todoList").appendChild(card);
        }else if(tasks[i].id===3){
            document.getElementById("progressList").appendChild(card);
        }else if(tasks[i].id===4){
            document.getElementById("finishedList").appendChild(card);
        }
        card.setAttribute("draggable", true);
        card.setAttribute("ondragstart","drag(event)");
        card.ondragstart=function(){drag(event)};
        cardListElement.style.fontSize="30";
        cardListElement.innerHTML=tasks[i].name;
        
        card.appendChild(cardList);
        cardList.appendChild(cardListElement);
        
        var cardNameAtt=document.createAttribute("id");
        cardNameAtt.value=tasks[i].id;
        cardListElement.setAttributeNode(cardNameAtt);
        var descriptionItem=document.createElement("li");
        descriptionItem.innerHTML=tasks[i].description;
        cardList.appendChild(descriptionItem);
        var desNameAtt = document.createAttribute("id");
        desNameAtt.value=Math.random;
        descriptionItem.setAttributeNode(desNameAtt);
        descriptionItem.style.fontSize="20";

        cardList.style.border="1px solid black";
        
        var DueDate = "must be done by "+tasks[i].dueDate;
        var dueDate=document.createElement("li");
        dueDate.innerHTML=DueDate;
        cardList.appendChild(dueDate);
        dueDate.style.fontSize="30";
    }
}


function addToIdea(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameIdea").value;
    var cardListElement=document.createElement("li");
    
    card.setAttribute("id", cardName);
    card.setAttribute("draggable",true);
    card.setAttribute("ondragstart","drag(event)");
    card.ondragstart=function(){drag(event)};
    card.style.fontSize="40";  
    
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

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
    ev.style.height="50%";
    ev.style.width="50%";
}

function dropTodo(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById("todoList").appendChild(document.getElementById(data));

}
function dropIdea(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById("ideaList").appendChild(document.getElementById(data));

}
function dropProgress(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById("progressList").appendChild(document.getElementById(data));

}
function dropFinished(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById("finishedList").appendChild(document.getElementById(data));

}


function addToDoList(){
    var card=document.createElement("li");
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameTodo").value;
   
    var cardListElement=document.createElement("li");
    card.setAttribute("id", cardName);
    card.setAttribute("draggable",true);
    card.setAttribute("ondragstart","drag(event)");
    card.ondragstart=function(){drag(event)};
    card.style.fontSize="40";
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("todoList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=Math.random;
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
    var cardName=document.getElementById("cardNameprogress").value;
   
    var cardListElement=document.createElement("li");
    card.setAttribute("id", cardName);
    card.setAttribute("draggable",true);
    card.setAttribute("ondragstart","drag(event)");
    card.ondragstart=function(){drag(event)};
    card.style.fontSize="40";
    
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
    card.setAttribute("id", cardName);
    card.setAttribute("draggable",true);
    card.setAttribute("ondragstart","drag(event)");
    card.ondragstart=function(){drag(event)};
    card.style.fontSize="40";
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("finishedList").appendChild(card);
    card.appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=Math.random;
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