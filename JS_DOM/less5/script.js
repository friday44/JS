// document.querySelector('.btn').onclick = function () {
//     console.log('Событие онклик');
// }

// window.onload = function () {
//     console.log('Страница прогрузилась');
// }

// window.addEventListener('load', () => {
//     console.log('Страница прогрузилась');
// })

// const buttons = document.querySelectorAll('.btn');
// for (const button of buttons) {
//     button.onclick = function () {
//         console.log(`Нажата ${button.textContent}`);
//     }
// }

// buttons.forEach(element => {
//     element.onclick = function () {
//         console.log(`Нажата ${element.textContent}`);
//     }
// });

// document.querySelector('#btn3').addEventListener('click', function () {
//     this.textContent = 'Вы нажали эту кнопку';
//     this.style.color = 'red';
// });

// document.querySelector('#btn2').addEventListener('mouseover', function () {
//     this.textContent = 'Догони';
//     this.style.color = 'red';
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     this.style.transform = `translate(${x}px, ${y}px)`
// });

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const buttonsData = [
//     { id: 'add', text: 'Добавить заголовок', clickHandler: addHeading },
//     { id: 'remove', text: 'Удалить заголовок', clickHandler: removeHeading },
//     { id: 'hover', text: 'Кнопка с наведением', mouseoverHandler: handleHoverIn, mouseoutHandler: handleHoverOut }
// ];

// function addHeading() {
//     const heading = document.createElement('h1');
//     heading.textContent = 'Новый заголовок';
//     document.body.appendChild(heading)
// }

// function removeHeading() {
//     const heading = document.querySelector('h1');
//     if (heading) {
//         heading.remove();
//     };
// }

// function handleHoverIn() {
//     console.log('Вы навели на кнопку');
// }

// function handleHoverOut() {
//     console.log('Наведения на кнопку больше нет');
// }

// function createButtons() {
//     const btnContainer = document.querySelector('div');
//     buttonsData.forEach((el) => {
//         const btn = document.createElement('button');
//         btn.id = el.id;
//         btn.textContent = el.text;
//         btnContainer.appendChild(btn);

//         if (el.clickHandler) {
//             btn.onclick = el.clickHandler;
//         }

//         if (el.mouseoverHandler) {
//             btn.onmouseover = el.mouseoverHandler;
//         }

//         if (el.mouseoutHandler) {
//             btn.onmouseout = el.mouseoutHandler;
//         }
//     });
// }
// createButtons();


// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

document.querySelector('#add').addEventListener('click', addListItem);

document.querySelector('#remove').addEventListener('click', removeFirstListItem);

document.querySelector('#addClass').addEventListener('click', addClickClass);

function addListItem() {
    const list = document.querySelector('#list');
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент';
    list.appendChild(newItem);
}

function removeFirstListItem() {
    const list = document.querySelector('#list');
    if (list.firstElementChild) {
        list.firstElementChild.remove();
    }
}

function addClickClass() {
    this.classList.add('click');
}
