const onUserDash = userObj => {
    if (parseInt(sessionStorage.getItem("activeUser")) === userObj.userId) {
        return `

        <button class="btn-edite" id="editeArticle--${userObj.id}">Edit</button>
        <button class="btn-delete" id="deleteArticle--${userObj.id}">Delete</button>
        `;
    } else {
        return ``;
    }
};

export const Article = articleObj => {
    return `
        <div class="article-box">
            <h3>${articleObj.title}</h3>
            <p>${articleObj.synopsis}</p> 
            <p><a href="${articleObj.url}">${articleObj.url}</a></p> 
            <p>${new Date(articleObj.date).toLocaleDateString("en-US")}</p> 
            ${onUserDash(articleObj)}
        </div>
    `;
};