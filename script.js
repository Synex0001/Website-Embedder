function embed() {
    var url = document.getElementById("url-input").value;
    var embedContainer = document.getElementById("embed-container");
    embedContainer.innerHTML = '<iframe src="' + url + '" frameborder="0"></iframe>';
}
