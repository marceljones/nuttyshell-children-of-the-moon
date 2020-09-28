// html representation of each task once posted 

import {getTasks} from "./TaskDataProvider.js"

const eventHub = document.querySelector(".main")
const fieldTarget = document.querySelector(".taskContent")


eventHub.addEventListener( 'change', event => {
    if(event.checked) {
      const customEvent2 = new CustomEvent("checkboxComplete", {
        detail: {
          isCompleted: true 
        }
      })
      eventHub.dispatchEvent(customEvent2)
    } 
    getTasks()
});




export const TaskInputField = (taskTaco) => {
    return `
    <section id="entry--${taskTaco.id}" class="taskPost">
        <p>Task: ${taskTaco.task}</p>
        <p>Complete By: ${taskTaco.completeBy}</p>
        <p><div>
        <input type="checkbox" id="myCheck--${taskTaco.id}">
        <label for="completed">Completed Task?</label>
      </div>
      
      <div>
        <button type="deleteButton" id="deleteTask--${taskTaco.id}">Delete!</button>
      </div> </p>
        </section>
    `
}
