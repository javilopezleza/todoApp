import { createTaskElement } from "./taskCreator.js";
import { loadTasks } from "./taskLoader.js";
import { handleTaskStatus } from "./statusHandler.js";
import { setupFilters } from "./filterHandler.js";

// Get HTML elements
const input = document.querySelector("#create_task");
const list = document.querySelector(".list-group");
const button = document.querySelector("#add");
const filterButtons = document.querySelectorAll(".btn-group button");

// Retrieve data from localstorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Initialize app
loadTasks(tasks, list, input, button, createTaskElement, filterButtons);
handleTaskStatus(tasks, list);
setupFilters(tasks, filterButtons, list, createTaskElement);
