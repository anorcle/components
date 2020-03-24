document.getElementById('input1').addEventListener('focus', function (eve) {
    let label = eve.target.parentElement.children[1];
    label.classList.add('float');
});

document.getElementById('input1').addEventListener('blur', function (eve) {
    if(event.target.value === '') {
        let label = eve.target.parentElement.children[1];
        label.classList.remove('float');
    }
});