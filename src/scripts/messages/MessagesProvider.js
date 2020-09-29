//User wants to enter in a chat message when logged on
    //New message text input
    //Populate in the chat area with username
//Viewing all chats with most recent at the bottom
//Delete a previous message & remove from the database and UI

let messages = [];

const eventHub = document.querySelector(".main")

const dispatchStateChangeEvent = () =>{
    const messageStateChangedEvent = new CustomEvent("newMessage")
    eventHub.dispatchEvent(messageStateChangedEvent)
}

//Get all messages from API

export const getMessages = () => {
    return fetch ("http://localhost:8088/messages?_expand=user")
    .then(response => response.json())
    .then(parsedMessages => {
        messages = parsedMessages
    })
}

//use the messages sorted by date
export const useMessages = () => {
    return messages.slice();
}

//save a new message

export const saveMessage = messageObj => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    })
    .then(dispatchStateChangeEvent)
}


//delete message

export const deleteMessage = deletedMessage => {
    return fetch (`http://localhost:8088/messages/${deletedMessage}`,{
        method: "DELETE"
    })
    .then(dispatchStateChangeEvent)
}


//edit message
export const editMessage = (messageObj, messageId) => {
    return fetch (`http://localhost:8088/messages${messageId}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
})
        .then(getMessages)
}
