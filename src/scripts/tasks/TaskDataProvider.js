let tasks = []
const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".taskCard")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("savedTask")
    eventHub.dispatchEvent(taskStateChangedEvent)
}

export const getTasks = () => {
    return fetch("http://localhost:8088/tasks") //fetch tasks
    .then(response => response.json())
    .then(taskArray => {
        tasks = taskArray
    })
}

export const useTasks = () => {
    const sortedByDate = tasks.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveTasks = (taskTaco) => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(taskTaco)
    })
    .then(dispatchStateChangeEvent)
}