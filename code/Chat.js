//function to show the chatbox when the button is clicked on
function showChat(){
    var style = document.querySelector("#chatbox")
    var chatBox = document.getElementById("chatbox");
    var chatBoxStyle =getComputedStyle(style);
    //the next if/else statement is to make the the chatbox move up if it is out of view, and back if it is in view
    if(chatBoxStyle.bottom=="-200px"){
        chatBox.style.bottom="0";
    }else{
        chatBox.style.bottom="-200px";
    }
    chatBox.style.transition="2s";
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