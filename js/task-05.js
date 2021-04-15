const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChang);

function onInputChang(event) {
    if (event.currentTarget.value !== '' && event.currentTarget.value !== ' ') {
    nameRef.textContent = event.currentTarget.value;
} else {
    nameRef.textContent = 'незнакомец';
}
};

