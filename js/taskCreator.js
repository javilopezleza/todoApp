export function createTaskElement(task, list) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Task text
    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "flex-grow-1";
    if (task.completed) span.classList.add("text-decoration-line-through", "text-muted");

    // Complete Button
    const completeButton = document.createElement("button");
    completeButton.className = "btn btn-success btn-sm text-dark fw-bold ms-2";
    const completeIcon = document.createElement("i");
    completeIcon.className = "bi bi-check-circle fw-bold";
    completeButton.appendChild(completeIcon);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm ms-2";
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "bi bi-trash text-dark fw-bold";
    deleteButton.appendChild(deleteIcon);

    // Build li
    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
}
