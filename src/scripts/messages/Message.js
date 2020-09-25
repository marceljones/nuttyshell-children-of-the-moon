export const messageEntryComponent = (newMessage) => {
    return `
    <section id="messageInput">
    <div id="megassages--${newMessage.id}">
    <p><div class="message">${newMessage.message}</div>
    <div class="messages--user"> From: ${newMessage.userId}</div>
    <div class="messages--date">Date: ${newMessage.date}</div></p>

    </section>
    `
}