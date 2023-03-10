const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newEl = document.createElement('li');

const makeLI = ({url, alt}) => `<li class="item">
<img src="${url}" alt="${alt}" width = "300" height = "180"></li>`;

const listEl = document.querySelector('.gallery');
listEl.style.display = "grid";

const newMarkup = images.map((image) => makeLI(image)).join('');

listEl.insertAdjacentHTML('afterbegin', newMarkup);
console.log(newMarkup);

const styleItem = document.querySelectorAll('.item');
styleItem.forEach((el) => {
  el.style.listStyle = "none";
});