// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное  количество введённых символов.


const textInput = document.querySelector('#validation-input');

const dataLength = textInput.getAttribute('data-length');

textInput.addEventListener("blur", (event) => {
    console.log(textInput.value.length);
    textInput.value.length !== Number(dataLength) ? textInput.classList.add('invalid') : textInput.classList.replace('invalid', 'valid')
});
    
