const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === Number(event.target.getAttribute('data-length'))) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
    } else {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid');
    }
};