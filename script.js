const products = [
    { name: "Telefon Samsung Galaxy S24", price: "3.499,99 RON", image: "https://via.placeholder.com/200x200?text=Samsung+S24" },
    { name: "Laptop ASUS Zenbook", price: "4.799,99 RON", image: "https://via.placeholder.com/200x200?text=ASUS+Zenbook" },
    { name: "Televizor LG OLED", price: "6.299,99 RON", image: "https://via.placeholder.com/200x200?text=LG+OLED" },
    { name: "Espressor DeLonghi", price: "999,99 RON", image: "https://via.placeholder.com/200x200?text=Espressor" },
    { name: "Pantofi sport Nike", price: "399,99 RON", image: "https://via.placeholder.com/200x200?text=Nike" },
];

const container = document.getElementById("product-list");
products.forEach(prod => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <h3>${prod.name}</h3>
        <p>${prod.price}</p>
        <button>Adaugă în coș</button>
    `;
    container.appendChild(div);
});
commit file(add script.js)
