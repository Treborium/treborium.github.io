import { html, render } from 'https://unpkg.com/lit-html?module';

function toggleMenu(x) {
    x.classList.toggle("change");
}

window.addEventListener("DOMContentLoaded", function() {
    const cardTemplate = getCardTemplate();
    const cardContainerTemplate = getCardContainerTemplate();

    let data = {
        title: "My Amazing Title!",
        tags: "Python",
        date: "21. May 2019"
    };

    let data2 = {
        title: "Another Title!",
        tags: "javascript",
        date: "24. May 2019"
    };

    const cards = [];
    cards.push(cardTemplate(data))
    cards.push(cardTemplate(data2))


    posts = document.getElementById("posts")
    render(cardContainerTemplate(cards), posts);
}, false);

function getCardTemplate() {
    return (data) => html `
        <div class="card clickable" id="card-template">
            <div class="post-left">
                <img class="thumbnail" src="img/dummy.png" alt="thumbnail" />
            </div>
            <div class="post-right">
                <h2 class="post-title">${data.title}</h2>
                <div class="post-right-bottom">
                    <h3 class="post-meta-info">${data.tags} - ${data.date}</h3>
                </div>
            </div>
        </div>
    `;
}

function getCardContainerTemplate() {
    return (cards) => html `
        <div class="blog-posts">
            ${cards.map((card) => html`${card}`)}
        </div>`;
}