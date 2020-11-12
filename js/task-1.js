const ulEl = document.querySelector('ul#categories')
const categoryEl = ulEl.querySelectorAll('li.item');
console.log(`В списке ${categoryEl.length} категории. `)
categoryEl.forEach(el => {
    console.log(`Категория:${el.firstElementChild.textContent}`)
    console.log(`Количество элементов:${el.lastElementChild.children.length}`)
})
