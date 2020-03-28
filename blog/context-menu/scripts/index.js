console.log(true)
function removeSelection() {
    /**
     * copied from :- https://stackoverflow.com/a/3169849
     */
    if (window.getSelection) {
        if (window.getSelection().empty) {  // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {  // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) {  // IE?
        document.selection.empty();
    }
}

document.getElementById('CM_cut-btn').addEventListener('mousedown', function (event) {
    console.log(event, 'CM_cut-btn :- clicked');
    removeSelection();
});
document.getElementById('CM_copy-btn').addEventListener('mousedown', function (event) {
    console.log(event, 'CM_copy-btn :- clicked');
    removeSelection();
});
document.getElementById('CM_paste-btn').addEventListener('mousedown', function (event) {
    console.log(event, 'CM_paste-btn :- clicked');
    removeSelection();
});
document.getElementById('CM_insert-link-btn').addEventListener('mousedown', function (event) {
    console.log(event, 'CM_insert-link-btn :- clicked');
    removeSelection();
});
document.getElementById('CM_insert-image-btn').addEventListener('mousedown', function (event) {
    console.log(event, 'CM_insert-image-btn :- clicked');
    removeSelection();
});