
//Event Listener for Delete Button

export const messageEntryComponent = (newMessage) => {
    return `
    <section id="singleMessage">
    <div id="messages--${newMessage.id}">
    <p><div class="message">${newMessage.message}</div>
    <div class="messages--user"> From: ${newMessage.user.username}</div>
    <div class="messages--date">Date: ${new Date(newMessage.date).toLocaleDateString('en-US')}</div></p>
    <button type="button" class="deleteButton" id="deleteMessage-${newMessage.id}">Delete Message</button> 

    </section>
    `
}

