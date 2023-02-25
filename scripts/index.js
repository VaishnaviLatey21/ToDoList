const taskcontainer = document.querySelector(".container");
console.log(taskcontainer);
const taskList = document.querySelector(".grid-container");
const addTaskBtn = document.querySelector(".btn_add");
const newtask = document.querySelector("#newtask");
const priority = document.querySelector("#priority");
const progressStatus = document.querySelector("#progressStatus");
const closeBtn = document.querySelector(".btn_close");
const checkBox = document.querySelector("#checkbox");
const progressBar = document.querySelector('#progress');

function addTask() {
    var task = document.createElement('div');
    var box_container = document.createElement('div');
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    var taskContent = document.createElement('div');
    var priorityDiv = document.createElement('div');
    var inProgress = document.createElement('div');
    var btn_container = document.createElement('div');
    var close_btn = document.createElement('button');
    checkBox.checked = true; 
    taskContent.innerText = newtask.value;
    priorityDiv.innerText = priority.value;
    inProgress.innerText = progressStatus.value;
    close_btn.innerText = 'x';
    close_btn.style.display = 'block';
    close_btn.addEventListener('click', function() {
        taskcontainer.removeChild(task);
    });

    checkBox.addEventListener('click', function() {
        if(checkBox.checked == true){
            checkBox.checked = false
        }else{
            checkBox.checked = true
        }
    });
    // checkBox.style.display = 'block';

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

// var countDownDate = new Date("Feb 26, 2023 18:00:00");
// console.log(countDownDate);
// var startDate = new Date("Feb 24, 2023, 17:30:00");
// console.log(startDate);
// var distanceWhole = countDownDate - startDate;
// console.log(distanceWhole);

var countDownDate = new Date("Feb 26, 2023 18:00:00");
console.log(countDownDate);
var x = setInterval(function() {
    var now = new Date();
    console.log(now);
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // document.getElementById("progress").innerHTML = hours + "h "
    // + minutes + "m " + seconds + "s ";

    var element = document.querySelector('.grid-item2');
    element.setAttribute("value", "50%");
    var width = 1;
    element.style.width = width + "%";
    element.innerHTML = width + "%";

},1000);


addTaskBtn.addEventListener("click", function () {
    if (newtask.value == '' || priority.value == '' || progressStatus.value == '') {
        alert("please enter all values")
    } else {
        addTask();
    }
})