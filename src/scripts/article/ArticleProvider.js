const articlelURL = "http://localhost:8088/articles";

let articles = [];

const eventHub = document.querySelector(".main");
const dispatchStateChangeEvent = () => {
    const articleStateChangeEvent = new CustomEvent("articlelStateChanged");
    eventHub.dispatchEvent(articleStateChangeEvent);
};

export const getArticles = () => {
    return fetch(articlelURL)
        .then(response => response.json())
        .then(parsedRes => {
            articles = parsedRes;
        });
};

export const useArticles = () => {
    return articles.slice();
};

export const saveArticle = newArticleObj => {
    return fetch(articlelURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticleObj)
        })
        .then(() => {
            getArticles();
        })
        .then(dispatchStateChangeEvent);
};

export const deleteArticle = id => {
    return fetch(`http://localhost:8088/articles/${id}`, {
            method: "DELETE"
        })
        .then(getArticles)
        // .then(dispatchStateChangeEvent);
};