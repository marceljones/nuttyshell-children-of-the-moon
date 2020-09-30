import { getMessages, useMessages, deleteMessage, editMessage } from "./MessagesProvider.js"
import { messageEntryComponent } from "./Message.js"
// import {editSelected} from "./Message.js"

const contentTarget = document.querySelector("#messageIndiv")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("newMessage", ()=> {
    messageListComponent()
})

//display list of messages upon login
const render = message => {
    let HTMLArray = message.map(newMessage => {
        return messageEntryComponent(newMessage);
    })
    contentTarget.innerHTML = HTMLArray.join("");
}
//getting all the messages
export const messageListComponent =()=>{
    getMessages()
    .then(()=>{
        render(useMessages())
    })
}
//when delete button is selected
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteMessage-")) {
        const [prefix, id] = e.target.id.split("-")
        deleteMessage(id).then(
            () => {
                const updatedMessages = useMessages()
                render(updatedMessages)
            })
        }
    })
    
    
    //when edit button is selected
    eventHub.addEventListener("click", e =>{
        if (e.target.classList[0] === "editMessage-"){
            const listOfMessages = useMessages()
            const messageToEdit = listOfMessages.find(message => {
                const [buttonType, buttonNum] = click.target.id.split("-")
                return parseInt(buttonNum) === message.id
            })
            editMessageEntry(messageToEdit)
            window.alert = "#messageCard"
        }
        
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "saveButton"){
        
        const editedMessage = {
            id: document.querySelector("#hiddenId").nodeValue, //check this
            date:document.querySelector(".messages--date").value,
            message: document.querySelector(".message").value,
            user: document.querySelector("messages--user").value
        }
        editMessage(editedMessage);
    }
})

const editMessageEntry = (entry) => {
    const contentTarget = document.querySelector("#messageInput")
    contentTarget.innerHTML = `
        <form>
        <input value="${entry.id}" id="hiddenId" hidden>
        <input type="text" name="message" id="message">${entry.entry}<?textarea>
        <button type="button" id="updateMessage">Update Message</button>
        </form>
    `
}
