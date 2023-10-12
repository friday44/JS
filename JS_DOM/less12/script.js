async function fetchData() {
    try {
        const responce = await fetch('data.json');
        if (!responce.ok) {
            throw new Error("Не удалось получить данные от data")
        }
        const data = await responce.json();

        console.log(data);

        const productBox = document.querySelector('.product-box');
        data.forEach(({ image, name, description, price }) => {
            const product = `
            <div class="product">
                <img class="product__img" src="${image}" alt="photoproduct">
                <div class="product__content">
                    <h1 class="product__title">${name}</h1>
                    <p class="product__text">${description}</p>
                    <p class="product__price">${price}</p>
                </div>
            </div>
            `;
            productBox.insertAdjacentHTML('beforeend', product);
        })

    } catch (error) {
        console.error(error);
    }
}
fetchData();