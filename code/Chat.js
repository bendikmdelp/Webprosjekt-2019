//function to show the chatbox when the button is clicked on
function showChat(){
    var style = document.querySelector("#chatbox")
    var chatBox = document.getElementById("chatbox");
    var showChat= document.getElementById("chatBtn");
    var chatBoxStyle =getComputedStyle(style);
    //the next if/else statement is to make the the chatbox move up if it is out of view, and back if it is in view
    if(chatBoxStyle.bottom=="-300px"){
        chatBox.style.bottom="0";
        showChat.innerHTML="Hide chat"
    }else{
        chatBox.style.bottom="-300px";
        showChat.innerHTML="Show chat"
    }
    chatBox.style.transition="0.5s";
}

//function to add the text in the input field to the chat box
function sendChat(){
    var chatItem=document.createElement("li");
    var message=document.getElementById("chatInput").value;
    var chatNode=document.createTextNode(message);
    chatItem.appendChild(chatNode);
    document.getElementById("chatList").appendChild(chatItem);
    chatItem.style.zIndex="5";
}