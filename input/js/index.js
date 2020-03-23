let all = document.querySelectorAll('.in');
[...all].forEach(elm => elm.addEventListener('focus', (eve) => {
    console.log('focused', eve.target);
}));
[...all].forEach(elm => elm.addEventListener('blur', (eve) => {
    console.log('blured', eve.target);
}))

document.getElementById('input1').addEventListener('focus', (eve) => {
    let label = eve.target.parentElement.children[1];
    label.classList.add('float');
});

document.getElementById('input1').addEventListener('blur', (eve) => {
    if(event.target.value === '') {
        let label = eve.target.parentElement.children[1];
        label.classList.remove('float');
    }
});