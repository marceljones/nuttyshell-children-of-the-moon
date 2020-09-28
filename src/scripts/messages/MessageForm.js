import { getMessages, useMessages, saveMessage } from "./MessagesProvider.js"

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector("#messageInput")



eventHub.addEventListener("click", e => {

    if (e.target.id === "submitButton"){
        const messageContent = document.querySelector("#text")
        const taco = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            message: messageContent.value,
            date: Date.now()        
        }
        
        
        saveMessage(taco);
    }})

const render = () => {
    contentTarget.innerHTML = `
    <form>
    <fieldset>
        <h3>New Message</h3>
        <textarea id="text" placeholder="New Message Here"></textarea>
    </fieldset>
    <button type="button" class="button" id="submitButton">Submit</button>
    </form>
    `
}

export const messageForm = () => {
    getMessages()
    .then(() => {
        const theMess = useMessages()
        render(theMess)
    })
}