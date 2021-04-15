const allCategories = document.querySelectorAll('.item');
console.log(`В списке ${allCategories.length} категории.`);

const titles = allCategories.forEach(el => {
    const categoryEl = el.firstElementChild;
    console.log(`Категория: ${categoryEl.textContent}`)

    const numberOfElements = el.lastElementChild.children;
    console.log(`Количество элементов: ${numberOfElements.length}`);
})
