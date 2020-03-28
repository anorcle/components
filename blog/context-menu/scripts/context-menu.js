(function () {

    var contextMenu = document.getElementById('context-menu');
    function showContextMenu(event) {
        event.preventDefault();
        contextMenu.style.display = 'inline-flex';
        var clickX = event.clientX;
        var clickY = event.clientY;

        if (window.innerHeight >= clickY + contextMenu.offsetHeight && window.innerHeight >= contextMenu.offsetHeight) {
            contextMenu.style.top = clickY + 'px';
        } else if (clickY - contextMenu.offsetHeight >= 0) {
            contextMenu.style.top = (clickY - contextMenu.offsetHeight) + 'px';
        } else if (window.innerHeight >= contextMenu.offsetHeight) {
            contextMenu.style.top = 0;
        } else {
            //...
            console.log('think');
        }

        if (window.innerWidth >= clickX + contextMenu.offsetWidth && window.innerWidth >= contextMenu.offsetWidth) {
            contextMenu.style.left = clickX + 'px';
        } else if (clickX - contextMenu.offsetWidth >= 0) {
            contextMenu.style.left = (clickX - contextMenu.offsetWidth) + 'px';
        } else if (window.innerWidth >= contextMenu.offsetWidth) {
            contextMenu.style.left = 0;
        } else {
            //...
            console.log('think');
        }

    }
    function hideContextMenu() {
        contextMenu.style.display = 'none';
    }

    window.addEventListener('blur', hideContextMenu);
    document.addEventListener('mousedown', hideContextMenu);
    document.addEventListener('contextmenu', showContextMenu);
})()
