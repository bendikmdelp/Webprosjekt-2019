function allowDrop(ev) {
  ev.preventDefault();
}

//function to be able to drag and drop and element
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id); //Sets a text value to be able to drop the card onto a list
    ev.style.height="50%";
    ev.style.width="50%";
}

//functions to add the dragged element to the list it is hovered over
function dropTodo(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");//Gets the text value of the dragged element
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
function dropTrash(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById("trashList").appendChild(document.getElementById(data));

}