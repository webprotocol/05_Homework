function viewPage(src) {
    event.preventDefault();
    html5.src=src;
}
function frameLoad() {
    html5.height = html5.contentWindow.document.body.scrollHeight;
}