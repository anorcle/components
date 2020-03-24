/**
 * <div class="input-container">
 *     <input type="text" class="input" id="input1" data-label="Name">
 *     <label for="input1" id="label1" class="label">Name</label>
 * </div>
 * 
 */

function Input(type, label) {
    this.type = type;
    this.label = label;
}
Input.prototype.getElement = function (id) {

    let inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    let input = document.createElement('input');
    input.classList.add('input');
    input.type = this.type;
    input.id = id || 'in-'+ (Input.num = Input.num || 0 + 1).toString();

    let label = document.createElement('label');
    label.classList.add('label');
    label.innerText = this.label || this.type;
    label.htmlFor = input.id;
    console.log(label);
    

    if (this.type.toLowerCase() === 'date') {
        label.classList.add('float');
    } else {
        input.addEventListener('focus', function (eve) {
            label.classList.add('float');
        })

        input.addEventListener('blur', function (eve) {
            if(input.value === '') {
                label.classList.remove('float');
            }
        })
    }

    inputContainer.appendChild(input);
    inputContainer.appendChild(label);
    return inputContainer;
}