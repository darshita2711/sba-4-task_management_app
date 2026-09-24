let tasks = [];

let taskName = document.getElementById("taskName");
let categoryName = document.getElementById("category");
let deadline = document.getElementById("deadline");
let statusInput = document.getElementById("status");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

let statusFilter = document.getElementById("statusFilter");
let categoryFilter = document.getElementById("categoryFilter");


addTaskBtn.addEventListener("click", function () {

    if (!taskName.value || !categoryName.value || !deadline.value || !statusInput.value) {
        alert("Please enter all inputs!!");
        return;
    }
    else{
        let task = {
            taskName: taskName.value,
            category: categoryName.value,
            deadline: deadline.value,
            status: statusInput.value
        };
        tasks.push(task);
        checkOverdueTasks();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateCategoryFilter();
        displayTasks();

        taskName.value = "";
        categoryName.value = "";
        deadline.value = "";
        statusInput.value = "In Progress";
}
});

function displayTasks(taskArray = tasks) {
    taskList.innerHTML = "";
    for (let i = 0; i < taskArray.length; i++) {
        let task = taskArray[i];
        let li = document.createElement("li");
        li.textContent =task.taskName + " | " + task.category + " | " +task.deadline + " | ";

        let selectStatus = document.createElement("select");
        ["In Progress", "Completed", "Overdue"].forEach(function (statOption) {
            const option = document.createElement("option");
            option.value = statOption;
            option.textContent = statOption;
            if (task.status === statOption) {
                option.selected = true;
            }
            selectStatus.append(option);
        });
        selectStatus.addEventListener("change", function () {
            task.status = selectStatus.value;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
        li.appendChild(selectStatus);
        taskList.appendChild(li);}
}

function checkOverdueTasks() {
    let today = new Date();
    for (let i = 0; i < tasks.length; i++) {
        let taskDeadline = new Date(tasks[i].deadline);
        if (taskDeadline < today && tasks[i].status === "In Progress") {
            tasks[i].status = "Overdue";
        } }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function updateCategoryFilter() {
    categoryFilter.innerHTML ='<option value="All">All Categories</option>';
    for (let i = 0; i < tasks.length; i++) {
        let option = document.createElement("option");
        option.value = tasks[i].category;
        option.textContent = tasks[i].category;
        categoryFilter.appendChild(option);
    }
}

function filterTasks() {
    let selectedStatus = statusFilter.value;
    let selectedCategory = categoryFilter.value;

    let filteredTasks = tasks.filter(function (task) {
        let statusMatches =selectedStatus === "All" ||task.status === selectedStatus;
        let categoryMatches = selectedCategory === "All" ||task.category === selectedCategory;
        return statusMatches && categoryMatches;
    });

    displayTasks(filteredTasks);
}
statusFilter.addEventListener("change", filterTasks);
categoryFilter.addEventListener("change", filterTasks);
