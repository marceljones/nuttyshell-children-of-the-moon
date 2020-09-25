import { getTasks, saveTasks } from "./TaskDataProvider.js";
/*
	A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector("main");
const contentTarget = document.querySelector(".taskCard");


eventHub.addEventListener("click", clickEvent => {
	if(clickEvent.target.id === "recordJournal"){
        const entryDate = document.querySelector("#journalDate")
        const entryConcept = document.querySelector("#conceptsText")
        const entryEntry = document.querySelector("#textarea")
        const entryMood =  document.querySelector("#mood")
        
        
            const newEntry = {
                date: entryDate.value,
                concept: entryConcept.value,
                entry: entryEntry.value,
                moodId: parseInt(entryMood.value)
            }

            saveEntry(newEntry)
	}
})



//actual form on html to create a new task 
const render = () => {
    contentTarget.innerHTML = `
    <section id="form">
    <form action="">
        <fieldset>
            <label for="journalDate">date of entry</label>
            <input type="date" name="journalDate" id="journalDate">          
        </fieldset>
        <fieldset>
            <label for="conceptsText">concepts covered</label>
            <input type="concept" name="conceptsText" id="conceptsText">         
        </fieldset>
        <fieldset>
            <label for="entryText">journal entry</label>
            <textarea id="textarea"></textarea>     
        </fieldset>
        <button id="recordJournal" type="button">record journal :)</button>           
    </form>
</section>
    `
}



export const TaskFormComponent = () => {
    getTasks()
    .then(() => {
        const allMoods = useMoods()
        render(allMoods)
    })
}