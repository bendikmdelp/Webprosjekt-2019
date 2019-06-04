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

let team = [

    { id: 1, name: "John Frederik" },

    { id: 2, name: "Jaspreet Singh" },

    { id: 3, name: "Marit Sivertsen" },

    { id: 4, name: "Tor Arne" },

];
//function used to create card with the info in the tasks array when the page is loaded
window.onload = function addToTask(){
    for(var i=0; i<=tasks.length; i++){
        //var card=document.createElement("li");
        var cardList=document.createElement("ul");
        var cardListElement=document.createElement("li");
        cardList.setAttribute("id", tasks[i].name);
       
        if(tasks[i].id===1){
            document.getElementById("ideaList").appendChild(cardList);
        }
         else if(tasks[i].id===2){
            document.getElementById("todoList").appendChild(cardList);
        }else if(tasks[i].id===3){
            document.getElementById("progressList").appendChild(cardList);
        }else if(tasks[i].id===4){
            document.getElementById("finishedList").appendChild(cardList);
        }
        cardList.setAttribute("draggable", true);
        cardList.setAttribute("ondragstart","drag(event)");
        cardList.ondragstart=function(){drag(event)};
        cardListElement.style.fontSize="20";
        cardListElement.innerHTML=tasks[i].name;
        
        //card.appendChild(cardList);
        cardList.appendChild(cardListElement);
        
        var cardNameAtt=document.createAttribute("id");
        cardNameAtt.value=tasks[i].id;
        cardListElement.setAttributeNode(cardNameAtt);
        
        var descriptionItem=document.createElement("li");
        descriptionItem.innerHTML=tasks[i].description;
        cardList.appendChild(descriptionItem);
        var desNameAtt = document.createAttribute("id");
        desNameAtt.value="descrption"+i;
        descriptionItem.setAttributeNode(desNameAtt);
        descriptionItem.style.fontSize="20";

        cardList.style.border="1px solid black";
        
        var DueDate = "must be done by "+tasks[i].dueDate;
        var dueDate=document.createElement("li");
        dueDate.innerHTML=DueDate;
        cardList.appendChild(dueDate);
        dueDate.setAttribute("id", "due"+i);
        dueDate.style.fontSize="30";
        
        var assigned = "Assigned to: "+team[i].name;
        var assignedList=document.createElement("li");
        assignedList.innerHTML=assigned;
        cardList.appendChild(assignedList);
        assignedList.setAttribute("id", "users"+i);
        assignedList.style.fontSize="30";
        
        cardList.style.width="200px";
    }
}