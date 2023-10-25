function addTask() {
    var taskInput = document.getElementById("taskInput");

var taskText = taskInput.value;
if (taskText){
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = taskText + '<button onclick="removeTask(this)">Remove</button>';
    li.addEventListener("click", 
        function() {
            li.classList.toggle("complete");
        })
    taskList.appendChild(li);
    taskInput.value = "";
    }
}

function removeTask(task){
    task.parentNode.remove();
}
