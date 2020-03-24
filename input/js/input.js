/**
 * <div class="input-wrapper">
 *     <input type="text" class="input" id="input1" data-label="Name">
 *     <label for="input1" id="label1" class="label">Name</label>
 * </div>
 * 
 */

function getInputElement({type, id, label}) {

    let inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');

    let input = document.createElement('input');
    input.classList.add('input');
    input.type = type;
    input.id = id || type;

    let labelElm = document.createElement('label');
    labelElm.classList.add('label');
    labelElm.innerText = label || type;
    labelElm.htmlFor = input.id;
    console.log(labelElm);
    

    if (type.toLowerCase() === 'date') {
        labelElm.classList.add('float');
    } else {
        input.addEventListener('focus', function (eve) {
            labelElm.classList.add('float');
        })

        input.addEventListener('blur', function (eve) {
            if(input.value === '') {
                labelElm.classList.remove('float');
            }
        })
    }

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(labelElm);
    return inputWrapper;
}