let md = new Remarkable();

window.onload = function() {
    fetch("posts/post1.md")
        .then(response => response.text())
        .then(text => document.getElementById("post-content").innerHTML = md.render(text));

    let data = sessionStorage.getItem('data');
    console.log(data);

}