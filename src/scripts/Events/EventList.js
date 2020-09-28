import { EventComponent } from "./Event.js"
import { editEvent } from "./EventDataProvider.js"
import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("eventStateChanged", event => {
    EventList()
})

const render = arrayOfEvents => {
    const entryLog = document.querySelector("#eventList")
    let HTMLArray = arrayOfEvents.map(event => EventComponent(event))
    entryLog.innerHTML = HTMLArray.join("") 
}

export const EventList = () => {
    getEvents()
    .then(() => {
        render(useEvents())
    })
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteEvent(id).then(
           () => {
               const updatedEvents = useEvents()
               render(updatedEvents)
           }
       )
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [notUsed, entryId] = clickEvent.target.id.split("--")
        
        /*
            Let all other components know that the user chose
            to edit an entry, and attach data to the message
            so that any listeners know which entry should be
            edited.
        */
        const customEvent = new CustomEvent("eventEditChange", {
            detail: {
                JournalEntryId: entryId
            }
        })
        eventHub.dispatchEvent
    }
})
