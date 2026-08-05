const task = document.querySelector("#task");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {

    list.innerHTML = "";

    tasks.forEach((item, index) => {

        const li = document.createElement("li");
        li.textContent = item;

        li.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        });

        list.appendChild(li);

    });
}

add.addEventListener("click", () => {

    const value = task.value.trim();

    if (value === "") return;

    tasks.push(value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    task.value = "";

    showTasks();

});

showTasks();