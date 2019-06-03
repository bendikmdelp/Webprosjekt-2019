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
function dropFinished(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById("trashList").appendChild(document.getElementById(data));

}