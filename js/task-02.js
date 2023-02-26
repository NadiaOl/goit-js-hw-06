// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newEl = document.createElement('li');

const makeLI = (ingredient) => `<li class="item">${ingredient}</li>`;

const listEl = document.querySelector('#ingredients');

const newMarkup = ingredients.map((ingredient) => makeLI(ingredient)).join('');

listEl.insertAdjacentHTML('afterbegin', newMarkup);
console.log(newMarkup);