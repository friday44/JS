import { dataInfo } from "./json.js";

const data = JSON.parse(dataInfo)
console.log(data);

// data.forEach(element => {
//     const img = document.createElement('img');
//     img.src = element.url;
//     document.querySelector('.content').appendChild(img);
// });
const content = document.querySelector('.content');

data.forEach(({ id, name, age, url }) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.display = 'inline-block'
    div.style.margin = '8px';
    content.appendChild(div);

    const img = document.createElement('img');
    img.classList.add('card__img')
    img.src = url;
    img.width = 200;
    div.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__body');
    div.appendChild(cardBody);

    const idPara = document.createElement('p');
    idPara.classList.add('card__text');
    idPara.textContent = `id: ${id}`;
    cardBody.appendChild(idPara);

    const title = document.createElement('h5');
    title.classList.add('card__title');
    title.textContent = name;
    cardBody.appendChild(title);

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card__subtitle');
    subtitle.textContent = age;
    cardBody.appendChild(subtitle);
});