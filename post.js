var md = new Remarkable();

fetch("posts/post1.md")
    .then(response => response.text())
    .then(text => document.getElementById("post-content").innerHTML = md.render(text));