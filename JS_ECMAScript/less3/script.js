// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const person = {
//     name: "",
//     age: 0,
//     genfer: "",
//     introduce() {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.genfer}.`);
//     },
//     changeName(newName) {
//         this.name = newName;
//     }
// }

// person.name = "John";
// person.age = 25;
// person.gender = "male";
// person.introduce();
// person.changeName("Mike");
// person.introduce();


// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

// const animal = {
//     name: "",
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// };
// const dog = {
//     name: "",
//     bark() {
//         console.log(`${this.name} is barking`);
//     }
// }

// dog.name = "Rex";
// dog.eat = animal.eat; //Одалживание метода
// dog.eat();


// Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// const calculator = {
//     coeff: 1,
//     add(a, b) {
//         return this.coeff * (a + b);
//     },
//     // add: (a, b) => { console.log(a + b) },

//     subtract(a, b) {
//         return a - b;
//     },
//     multiply(a, b) {
//         return a * b;
//     }
// }
// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(5, 3));
// console.log(calculator.multiply(5, 3));

// console.log(calculator.add.call({ coeff: 1 }, 5, 3));
// console.log(calculator.add.call({ coeff: 2 }, 5, 3));

// console.log(calculator.subtract.apply(null, [5, 3]));

// Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
//     };
// }
// const person = new Person("John", 25);
// person.introduce();


// Создайте класс BankAccount, который представляет банковский счет. У него должны быть свойства accountNumber (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит название банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    };
    deposit(amount) {
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance + amount}`);
        this.balance + amount;
        this.balance += amount;
    };

    withdraw(amount) {
        if (amount <= this.balance) {
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance - amount}`);
            this.balance + amount;
            this.balance -= amount;
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }

    };
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890