/**
 * <div class="input-container">
 *     <input type="text" class="input" id="input1" data-label="Name">
 *     <label for="input1" id="label1" class="label">Name</label>
 * </div>
 * 
 */

function getInputElement({type, id, label}) {

    let inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

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

    inputContainer.appendChild(input);
    inputContainer.appendChild(labelElm);
    return inputContainer;
}