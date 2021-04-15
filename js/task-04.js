const counterValueRef = document.querySelector('#value');
// console.log("counterValue", counterValue);
const btnDecrement = document.querySelector('[data-action="decrement"]');
// console.log("btnDecrement", btnDecrement);
const btnIncrement = document.querySelector('[data-action="increment"]');
// console.log("btnIncrement", btnIncrement);

btnDecrement.addEventListener('click', () => decrement());
btnIncrement.addEventListener('click', () => increment());

let counterValue = 0;

function decrement() {
    counterValue -= 1;
    return counterValueRef.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    return counterValueRef.textContent = counterValue;
};
