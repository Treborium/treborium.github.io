document.body.onload = listElements;

function listElements() {
	var link = document.createElement("a")
	link.href = "posts/sample.html";
	
	var content = document.createTextNode("Here is another link to the same post");
	link.appendChild(content);

	var links = document.getElementById("links");
	document.body.insertBefore(link, links);
}
