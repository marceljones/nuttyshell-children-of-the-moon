import { editEvent, getSingleEvent } from "./EventDataProvider.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("saveDate--")) {
    const [prefix, id] = event.target.id.split("--");
    const locationTarget = document.querySelector("#eventLocation")
    const nameTarget = document.querySelector("#eventName")
debugger;
    const updatedEvent = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        name: document.querySelector(`#eventTitle--${id}`).value,
        date: document.querySelector(`#input-date--${id}`).value,
        location: document.querySelector(`#eventLocation--${id}`).value,
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

{/* <div class="eventCardList">    
        <h4 id="eventTitle--${eventObj.id}">${eventObj.name}</h4>
                <p id="eventdate--${eventObj.id}">${eventObj.date}</p>
                <p id="eventLocation--${eventObj.id}">${eventObj.location}</p>
                <p id="eventHost--${eventObj.id}">${eventObj.user.username}</p>
                <button id="weatherEvent--${eventObj.id}">Show Weather</button>
            ${showDelete(eventObj)}
    </div>
            ` */}