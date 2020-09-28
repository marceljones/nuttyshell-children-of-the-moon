let tasks = []

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".taskCard")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("savedTask")
    eventHub.dispatchEvent(taskStateChangedEvent)
}


export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks?userId=${parseInt(sessionStorage.getItem("activeUser"))}`) //fetch tasks
    .then(response => response.json())
    .then(taskArray => {
        tasks = taskArray
    })
}


export const useTasks = () => {
    return tasks.slice()
}


export const saveTasks = (taskTaco) => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(taskTaco)
    })
    // .then (() => {
    //     return getTasks()
    // })
    .then(dispatchStateChangeEvent)
}



export const deleteTask = id => {
    return fetch(`http://localhost:8088/articles/${id}`, {
            method: "DELETE"
        })
        .then(getTasks)
        .then(dispatchStateChangeEvent);
};