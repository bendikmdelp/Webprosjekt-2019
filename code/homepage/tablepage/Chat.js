function showChat(){
    var style = document.querySelector("#chatbox")
    var chatBox = document.getElementById("chatbox");
    var chatBoxStyle =getComputedStyle(style);
    if(chatBoxStyle.bottom=="-200px"){
        chatBox.style.bottom="0";
    }else{
        chatBox.style.bottom="-200px";
    }
    chatBox.style.transition="2s";
}

function sendChat(){
    var chatItem=document.createElement("li");
    var message=document.getElementById("chatInput").value;
    var chatNode=document.createTextNode(message);
    chatItem.appendChild(chatNode);
    document.getElementById("chatList").appendChild(chatItem);
}