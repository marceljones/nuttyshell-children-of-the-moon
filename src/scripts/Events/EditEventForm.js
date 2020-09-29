import { editEvent, getSingleEvent, useEvents } from "./EventDataProvider.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("saveDate--")) {
    const [prefix, id] = event.target.id.split("--");
    
    const eventArray = useEvents().find(taco => taco.id === parseInt(id))

    const updatedEvent = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        name: eventArray.name,
        date: document.querySelector(`#input-date--${id}`).value,
        location: eventArray.location,
        id: id,
    }
        
    editEvent(updatedEvent, parseInt(id))
}
})

export const editQuantityForm = (eventId) => {
    const event = getSingleEvent(parseInt(eventId))
        .then((responseDate) => {
            document.querySelector(`#eventdate--${eventId}`).innerHTML = `
    <input type="hidden" value="${responseDate.id} id="edit--APIEvent">
    <input type="date" Date="eventDate" id="input-date--${eventId}" value="${responseDate.date}"/>
    <button type="button" id="saveDate--${eventId}">Save</button>
    `
        })
    //     .then((responseLocation) => {
    //         document.querySelector(`#eventLocation--${eventId}`).innerHTML = `
    // <input type-"hidden" value="${responseLocation.id} id="edit--APIEvent">
    // <input id="input-location--${eventId}" value="${responseLocation.date}/>
    // <button type="button" id="savelocation--${eventId}">Save</button>
    // `
    //     })
}
