const decrementBtn = document.querySelector('button[data-action = "decrement"]');

const incrementBtn = document.querySelector('button[data-action = "increment"]');

const spanValue = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue = parseInt(spanValue.textContent);
    spanValue.textContent -= 1;
}
);

incrementBtn.addEventListener('click', () =>
{
    counterValue = parseInt(spanValue.textContent);
    spanValue.textContent = counterValue + 1;
    
});
