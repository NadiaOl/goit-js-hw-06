function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// const inputEl = document.querySelector('#controls > input');
// const buttonCreate = document.querySelector('button[data-create]');
// const buttonDestroy = document.querySelector('button[data-destroy]');
// const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);

// buttonCreate.addEventListener('clik', (event) => {
//   const newBoxes = document.createElement('div');
//   boxesEl.appendChild(newBoxes);
//   console.log(boxesEl);
//  })




// const amount = inputEl.addEventListener('input', (event) => {
//   console.log(inputEl.value);
// })
// console.log(amount);

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// const createBoxes(amount) => {

// }