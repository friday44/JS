import { dataInfo } from "./json.js";

const data = JSON.parse(dataInfo)

const content = document.querySelector('.content');
content.style.display = 'flex';
content.style.flexWrap = 'wrap';
content.style.fontFamily = 'sans-serif';


data.forEach(({ id, name, descr, url }) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.margin = '12px';
    div.style.border = '1px solid grey';
    div.style.width = '174px'
    div.style.padding = '12px';
    div.style.textAlign = 'center';

    content.appendChild(div);

    const img = document.createElement('img');
    img.classList.add('card__img')
    img.src = url;
    img.width = 150;
    img.border = '1px solid #d3d3d3';
    div.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__body');
    div.appendChild(cardBody);

    const idPara = document.createElement('p');
    idPara.classList.add('card__number');
    idPara.textContent = `${id}`;
    cardBody.appendChild(idPara);

    const title = document.createElement('h4');
    title.classList.add('card__title');
    title.textContent = name;
    cardBody.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('card__text');
    description.textContent = descr;
    cardBody.appendChild(description);
    description.style.textAlign = 'left';
});