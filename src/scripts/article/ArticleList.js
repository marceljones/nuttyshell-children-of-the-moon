import { useArticles, getArticles, deleteArticle } from "./ArticleProvider.js";
import { Article } from "./Article.js";

const eventHub = document.querySelector(".main");
const contentTarget = document.querySelector("#article--list");

export const ArticleList = () => {
    getArticles().then(() => {
        addArticlesToDom(useArticles());
    });
};

const addArticlesToDom = articleArray => {
    let HTMLArray = articleArray.map(articleObj => {
        return Article(articleObj);
    });
    contentTarget.innerHTML = HTMLArray.join("");
};

eventHub.addEventListener("articlelStateChanged", () => {
    ArticleList();
});

eventHub.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id.startsWith("deleteArticle--")) {
        const [prefix, id] = event.target.id.split("--");
        deleteArticle(id);
    }
});