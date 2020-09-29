let events = []

const eventHub = document.querySelector('.main')

const dispatchStateChangeEvent = () => {
    const eventStateChanged = (new CustomEvent("eventStateChanged"))

    eventHub.dispatchEvent(eventStateChanged)
}

export const getEvents = () => {
    return fetch (`http://localhost:8088/events?_expand=user`) 
    .then(response => response.json())  
    .then(eventsArray => {
        events = eventsArray
    })
}

// export const getTasks = () => {
//     return fetch(`http://localhost:8088/tasks?userId=${parseInt(sessionStorage.getItem("activeUser"))}`) //fetch tasks 

export const useEvents = () => {
    return events.slice()
}

export const saveEvent = (newEventObj) => {
    fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEventObj)
    })
    .then(dispatchStateChangeEvent)
}

export const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
}

export const editEvent = (message, eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message)
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
}

export const getSingleEvent = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`)
    .then(response => response.json())
}