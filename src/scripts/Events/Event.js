const showDelete = (userObj) => {
    if (parseInt(sessionStorage.getItem("activeUser")) === userObj.userId){
        return `
        <button id="deleteNote--${userObj.id}">Delete</button>
        <button id="editNote--${userObj.id}">Edit</button>
        `
    } else {
        return ""
    }
}

export const EventComponent = (eventObj) => {
    return `
    <div class="eventCardList">    
        <h4 id="eventTitle">${eventObj.name}</h4>
                <p id class="eventdate">${eventObj.date}</p>
                <p id class="eventLocation">${eventObj.location}</p>
                <p id class="eventHost">${eventObj.user.username}</p>
            ${showDelete(eventObj)}
    </div>
            `
}

