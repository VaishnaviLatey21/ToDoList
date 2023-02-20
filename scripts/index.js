const taskcontainer = document.querySelector(".container");
console.log(taskcontainer);
const taskList = document.querySelector(".grid-container");
const addTaskBtn = document.querySelector(".btn_add");
const newtask = document.querySelector("#newtask");
const priority = document.querySelector("#priority");
const progressStatus = document.querySelector("#progressStatus");
const closeBtn = document.querySelector(".btn_close");
const checkBox = document.querySelector("#checkbox");

function addTask() {
    var task = document.createElement('div');
    var box_container = document.createElement('div');
    var checkBox = document.createElement('input');
    var taskContent = document.createElement('div');
    var priorityDiv = document.createElement('div');
    var inProgress = document.createElement('div');
    var btn_container = document.createElement('div');
    var close_btn = document.createElement('button');
    // checkBox.checked = true; 
    taskContent.innerText = newtask.value;
    priorityDiv.innerText = priority.value;
    inProgress.innerText = progressStatus.value;
    close_btn.innerText = 'x';
    close_btn.style.display = 'inline';
    checkBox.style.display = 'block';
    btn_container.appendChild(close_btn);
    box_container.appendChild(checkBox);
    task.append(box_container);
    task.append(taskContent);
    task.append(priorityDiv);
    task.append(inProgress);
    task.append(btn_container);
    task.classList.add("grid-container");
    var taskChild = Array.from(task.childNodes);
    taskChild.forEach(element => {
        element.classList.add("grid-item1")
    });
    taskcontainer.appendChild(task);

}

addTaskBtn.addEventListener("click", function () {
    if (newtask.value == '' || priority.value == '' || progressStatus.value == '') {
        alert("please enter all values")
    } else {
        addTask();
    }
})

closeBtn.addEventListener("click", function() {
    // taskcontainer.removeChild(taskList);
    // taskList.remove(taskcontainer);
    var current_tasks = document.querySelectorAll(".btn_close");
    for (var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
        taskList.remove();
        }
            }
})






