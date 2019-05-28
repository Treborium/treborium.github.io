var md = new Remarkable();

fetch("posts/post1.md")
    .then(response => response.text())
    .then(text => document.body.innerHTML = md.render(text));