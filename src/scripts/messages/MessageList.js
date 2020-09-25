import { getMessages, useMessages } from "./MessagesProvider.js"
import { messageEntryComponent } from "./Message.js"

const contentTarget = document.querySelector("#messageIndiv")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("newMessage", ()=> {
    messageListComponent()
})

const render = (message) => {
    let HTMLArray = message.map(newMessage => {
        return messageEntryComponent(newMessage);
    })
    contentTarget.innerHTML = HTMLArray.join("");
}

export const messageListComponent =()=>{
    getMessages()
    .then(()=>{
        render(useMessages())
    })
}
