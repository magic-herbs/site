const destinyCards = document.getElementById("destinyCards");

let app = {};

let travel = (data) => {
    html = "";
    for (let i = 0; i < data.length; i++) {
        html += `<div class="destiny">
    <div class="image-container">
        <img src="${data[i]['image']['src']}" alt="${data[i]['image']['alt']}">
    </div>
    <div class="text-container">
        <h2>${data[i]['product']}</h2>
        <h3>${data[i]['price']}</h3>
        <p>${data[i]['description']['short']}</p>
        <a class="link" href="#">¡Saber mas!</a>
    </div>
</div>
`;
    }
    destinyCards.innerHTML += html;
};
