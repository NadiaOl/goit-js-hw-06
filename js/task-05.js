// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const greetingSpan = document.querySelector('#name-output');


inputEl.addEventListener("input", (event) => {
    greetingSpan.textContent = event.target.value.trim();
if (event.target.value === '' || event.target.value === ' ') {
    greetingSpan.textContent = 'Anonymous'
    }
    }
)


