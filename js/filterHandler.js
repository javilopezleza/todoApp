export function setupFilters(tasks, filterButtons, list, createTaskElement) {

    function renderTasks(filter = "all") {
        list.innerHTML = "";
        tasks.forEach(task => {
            if (
                filter === "all" ||
                (filter === "completed" && task.completed) ||
                (filter === "pending" && !task.completed)
            ) {
                createTaskElement(task, list);
            }
        });
    }

    function setActiveFilter(button) {
        filterButtons.forEach(btn => {
            if (btn.id === "filter-all") btn.className = "btn btn-outline-primary";
            if (btn.id === "filter-completed") btn.className = "btn btn-outline-success";
            if (btn.id === "filter-pending") btn.className = "btn btn-outline-secondary";
        });

        if (button.id === "filter-all") button.className = "btn btn-primary";
        if (button.id === "filter-completed") button.className = "btn btn-success";
        if (button.id === "filter-pending") button.className = "btn btn-secondary";
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.id === "filter-all"
                ? "all"
                : btn.id === "filter-completed"
                    ? "completed"
                    : "pending";

            renderTasks(filter);
            setActiveFilter(btn);
        });
    });
}
