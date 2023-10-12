// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
})


// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', () => {
    console.log('cтраница прогрузилась');
})


// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
// - Необходимо использовать делегирование. ???

document.addEventListener('click', event => {
    let task3 = '';
    if (event.target.classList == 'super_element') {
        task3 = 'присутствует'
    } else {
        task3 = 'отсутствует'
    }
    console.log(`Класс "super_element" ${task3} в элементе 
    "${event.target.tagName.toLowerCase()}".`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const task4 = document.querySelector('textarea')
task4.addEventListener('mouseover', () =>
    console.log("Вы навели на textarea."));


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const task5 = document.querySelector('ul')
task5.addEventListener('click', event => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    console.log(event.target.textContent);
});


// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

//С фазами не разобралась. Захват, целевая, всплытие. Надо разбираться.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const task7 = document.querySelectorAll('li');
console.log(task7);
task7.forEach(element => {
    if ((element.index) % 2 == 0) {
        element.style.background = 'red';
    }
});


