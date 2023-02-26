const taskcontainer = document.querySelector(".container");
console.log(taskcontainer);
const taskList = document.querySelector(".grid-container");
const addTaskBtn = document.querySelector(".btn_add");
const newtask = document.querySelector("#newtask");
const priority = document.querySelector("#priority");
const progressStatus = document.querySelector("#progressStatus");
const closeBtn = document.querySelector(".btn_close");
const checkBox = document.querySelector("#checkbox");
// const progressBar = document.querySelector('#progress');

function addTask() {
    var task = document.createElement('div');
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add("mycheckbox");
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
    close_btn.style.display = 'block';
    close_btn.addEventListener('click', function() {
        taskcontainer.removeChild(task);
    });

    checkBox.addEventListener('click', function() {
        console.log("CHECKED");
    });
    // checkBox.style.display = 'block';

    btn_container.appendChild(close_btn);
    task.append(checkBox);
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

var endDate = new Date("Feb 27, 2023 15:00:00");
var startDate = new Date("Feb 23, 2023 15:00:00");

console.log(endDate);
console.log(startDate);

function incrementPercentage() {
    var now = new Date();
    var distanceWhole = endDate - startDate;
	var distanceLeft = endDate - now;
    console.log(distanceWhole);
    console.log(distanceLeft);

    var minLeft = Math.floor(distanceLeft / (1000 *  60));
    var minTotal = Math.floor(distanceWhole / (1000 * 60));
    var result = Math.floor(((minTotal - minLeft) / minTotal) * 100);

    // var hours = Math.floor((distanceLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distanceLeft % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distanceLeft % (1000 * 60)) / 1000);

    var element = document.querySelector('.determinate1');
    // var val = element.getAttribute("value");
    element.setAttribute("value", String(Number(result) + 1));
    console.log("incrementing value by 1, current value -  " + element.getAttribute("value"));
    setInterval(incrementPercentage, 1000);
}

setInterval(incrementPercentage, 1000);

addTaskBtn.addEventListener("click", function () {
    if (newtask.value == '' || priority.value == '' || progressStatus.value == '') {
        alert("please enter all values")
    } else {
        addTask();
    }
})