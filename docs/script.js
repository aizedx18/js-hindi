console.log("JS connected!");

const taskInput = document.querySelector("#input-id");
const addButton = document.querySelector("#button-id");
const taskList = document.querySelector("#ul-id");



addButton.addEventListener("click", function (event) {
    console.log("Button Clicked!");
    if (taskInput.value.trim() === "") {
        return;
    };


    const newTask = document.createElement("li");
    const delButton = document.createElement("button");
    const span = document.createElement("span");
    delButton.textContent = "Delete";

    span.textContent = taskInput.value.trim();
    newTask.append(span)
    newTask.append(delButton)
    taskList.append(newTask);
    const allTasks = taskList.querySelectorAll("li");
    taskInput.value = "";
    taskInput.focus();



    delButton.addEventListener("click", function (event) {
        newTask.remove()
    });


    const taskNames = [];



    allTasks.forEach(function (item) {
        const textName = item.querySelector("span").textContent;
        // console.log(item.querySelector("span").textContent);
        taskNames.push(textName);

    });

    console.log(taskNames);
    localStorage.setItem("tasks", JSON.stringify(taskNames));





});

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addButton.click()
    };
});



document.addEventListener("DOMContentLoaded", function (event) {

    const taskKey = JSON.parse(localStorage.getItem("tasks"))

    if (taskKey !== null) {
        
   

    taskKey.forEach(function (item) {
        const newTask = document.createElement("li");
        const spanCreate = document.createElement("span");
        spanCreate.textContent = item;
        newTask.append(spanCreate)
        taskList.append(newTask);

        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        newTask.append(delButton);


        delButton.addEventListener("click", function (event) {
            newTask.remove()
            const allTasks = taskList.querySelectorAll("li");
            console.log(allTasks.length);

            const taskNames = [];
            allTasks.forEach(function (item) {
                const textNames = item.querySelector("span").textContent;
                taskNames.push(textNames);
            });

            console.log(taskNames);
            localStorage.setItem("tasks", JSON.stringify(taskNames));
        });

    });

     }



});




