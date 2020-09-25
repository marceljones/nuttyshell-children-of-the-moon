// html representation of each task once posted 

import {getTasks} from "./TaskDataProvider.js"

export const TaskInputField = (taskTaco) => {
    return `
    <section id="entry--${taskTaco.id}" class="taskPost">
        <p>task: ${taskTaco.task.value}</p>
        <p>complete by: ${taskTaco.completeBy.value}</p>
        <p><div>
        <input type="checkbox" id="completed" name="completed" value="completed">
        <label for="completed">completed task?</label>
      </div>
      <div>
        <button type="completed">Complete!</button>
      </div> </p>
        </section>
    `
}

