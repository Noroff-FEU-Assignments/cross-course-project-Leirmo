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
  var imageSrc = shopItem.getElementsByClassName("cover_image")[0];

  console.log(title, price, imageSrc);
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
  document.getElementsByClassName("total-price")[0].innerText =
    "$" + total.toFixed(2);
}

updateCartTotal();
