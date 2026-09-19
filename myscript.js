const tasktext = document.querySelector("#myinput");
const button = document.querySelector("#mybutton");
const container = document.querySelector("#container");

function render() {
    if (container.children.length === 0) {
        container.innerHTML = "<p>Список задач пустой</p>";
    }
}

button.addEventListener("click", () => {
    if (tasktext.value === "") return;

    const task = document.createElement("p");
    task.textContent = "* " + tasktext.value;

    task.addEventListener("click", () => {
        task.remove();
        render();
    });

    if (container.textContent === "Список задач пустой") {
        container.innerHTML = "";
    }
    container.append(task);
    tasktext.value = "";
});

render();
