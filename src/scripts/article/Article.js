export const Article = articleObj => {
    return `
        <div class="article-box">
            <h3>${articleObj.title}</h3>
            <p>${articleObj.synopsis}</p> 
            <p><a href="${articleObj.url}">${articleObj.url}</a></p> 
            <p>${new Date(articleObj.date).toLocaleDateString("en-US")}</p> 
            <button class="btn-edite" id="editeArticle--${
              articleObj.id
            }">Edit</button>
            <button class="btn-delete" id="deleteArticle--${
              articleObj.id
            }">Delete</button>
        </div>
    `;
};