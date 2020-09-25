export const Article = articleObj => {
    return `
        <div class="article-box">
            <h3>${articleObj.title}</h3>
            <p>${articleObj.synopsis}</p> 
            <p><a href="${articleObj.url}">${articleObj.url}</a></p> 
            <p>${articleObj.date}</p> 
            <button class="btn-delete" id="deleteArticle--${articleObj.id}">Delete Article</button>
        </div>
        <div>
           
        </div>
    `;
};