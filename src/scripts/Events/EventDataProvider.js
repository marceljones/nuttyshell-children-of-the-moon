let events = []

const eventHub = document.querySelector('.main')

const dispatchStateChangeEvent = () => {
    const eventStateChanged = (new CustomEvent("eventStateChanged"))

    eventHub.dispatchEvent(eventStateChanged)
}

export const getEvents = () => {
    return fetch ("http://localhost:8088/events?_expand=user") 
    .then(response => response.json())  
    .then(eventsArray => {
        events = eventsArray
    })
}

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