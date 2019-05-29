import { html, render } from 'https://unpkg.com/lit-html?module';

function toggleMenu() {
    // `this` refers to the hamburger-menu div
    this.classList.toggle("change");
}

function setClickedCardState(data) {
    sessionStorage.setItem('data', JSON.stringify(data));
}


window.onload = function() {
    /* Register event listeners */
    document.getElementsByClassName("hamburger-menu")[0].addEventListener("click", toggleMenu, false);


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


    const posts = document.getElementById("posts")
    render(cardContainerTemplate(cards), posts);
}


function getCardTemplate() {
    return (data) => html `
        <div class="card clickable" @click=${setClickedCardState(data)} onclick="location.href='post.html'">
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