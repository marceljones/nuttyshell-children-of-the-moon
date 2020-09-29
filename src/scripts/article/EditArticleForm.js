const eventHub = document.querySelector(".main");

eventHub.addEventListener("click", e => {
    if (event.target.id.startsWith("saveTitle--")) {
        // "userId": 3,
        // "title": "What Scares Salem? October Without Halloween",
        // "synopsis": "Cities, towns, retailers and confectioners across the country are bracing themselves for more subdued festivities this year — if they have them at all.",
        // "url": "https://www.nytimes.com/2020/08/13/us/coronavirus-cancel-halloween.html",
        // "date": "2020-08-13",
        // "id": 6
        const [prefix, id] = event.target.id.split("--");
        const updatedArticle = {
            id: parseInt(document.querySelector("#edit--apiArticle").value),
            userId: parseInt(sessionStorage.getItem("activeUser").id),
            title: document.querySelector(`#title--${id}`).value
        };
    }
});

export const EditArticle = id => {
    const article = getAnArticle(parseInt(id)).then(res => {
        document.querySelector(`#title--${id}`).innerHTML = `
        <input type="hidden" value="${res.userId}" id="edit--apiArticle">
        <input  value="${res.title}}" id="title--${id}"/>
        <button id="saveTitle--${id}">Save</button>
        `;
    });
};