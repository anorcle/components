(function () {

    var contextMenu = document.getElementById('context-menu');

    document.getElementById('CM_cut-btn').addEventListener('click', function (event) {
        console.log(event, 'CM_cut-btn :- clicked');
    });
    document.getElementById('CM_copy-btn').addEventListener('click', function (event) {
        console.log(event, 'CM_copy-btn :- clicked');
    });
    document.getElementById('CM_paste-btn').addEventListener('click', function (event) {
        console.log(event, 'CM_paste-btn :- clicked');
    });
    document.getElementById('CM_insert-link-btn').addEventListener('click', function (event) {
        console.log(event, 'CM_insert-link-btn :- clicked');
    });
    document.getElementById('CM_insert-image-btn').addEventListener('click', function (event) {
        console.log(event, 'CM_insert-image-btn :- clicked');
    });

    function showContextMenu(event) {
        event.preventDefault();
        contextMenu.style.display = 'inline-flex';
        var clickX = event.clientX;
        var clickY = event.clientY;

        if (window.innerHeight >= clickY + contextMenu.offsetHeight && window.innerHeight >= contextMenu.offsetHeight) {
            contextMenu.style.top = clickY + 'px';
        } else if (clickY - contextMenu.offsetHeight >= 0) {
            contextMenu.style.top = (clickY - contextMenu.offsetHeight) + 'px';
        } else if(window.innerHeight >= contextMenu.offsetHeight) {
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
