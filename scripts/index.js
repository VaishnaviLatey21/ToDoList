const taskcontainer = document.querySelector(".container");
console.log(taskcontainer);
const addTaskBtn = document.querySelector(".btn_add");
const newtask = document.querySelector("#newtask");
const priority = document.querySelector("#priority");
const progressStatus = document.querySelector("#progressStatus");
const closeBtn = document.querySelector("#btn_close")

function addTask() {
    var task = document.createElement('div');
    var taskContent = document.createElement('div');
    var priorityDiv = document.createElement('div');
    var inProgress = document.createElement('div');
    var btn_container = document.createElement('div');
    var close_btn = document.createElement('button');
    taskContent.innerText = newtask.value;
    priorityDiv.innerText = priority.value;
    inProgress.innerText = progressStatus.value;
    close_btn.innerText = 'x';
    close_btn.style.display = 'inline';
    btn_container.appendChild(close_btn);
    task.append(taskContent);
    task.append(priorityDiv);
    task.append(inProgress);
    task.append(btn_container);
    task.classList.add("grid-container");
    var taskChild = Array.from(task.childNodes);
    taskChild.forEach(element => {
        element.classList.add("grid-item1")
    });
    // let button = document.createElement('button');
    // button.classList.
    // task.append();
    taskcontainer.appendChild(task);
}

addTaskBtn.addEventListener("click", function () {
    if (newtask.value == '' || priority.value == '' || progressStatus.value == '') {
        alert("please enter all values")
    } else {
        addTask();
    }
})






