function addToCart(productName) {
  // @Nico
  //  cart is constant = ->
  const cart = document.getElementById("cart");
  const item = document.createElement("p");
  item.textContent = productName;
   
  // @Nico
  // Lager en knapp for å fjerne produktet fra handlekurven 

  const removeButton = document.createElement("button");
  removeButton.textContent = "Fejrn";
  removeButton.onclick = function() {
    removeFromCart(item);
  };

  item.appendChild(removeButton);
  cart.appendChild(item);

  updateTotalProducts(productName);


}

  // @krigjo25
  // Oppdaterer totalbeløpet
  document.getElementById("total-amount").textContent = totalAmount + " kr";
  return totalAmount;

//Nico@
// Oppdater det totale antallet produkter i handlekurven

function updateTotalProducts() {
  const cart = document.getElementById("cart");
  const totalProductsCount = cart.getElementsByTagName("p").length;

  let totalprice = calculateProducts(totalProductCount);

  document.getElementById("total-products-count").textContent = totalProductsCount;

  
}


function calculateTotal(name, qty) {
  // @krigjo25
  // Denne funksjonen beregner totalbeløpet i handlekurven


  // Initialisering av en liste med produktnavn
  const nlist = ["slightly Old Apple", "Halvspistjokia", "Vintage Pepsi"];

  // Initialisering av en liste med tilsvarende priser
  const price = [1, 2, 3]; // Anta at dette er prisene for 'a', 'b', 'c'

  // Variabel for å lagre totalbeløpet
  let totalAmount = 0;

  // Beregner totalen for varene i handlekurven
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < nlist.length; j++) {
      
      // Sørger for at navnet samsvarer med listen
      if (nlist[j] === name[i]) {
        // Beregner prisen basert på mengden
        let value = price[j];
        totalAmount += value * qty[i];
      }
    }
  }
}
function closeShoppingCart()
{
  //  Fetch element to show
  // @krigjo25
 let cls = document.getElementsByClassName('wrapper-container');

  //  Initialize | check if condition is met | increment
 for (let i = 0; i < cls.length; i++)
 {
  // Toggle the class element off / on
  cls[i].classList.toggle('hide');
 }
  return;

}
