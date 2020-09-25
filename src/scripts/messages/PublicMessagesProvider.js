//User wants to enter in a chat message when logged on
    //New message text input
    //Populate in the chat area with username
//Viewing all chats with most recent at the bottom
//Delete a previous message & remove from the database and UI

let messages = []

const dispatchStateChangeEvent = () =>{
    const messageStateChangedEvent = new CustomEvent("newMessage")
    eventHUb.dispatchEvent(messageStateChangedEvent)
}

//Get all messages from API

export const getMessages = () => {
    return fetch ("http://localhost:8088/messages")
    .then(response => response.json())
    .then(parsedMessages => {
        messages = parsedMessages
    })
}

//use the messages sorted by date

export const useMessages = () => {
    const sortDate = messages.sort(
        (nextEntry, currentEntry) => 
        Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortDate
}

//save a new message

export const saveMessage = messageObj => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify
    })
}