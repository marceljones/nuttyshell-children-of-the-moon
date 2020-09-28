let tasks = []

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".taskCard")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("savedTask")
    eventHub.dispatchEvent(taskStateChangedEvent)
}


export const getTasks = () => {
    const active = parseInt(sessionStorage.getItem("activeUser"))
    return fetch(`http://localhost:8088/tasks?userId=${active}`)
    
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
    
    .then(dispatchStateChangeEvent)
}



export const deleteTask = id => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE"
        })
        .then(getTasks)
        .then(dispatchStateChangeEvent);
};



export const editTask = (taskObj, id) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObj)
    })
      .then(() => {
        getTasks(active)
      })
      .then(dispatchStateChangeEvent)
  }