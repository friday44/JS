// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для аданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.
// const MusicSeries = {
//     model: "music series",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     startWipe() {
//         console.log('I am the method of MusicSeries');
//         console.log('I am starting to wipe the floor...');
//     },
// };

// const Blues = {
//     model: "Bluees-1",
//     power: 250,
//     batterySize: 2500,
//     workTime: 50
// };

// Object.setPrototypeOf(Blues, MusicSeries);

// function getPrototypeChain(obj) {
//     const arrayProtos = [];
//     let currentObj = obj;
//     while (currentObj != null) {
//         arrayProtos.push(currentObj);
//         currentObj = Object.getPrototypeOf(currentObj);
//     }
//     return arrayProtos;
// }

// const obj = {};
// const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);



// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// Свойство name - имя животного.
// Метод speak() - выводит в консоль звук, издаваемыйданным животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// Свойство breed - порода собаки.
// Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(`${this.name} издает звук`);
//     }
// }

// class Dog extends Animal {
//     breed = '';
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     };
//     fetch() {
//         console.log(`Собака ${this.name} принесла мяч.`);
//     };
// }

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.

// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.



// Создайте класс Product, который будет представлять товар в магазине.У товара должны быть следующие свойства:
// name(строка) - имя товара.
// price(число) - цена товара за одну единицу.
// Создайте класс ShoppingCart, представляющий корзину интернет - магазина.Конструктор класса ShoppingCart должен принимать два параметра:
// customerName(строка) - имя покупателя.
// initialTotalCost(число) - начальная общая стоимость заказа(может быть равна 0, если корзина пуста).
// У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину.Метод должен принимать два параметра:
// product(объект класса Product) - товар, который добавляется в корзину.
// quantity(число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину.Если quantity не указано, считается, что добавляется одна единица товара.
// У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.
// У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей стоимостью заказа и благодарностью за покупку.Формат вывода сообщения: "Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
    }
    addItem(product, quantity = 1) {
        this.totalCost += quantity * product.price;
    }
    getCurrentTotalCost() {
        return this.totalCost;
    }
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
    }
}

const product1 = new Product("Футболка", 1000);
const product2 = new Product("Джинсы", 2000);

const cart = new ShoppingCart("Иван", 0);
cart.addItem(product1, 2);
cart.addItem(product2);
cart.addItem(product2, 3);

console.log("Текущая общая стоимость: ", cart.getCurrentTotalCost()); // Выведет: Текущая общая стоимость: 10000

cart.checkout(); // Выведет: Заказ оформлен для Иван. Общая стоимость заказа: 10000 рублей. Спасибо за покупку!

