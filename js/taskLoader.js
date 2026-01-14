export function loadTasks(tasks, list, input, button, createTaskElement, filterButtons) {
    // Render tasks
    tasks.forEach(task => createTaskElement(task, list));

    // Add new task
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (!taskText) return;

        const task = { text: taskText, completed: false };
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        createTaskElement(task, list);
        input.value = "";

        // Show filters if hide
        filterButtons.forEach(btn => btn.classList.remove("invisible"));
    });
}
