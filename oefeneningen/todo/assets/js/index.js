//an event listener that add to the form tag

var taskForm = document.getElementById('new_task_form');
var taskList = document.getElementById("taskList");

taskForm.addEventListener('submit', function (e){
    e.preventDefault(); //standard function of submit stopped
     var newTaskInputValue = taskForm.elements.new_task;
    addTask(newTaskInputValue.value);
}, false);

function addTask(newTaskInputValue){
//     beginning tag filling
//     construction of the tags
    const div = document.createElement('div');
    const trash = document.createElement('button');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

//     sending of the values from the button and the filled task by the user
    trash.innerHTML = 'DEL';
    trash.style.color = "white";
    label.innerHTML = newTaskInputValue;
    div.className = "form-control";
    checkbox.classList = "form-check-input mx-2 py-2";
    trash.classList = "btn btn-danger";
    label.classList = "mx-4";
    label.style.fontSize = "20px";
    label.style.fontWeight = "bold";
//     push the elements in order
    div.appendChild(trash);
    div.appendChild(label);
    div.appendChild(checkbox);
//     taskslist pushing
    taskList.appendChild(div);

    //addEventListener aan het checkbox element verbinden met het click event.

    checkbox.addEventListener("click", function () {
        if (checkbox.checked == true) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });

    //addEventListener aan het trash element verbinden met een click event.
    trash.addEventListener("click", function () {
        div.remove();
    });


}

