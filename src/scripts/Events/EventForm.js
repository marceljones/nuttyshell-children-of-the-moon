import { getEvents, saveEvent, useEvents } from "./EventDataProvider.js"

const eventHub = document.querySelector('.main')

eventHub.addEventListener("click", event => {
    if (event.target.id === "saveEvent") {
        const nameTarget = document.querySelector("#eventName")
        const dateTarget = document.querySelector("#eventDate")
        const locationTarget = document.querySelector("#eventLocation")

        const newNote = {
            name: nameTarget.value,
            date: dateTarget.value,
            location: locationTarget.value,
            // userID: 
        }

        saveEvent(newNote)
    }
})

export const EventForm = () => {
    const contentTarget = document.querySelector("#eventForm")
    contentTarget.innerHTML = `
    <form action "">
        <fieldset>
            <label for="eventName">Event Name</label>
            <input type="text" name="eventName" id="eventName">
        </fieldset>
        <fieldset>
            <label for="eventDate">Event Date</label>
            <input type="date" Date="eventDate" id="eventDate">
        </fieldset>
        <fieldset>
            <label for="eventLocation">Event Location</label>
            <input type="text" Location="eventLocation" id="eventLocation">
        </fieldset>
        <button type="button" id="saveEvent">Save Event</button>
    </form>`
}

// "id": 1,
// "userId": 1,
// "name": "here's the event", 
// "date": "10/31/2020",
// "location": "123 road"

export const EventEntryForm = () => {
    getEvents()
    .then(() => {
        const allEvents = useEvents()
        EventForm(allEvents)
    })
}