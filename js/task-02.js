const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientsArrOfLi = ingredients.map(el => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = `${el}`;
    return ingredientEl;
});
console.log(ingredientsArrOfLi);

ingredientsRef.append(...ingredientsArrOfLi);