const cardsContainer = document.getElementById("cardsContainer");

let products = (data) => {
    html = "";
    for (let i = 0; i < data.length; i++) {
        html += `<div class="card">
        <div class="image-container">
            <img src="${data[i]['image']['src']}" alt="${data[i]['image']['alt']}">
        </div>
        <div class="text-container">
            <h2 class="title">${data[i]['product']}</h2>
            <h3 class="price">${data[i]['price']}</h3>
            <p class="desc">${data[i]['description']}</p>
        </div>
    </div>
    `;
    }
    cardsContainer.innerHTML += html;
};
