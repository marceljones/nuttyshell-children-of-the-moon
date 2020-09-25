export const Article = articleObj => {
    return `
        <div class="article-box">
            <h3>${articleObj.articles.title}</h3>
            <p>${articleObj.articles.synopsis}</p> 
            <p>${articleObj.articles.url}</p> 
            <p>${articleObj.articles.date}</p> 
        </div>
        <div>
            <button class="btn-delete" id="deleteArticle--${articleObj.articles.id}">Delete Article</button>
        </div>
    `;
};