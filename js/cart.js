var removeCartItemButtons = document.getElementsByClassName("cta_remove");
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

var addToCartButtons = document.getElementsByClassName("cta_add_cart");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  var title = shopItem.getElementsByClassName("game_title")[0].innerText;
  var price = shopItem.getElementsByClassName("item_price")[0].innerText;
  var itemImage = shopItem.querySelector(".cover_image img").src;

  console.log(title, price, imageSrc);
  addToCart(title, price, imageSrc);
}

function addToCart(title, price, imageSrc) {
  var cartItems = document.getElementsByClassName("cart_items")[0];
  var cartRow = document.createElement("section");
  cartRow.classList.add("cart-row");

  var cartRowContents = `
    <div class="cart_item">
      <h2>${title}</h2>
      <p>${title} is a game with monsters and fun.</p>
      <p class="price">${price}</p>
      <button type="button" class="cta_button cta_add_cart cta_remove">
        Remove
      </button>
    </div>
    <div>
      <img src="${imageSrc}" class="forge_legend cover_image" alt="game cover" />
    </div>
  `;

  cartRow.innerHTML = cartRowContents;
  cartItems.appendChild(cartRow);

  var removeCartItemButtons = cartRow.getElementsByClassName("cta_remove");
  removeCartItemButtons[0].addEventListener("click", removeCartItem);

  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart_item");
  var total = 0;

  for (var i = 0; i < cartItemContainer.length; i++) {
    var cartItem = cartItemContainer[i];
    var priceElement = cartItem.getElementsByClassName("price")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    total += price;
  }

  document.querySelector(".total-price").innerText = "$" + total.toFixed(2);
}

updateCartTotal();
