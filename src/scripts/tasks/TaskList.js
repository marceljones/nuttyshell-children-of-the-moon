import { useTasks, getTasks, deleteTask} from "./TaskDataProvider.js";
import { TaskInputField } from "./Task.js";

// DOM reference to where all tasks will be rendered
const taskLog = document.querySelector("#taskList")
const eventHub = document.querySelector(".main")
const clickedBox = document.querySelector(".myCheck")

const render = (taskTaco) => {
    let HTMLarray = taskTaco.map((word) => TaskInputField(word))
    taskLog.innerHTML = HTMLarray.join("")
}


export const TaskListComponent = () => {
    // Use the task data from the data provider component
    getTasks()
        .then(() => {
            const tasks = useTasks()
            render(tasks)
        })
    }

//save button listener
eventHub.addEventListener("savedTask", event => {
    TaskListComponent()
})

//checkbox listener
// eventHub.addEventListener("checkboxComplete", event => {
//     clickedBox = event.detail.isCompleted === true
// })

//delete task listener
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = event.target.id.split("--");
        deleteTask(id);
    }
});