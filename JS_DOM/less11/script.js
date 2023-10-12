async function fetchData() {
    try {
        const responce = await fetch('data.json');
        if (!responce.ok) {
            throw new Error("Не удалось получить данные от data")
        }
        const data = await responce.json();

        console.log(data);

        const productBox = document.querySelector('.product__box');
        data.forEach(({ name, image, price, color, size, quantity }) => {
            const product = `
            <div class="product">
            <button class="btn__del"></button>
            <div class="content">
                <img class="product__img" src="${image}" alt="${name}">
                <div class="product__desc">
                    <h2 class="product__name">${name}</h2>
                    <p class="product__price-label">Price: <span class="product__price">${price}</span></p>
                    <p class="product__color">Color: ${color}</p>
                    <p class="product__sise">Size: ${size}</p>
                    <div class="product__dty">
                        <label class="input__label">Quantity: </label>
                        <input type="text" class="input__quantity" value = "${quantity}">
                    </div>
                </div>
            </div>
        </div>`;
            productBox.insertAdjacentHTML('beforeend', product);
        })

        const btns = document.querySelectorAll('.btn__del');
        btns.forEach((el) => {
            el.addEventListener('click', () => {
                const product = el.closest(".product");
                product.remove();
            })
        })

    } catch (error) {
        console.error(error);
    }
}
fetchData();