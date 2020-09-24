export const EventComponent = (eventObj) => {
    return `
    <h3>Event Hub</h3>
        <h4 id="eventTitle">${eventObj.name}</h4>
            <p id class="eventdate">${eventObj.date}</p>
            <p id class="eventLocation">${eventObj.location}</p>
            <p id class="eventHost">${eventObj.user.username}</p>
    `
}

