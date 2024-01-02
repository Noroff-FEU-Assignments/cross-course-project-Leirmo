const detailContainer = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = `https://www.game-hub.project-archive.no/wp-json/wc/store/products/${id}`;

console.log(url);

async function fetchGame() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchGame();

function createHtml(details) {
  detailContainer.innerHTML = `<h1 class="game_title">${details.name}</h1>
                                <div class="game_description">${
                                  details.description
                                }</div>
                                <img class="cover" src="${
                                  details.images[0].src
                                }">
                                <p class="item_price">${getFormattedPrice(
                                  details.prices
                                )}</p>
                                <button type="button" class="cta_button cta_add_cart">
            Buy
          </button>
`;
}

function getFormattedPrice(prices) {
  if (prices && prices.price) {
    return `Price: ${prices.price}`;
  }
  return "Price not available";
}

fetchGames();
