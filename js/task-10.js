function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
} 


refs.buttonCreate.addEventListener('click', holderCreate);
refs.buttonDestroy.addEventListener('click', holderDestroy);


function holderCreate(event) {
  let amount = refs.inputEl.value;
  createBoxes(amount)
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let array = [];

  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    array.push(`<div style="border: solid 1px gray; height: ${height += 10}px; width: ${width += 10}px; background-color: ${color};"></div>`)
  }

  refs.divBoxes.innerHTML = array.join('');
  
}

function holderDestroy(event) {
  refs.inputEl.value = "";
  refs.divBoxes.innerHTML = "";
}
