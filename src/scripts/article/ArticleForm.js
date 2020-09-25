import { getArticles, useArticles, saveArticle } from "./ArticleProvider.js";

const eventHub = document.querySelector(".main");
const contentTarget = document.querySelector("#articleCard");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "add--article") {
        const titleContent = document.querySelector("#article-title");
        const synopsisContent = document.querySelector("#article--synopsis");
        const urlContent = document.querySelector("#article--url");
        const dateContent = document.querySelector("#article-date");

        const newArticle = {
            title: titleContent.value,
            synopsis: synopsisContent.value,
            date: urlContent.value,
            mood: dateContent.value
        };
        saveArticle(newArticle);
        render();
    }
});

const render = () => {
    contentTarget.innerHTML = `

    <form>
        
        
        <label for="title">Title</label>
        <input type="text" class="title" name="title" id="article-title">
        <label for="synopsis">Synopsis</label>
        <textarea type="text" name="synopsis" id="article--synopsis" cols="40" rows="5"></textarea>
        <label for="url">URL</label>
        <input type="url" class="url" name="url" id="article--url">
        <label for="date">Date</label>
        <input type="date" class="date" name="date" id="article-date">
        
        <button id="add--article" type="button">Add New Article</button>
        
            
    </form>

    `;
};

export const ArticleForm = () => {
    getArticles().then(() => {
        render(useArticles());
    });
};