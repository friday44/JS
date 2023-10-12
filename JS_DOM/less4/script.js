// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const task1 = document.querySelectorAll('.dropdown-item');
task1.forEach(element => {
    element.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const task2 = document.querySelector('.btn');
task2.classList.toggle('btn-secondary');

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const task3 = document.querySelector('.menu');
task3.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const task4 = document.querySelector('div.dropdown');
task4.insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const task5 = document.querySelector('#dropdownMenuButton');
task5.id = '#superDropdown';

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const task6 = document.querySelector('.menu');
task6.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const task7 = document.querySelector('.dropdown-toggle');
task7.removeAttribute('type');