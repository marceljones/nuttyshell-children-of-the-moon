import { getTasks, saveTasks, useTasks } from "./TaskDataProvider.js";
/*
	A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".main");
const contentTarget = document.querySelector("#taskForm");


eventHub.addEventListener("click", clickEvent => {
	if(clickEvent.target.id === "saveTask"){
        // const userId = document.querySelector("")
        const taskName = document.querySelector("#taskName")
        const taskCompleteDate = document.querySelector("#taskCompleteDate")
        const checked = document.querySelector("#completeButton")

            const newTask = {
                userId: parseInt(sessionStorage.getItem("activeUser")), 
                task: taskName.value,
                completeBy: taskCompleteDate.value,
                checked: false
            }

            saveTasks(newTask)
	}
})





// field: enter task name x 
// field: expected completion date
// checkbox: indicating task is complete
// --- upon clicking, task clears from DOM & changes to complete
// --- or clicling delete, task deletes from api.  


//actual form on html to create a new task 
const render = () => {
    contentTarget.innerHTML = `
    <section id="taskForm">
    <form>
            <label for="taskName">Task</label><br>
            <input type="name" name="taskName" id="taskName"><br>      
            <label for="taskCompleteDate">Expected Completion Date:</label><br>
            <input type="date" name="taskCompleteDate" id="taskCompleteDate"><br>    
        <button id="saveTask" type="button">Save Task</button>           
    </form>
    </section>
    `
}




export const TaskFormComponent = () => {
    getTasks()
    .then(() => {
        const allTasks = useTasks()
        render(allTasks)
    })
}
