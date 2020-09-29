// html representation of each task once posted 

import {getTasks} from "./TaskDataProvider.js"

const eventHub = document.querySelector(".main")
const fieldTarget = document.querySelector(".taskContent")


eventHub.addEventListener( 'change', event => {
    if(event.checked) {
      const customEvent2 = new CustomEvent("checkboxComplete", {
        detail: {
          checked: true 
        }
      })
    // checkTheBox()
      eventHub.dispatchEvent(customEvent2)
    } 
    getTasks()
}
);


// ?????
// const checkTheBox = () => {
//   if (document.querySelector('#myCheck').checked = false) {
//     document.querySelector('.theCheckbox').style.visibility = 'visible';
//   } else {
//       document.querySelector('.theCheckbox').style.visibility = 'hidden';
//     }
// }
  

export const TaskInputField = (taskTaco) => {
    return `
    <section id="entry--${taskTaco.id}" class="taskPost">
        <p>Task: ${taskTaco.task}</p>
        <p>Complete By: ${taskTaco.completeBy}</p>
        <p><div class="theCheckbox">
        <input type="checkbox" id="myCheck--${taskTaco.id}">
        <label for="myCheck--${taskTaco.id}">Completed Task?</label>
      </div>
      <div>
        <button type="deleteButton" id="deleteTask--${taskTaco.id}">Delete!</button>
      </div> </p>
        </section>
    `
}

