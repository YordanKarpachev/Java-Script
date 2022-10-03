function getArticleGenerator(articles) {
    let currentArticles = [...articles];
    let content = document.querySelector('#content');
    return function () {

        if (!currentArticles.length) {
            return;
        }

        let currentArticle = currentArticles.shift();
        content.innerHTML += `<article>${currentArticle}</article>`
    }
}
