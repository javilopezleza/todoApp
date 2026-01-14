export function handleTaskStatus(tasks, list) {
    list.addEventListener("click", (e) => {
        const li = e.target.closest("li.list-group-item");
        if (!li) return;

        const index = Array.from(list.children).indexOf(li);

        // Delete task
        if (e.target.closest(".btn-danger")) {
            li.remove();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Complete task
        if (e.target.closest(".btn-success")) {
            const span = li.querySelector("span");
            span.classList.toggle("text-decoration-line-through");
            span.classList.toggle("text-muted");

            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });
}
