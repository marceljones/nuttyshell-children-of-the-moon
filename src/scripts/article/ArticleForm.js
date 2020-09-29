import { messageListComponent } from "../messages/MessageList.js";
import { getArticles, useArticles, saveArticle } from "./ArticleProvider.js";

const eventHub = document.querySelector(".main");
const contentTarget = document.querySelector("#article--form");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "add--article") {
        const titleContent = document.querySelector("#article-title");
        const synopsisContent = document.querySelector("#article--synopsis");
        const urlContent = document.querySelector("#article--url");
        const dateContent = document.querySelector("#article-date");

        const newArticle = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            title: titleContent.value,
            synopsis: synopsisContent.value,
            url: urlContent.value,
            date: dateContent.value
        };
        saveArticle(newArticle);
        render();
    }
});

const render = () => {
    contentTarget.innerHTML = `
<<<<<<< HEAD

    <form>
        <fieldset>
        <p>
            <label for="title">Title</label>
            <input type="text" class="title" name="title" id="article-title"> 
        </p>
       <p>
            <label for="synopsis">Synopsis</label>
            <input type="text" name="synopsis" id="article--synopsis"></input>
        </p>
       <p>
            <label for="url">URL</label>
            <input type="url" class="url" name="url" id="article--url">
        </p>
        <p>
            <label for="date">Date</label>
            <input type="date" class="date" name="date" id="article-date">
        </p>
        <br>
=======
    
    <form id="articleformbox">
    <h2>New Article</h2><br>
             <label for="title">Title</label>
            <input type="text" class="title" name="title" id="article-title">
                <br>
            <label for="synopsis">Synopsis</label>
            <textarea type="text" name="synopsis" id="article--synopsis" cols="40" rows="5"></textarea>
                <br>
            <label for="url">URL</label>
            <input type="url" class="url" name="url" id="article--url">
                <br>
            <label for="date">Date</label>
            <input type="date" class="date" name="date" id="article-date">
            <br>
>>>>>>> master
        <button id="add--article" type="button">Add New Article</button> 
    </form>

    `;
};

export const ArticleForm = () => {
    getArticles().then(() => {
        render(useArticles());
    });
};