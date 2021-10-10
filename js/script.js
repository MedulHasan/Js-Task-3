const products = document.getElementById('products');
const productsArray = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    }
]
let a = '';
productsArray.map(product => {
    let title;
    if (product.title.length > 10) {
        title = product.title.substr(0, 10) + '...';
    }
    const innterH = `
        <a onclick="addProduct(${product.id})" class="single-prodict">
            <img src=${product.image} class="product-image" />
            <p>${title}</p>
        </a>
    `;
    a = a + innterH;
    products.innerHTML = a;
})

const ul = document.getElementById('add-product-list');
function addProduct(id) {
    const singleProduct = productsArray.find(product => product.id === id);
    const li = document.createElement('li');
    li.classList.add('add-product-item');
    li.id = singleProduct.id;
    const img = document.createElement('img');
    img.src = singleProduct.image;
    img.classList.add('add-product-list-img');

    const p = document.createElement('p');
    let title;
    if (singleProduct.title.length > 40) {
        title = singleProduct.title.substr(0, 40);
    }
    p.innerText = title || singleProduct.title;

    const price = document.createElement('p');
    price.innerText = 'BDT: ' + singleProduct.price;

    const span = document.createElement('span');
    span.classList.add('delete-btn')
    span.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    span.addEventListener('click', () => li.remove())

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(price);
    li.appendChild(span)

    ul.appendChild(li);
}