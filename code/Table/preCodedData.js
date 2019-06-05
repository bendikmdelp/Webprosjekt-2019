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
        dueDate: "2019-06-07",
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
    //for loop iterating through the tasks array
    for(var i=0; i<=tasks.length; i++){
        var cardList=document.createElement("ul");
        var cardListElement=document.createElement("li");
        cardList.setAttribute("id", tasks[i].name);
       
        //Attaching cardlist to different lists depending on where in the array it is
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
        cardList.setAttribute("ondragstart","drag(event)"); //makes cardlist dragabble
        cardList.ondragstart=function(){drag(event)};
        cardListElement.style.fontSize="30";
        cardListElement.innerHTML=tasks[i].name;
        cardList.appendChild(cardListElement);
        var cardNameAtt=document.createAttribute("id");
        cardNameAtt.value=tasks[i].id;
        cardListElement.setAttributeNode(cardNameAtt);
        
        //Creating description and assigning attributes
        var descriptionName=document.createElement("li");
        var descriptionNameNode=document.createTextNode("Description:");
        descriptionName.appendChild(descriptionNameNode);
        cardList.appendChild(descriptionName);
        descriptionName.style.fontSize="20";
        var descriptionItem=document.createElement("li");
        descriptionItem.innerHTML=tasks[i].description;
        cardList.appendChild(descriptionItem);
        var desNameAtt = document.createAttribute("id");
        desNameAtt.value="descrption"+i;
        descriptionItem.setAttributeNode(desNameAtt);
        descriptionItem.style.fontSize="20";

        cardList.style.border="1px solid black";
        
        //Attaching due date and assigning attributes
        var due=document.createElement("li")
        due.innerHTML="Due date: ";
        cardList.appendChild(due);
        due.style.fontSize="20";
        var DueDate = tasks[i].dueDate;
        var dueDate=document.createElement("li");
        dueDate.innerHTML=DueDate;
        cardList.appendChild(dueDate);
        dueDate.setAttribute("id", "due"+i);
        dueDate.style.fontSize="20";
        
        var assigned = "Assigned to: ";
        var assignedTo=team[i].name;
        var assignedList=document.createElement("li");
        var assignedToList=document.createElement("li");
        assignedList.innerHTML=assigned;
        cardList.appendChild(assignedList);
        assignedToList.innerHTML=assignedTo;
        cardList.appendChild(assignedToList);
        assignedToList.setAttribute("id", "users"+i);
        assignedList.style.fontSize="20";
        assignedToList.style.fontSize="20";
        
        cardList.style.width="270px";
        cardList.style.backgroundColor="white";
        cardList.style.borderRadius="25px";
        cardList.style.margin="2px";
    }
}