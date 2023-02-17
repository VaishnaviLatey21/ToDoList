const taskcontainer = document.querySelector(".container");
console.log(taskcontainer);
const addTaskBtn = document.querySelector(".btn_add");
const newtask = document.querySelector("#newtask");
const priority = document.querySelector("#priority");
const progressStatus = document.querySelector("#progressStatus");

function addTask() {
    var task = document.createElement('div');
    var taskContent = document.createElement('div');
    var priorityDiv = document.createElement('div');
    var inProgress = document.createElement('div');
    taskContent.innerText = newtask.value;
    priorityDiv.innerText = priority.value;
    inProgress.innerText = progressStatus.value;
    task.append(taskContent);
    task.append(priorityDiv);
    task.append(inProgress);
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



