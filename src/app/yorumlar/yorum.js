let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let warn = document.getElementById('h3');
var input = document.getElementById('inputField');
addToDoButton.addEventListener('click', function(){
let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.style.background = "white";
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    inputField.addEventListener("keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addToDo").click();
        }
    })
})