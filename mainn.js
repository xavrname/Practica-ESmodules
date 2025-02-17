import { TaskManager } from "./taskmanager.js";

const taskInput = document.getElementById('taskInput');
const addTaskButtom = document.getElementById('addTaskButton');

addTaskButtom.addEventListener('click', () => {
    const taskDescription = taskInput.value;
    if(taskDescription){
        TaskManager.addTask(taskDescription);
        taskInput.value = '';
    }
});