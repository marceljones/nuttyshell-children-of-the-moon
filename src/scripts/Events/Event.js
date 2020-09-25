export const EventComponent = (eventObj) => {
    return `
    <div class="eventCardList">    
        <h4 id="eventTitle">${eventObj.name}</h4>
                <p id class="eventdate">${eventObj.date}</p>
                <p id class="eventLocation">${eventObj.location}</p>
                <p id class="eventHost">${eventObj.user.username}</p>
            <button id="deleteNote--${eventObj.id}">Delete</button>
    </div>
            `
}

