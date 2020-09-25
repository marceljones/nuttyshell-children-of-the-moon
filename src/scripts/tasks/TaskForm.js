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
        const isCompleted = document.querySelector("#completeButton")
        
            const newTask = {
                userId: parseInt(sessionStorage.getItem("activeUser")), 
                task: taskName.value,
                completeBy: taskCompleteDate.value,
                isCompleted: false
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
    <form action="">
        <fieldset>
            <label for="taskName">task name</label>
            <input type="name" name="taskName" id="taskName">          
        </fieldset>
        <fieldset>
            <label for="taskCompleteDate">expected completion date:</label>
            <input type="complete" name="taskCompleteDate" id="taskCompleteDate">         
        </fieldset>
        <button id="saveTask" type="button">save task</button>           
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
