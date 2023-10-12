// const divEl = document.querySelector('div p');
// console.log(divEl);

const pEl = document.querySelectorAll('.www');
console.log(pEl[0]);

const linkEl = document.querySelector('a');
//linkEl.textContent = 'link text js'
linkEl.innerText = 'link text js'; //добавление текста через свойство
linkEl.href = 'https://developer.mozilla.org/ru/ '; //добавление ссылки через свойство
console.log(linkEl);
console.log(linkEl.text);
console.log(linkEl.href);
//linkEl.setAttribute('href', 'https://developer.mozilla.org/ru/ ') Добавление нового атрибута и его значения через метод

const imgEl = document.querySelector('img');
imgEl.src = 'https://osovet64.ru/wp-content/uploads/4/f/9/4f933cd91ff5c83c4acf3ac5b080703f.jpeg'
imgEl.width = 300;

const div = document.querySelector(".content");

const p = document.createElement("p");
div.appendChild(p);
p.textContent = 'jdfhlwaeileiur';
div.removeChild(p);

const btn = document.createElement('button');
div.appendChild(btn);

// btn.textContent = 'Нажми';
// btn.style.margin = '150px';
// let clickCount = 0;
// btn.onclick = function () {
//     clickCount++;
//     console.log(`Нажали ${clickCount} раз`);
// }

btn.textContent = 'Отправить';

btn.onclick = function () {
    btn.textContent = 'Отправлено';
    setTimeout(() => {
        btn.textContent = 'Отправить';
    }, 1000);
}