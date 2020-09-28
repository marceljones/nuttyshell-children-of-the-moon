import {editTask, getTasks} from "./TaskDataProvider.js"


export const EditTaskForm = (editTaco) => {
	//get latest userBrick info from DB
	const edit = getTasks(parseInt(editTaco))
      .then((response) => {
		//replace static quantity with inputs
        document.querySelector(`myCheck--${editTaco.id}`).innerHTML = `
          <input type="hidden" value="${response.editTaco.id}" id="edit--APIBrick">
          <input id="input-quantity--${editTaco}" value="${response.quantity}"/>
          <button id="saveQuantity--${editTaco}">Save</button>
        `
	  })
}