import { EventComponent } from "./Event.js"
import { getEvents, useEvents } from "./EventDataProvider.js"

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