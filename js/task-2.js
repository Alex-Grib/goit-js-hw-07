const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListEl = document.querySelector('ul#ingredients');
const ingredientEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  return liEl;
});
ingredientsListEl.append(...ingredientEl);