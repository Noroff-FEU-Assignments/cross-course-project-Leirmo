const baseUrl =
  "https://www.game-hub.project-archive.no/wp-json/wc/store/products/";
const productContainer = document.querySelector(".game_section");
const categories = document.querySelectorAll(".categories");

async function fetchGames() {
  try {
    const response = await fetch(baseUrl);
    const json = await response.json();

    console.log(json);

    productContainer.innerHTML = "";

    const saleGames = json.filter((game) =>
      game.categories.some((category) => category.slug === "sale")
    );

    saleGames.forEach(function (game) {
      const gameElement = document.createElement("div");
      gameElement.classList.add("game-item");

      gameElement.innerHTML = `
        <h2 class="game_title">${game.name}</h2>
        <div>${game.short_description}</div>

                          <a type="button" href="details.html?id=${game.id}" class="cta_button cta_add_cart">
            Pre-order
          </a>
        <img class="cover" src="${game.images[0].src}">
      `;

      productContainer.appendChild(gameElement);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

function getFormattedPrice(prices) {
  if (prices && prices.price) {
    return `Price: ${prices.price}`;
  }
  return "Price not available";
}

fetchGames();

categories.forEach(function (category) {
  category.addEventListener("click", function (event) {
    let newUrl;
    if (event.target.id === "sale") {
      newUrl = baseUrl + "?sale=true";
    } else {
      const categorySale = event.target.value;
      newUrl = baseUrl + `?category=${categorySale}`;
    }
    productContainer.innerHTML = "";
    getProducts(newUrl);
  });
});
