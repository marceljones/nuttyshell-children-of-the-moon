import { EventComponent } from "./Event.js"
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