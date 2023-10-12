// const block = document.querySelector('.block');
// const itemDiv = document.createElement('div');
// block.appendChild(itemDiv);
// itemDiv.classList.add('item');
// itemDiv.textContent = 'Элемент внутри';

// console.log(itemDiv.style);
// console.log(itemDiv.classList);

// itemDiv.style.color = 'blue';
// itemDiv.style.border = '1px solid red';
// itemDiv.style.background = '#f8f8f8';
// itemDiv.style.padding = '16px'

// itemDiv.setAttribute('class', 'item item1');

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textElem = document.querySelector('.text');
// console.log(textElem.previousElementSibling);
// console.log(textElem.parentNode);
// console.log(textElem.parentNode.previousElementSibling);
// console.log(textElem.parentNode.parentNode);

// const h2El = document.querySelector('h2');
// const body = document.querySelector('body');
// const parents = [];

// let parent = h2El.parentNode;
// while (parent !== body) {
//     parents.push(parent);
//     parent = parent.parentNode;
// }

// console.log(parents);

// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('btn');

// input.addEventListener('input', (event) => {
//     const value = event.target.value;
//     console.log(value);
// })

form.addEventListener('submit', (event) => {
    event.preventDefault();//предотвращаем отправку формы по умолчанию

    const errorNassege = document.createElement('p');
    if (input.value === '') {
        errorNassege.textContent = 'Заполните поле';
        input.style.borderColor = 'red';
    } else {
        errorNassege.textContent = 'Отлично';
        input.style.borderColor = 'black';

    }
    form.appendChild(errorNassege);
    setTimeout(() => {
        errorNassege.remove();
    }, 2000);
})
