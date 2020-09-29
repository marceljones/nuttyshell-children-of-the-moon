
const modify =(taco) => {
    if(parseInt(sessionStorage.getItem("activeUser")) === taco.userId) {
        return `
        <button type="button" class="deleteButton" id="deleteMessage-${taco.id}">Delete Message</button> 
        <button type="button" class="editButton" id="editMessage-${taco.id}">Edit Message</button> 
        `
    }else{
        return ""
    }
}

//original Message 
export const messageEntryComponent = (newMessage) => {
    return `
    <section id="singleMessage">
        <div id="messages--${newMessage.id}">
        <p><div class="message">${newMessage.message}</div>
        <div class="messages--user"> From: ${newMessage.user.username}</div>
        <div class="messages--date">Date: ${new Date(newMessage.date).toLocaleDateString('en-US')}</div></p>
        ${modify(newMessage)}
    </section>
    `
}