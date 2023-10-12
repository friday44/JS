//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const task1 = document.getElementById('super_link');
console.log(task1);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const task2 = document.querySelectorAll('.card-link');
console.log(task2);
task2.forEach(element => {
    element.innerText = 'ссылка';
});

//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const task3 = document.querySelector('.card-body').querySelectorAll('.card-link');
console.log(task3);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const task4 = document.querySelector('[data-number="50"]');
console.log(task4);

//5. Выведите содержимое тега title в консоль.
const task5 = document.querySelector('title');
console.log(task5.text);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const task6 = document.querySelector('.card-title');
console.log(task6.parentElement);

//7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const task7 = document.querySelector('.card');
const p = document.createElement('p');
p.innerText = 'Привет';
task7.prepend(p);

//8. Удалите тег h6 на странице.
const task8 = document.querySelector('h6');
task8.remove();