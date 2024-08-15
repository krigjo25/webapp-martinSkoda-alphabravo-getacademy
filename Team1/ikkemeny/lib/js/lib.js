
//  Initializing the project's object
let itemName = [{name:"slightly Old Apple", price:20, qty: 0},{name:"Joika Boller", price:30, qty: 0},{ name:"Vintage Pepsi",price:40, qty: 0}];

function addToCart(productName) {
  // @Nico
  updateTotalProducts(productName);

  const item = document.createElement("p");

  //  Kriss
  console.log(item.classList);
  for (cls of item.classList)
  {
    console.log(cls)
  }

  for (let i = 0; i < itemName.length; i++)
  {
    // Ensure its the same product
    if (productName == itemName[i].name)
    {
      // Lager et nytt produkt

      item.innerHTML = itemName[i].name + " x" + itemName[i].qty + " $" + itemName[i].price;
    }

  }

  //  @Nico // Remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Fjern";
  removeButton.onclick = function() {
  removeCart(item, productName);  
  }

  item.appendChild(removeButton);

  const cart = document.getElementById("cart");
  cart.appendChild(item);
}

function removeCart(item, name) {

  // Når den får input fra addtocart
  if (item)
    {
      //  RemoveChild
     
      const cart = document.getElementById("cart");
      cart.removeChild(item);

      //  Edited : using another variable
      for (let i = 0; i < itemName.length; i++)
        {
          // Ensure its the same product
          if (name === itemName[i].name)
          {
            //  Decrease quanity
            itemName[i].qty--;
            total = calcualteProduct();
            if (itemName[i].qty == 0)
            {
              document.getElementById("total-products").textContent = "Tom HandleKurv";
            } else {
    
              document.getElementById("total-products").textContent = "Antall varer : " + itemName[i].qty + " Total pris : $" + total;
            }
            
          }
      
        }
       
    }

  else
  {
    console.log('Error can not find item')
  }
}
// Ferdig
function updateTotalProducts(name) {
  
  let total = 0;


    //  Updating quanity & find total
  for (let i = 0; i < itemName.length; i++)
  {
    if (name == itemName[i].name)
      {
        //  Increase quanity
        itemName[i].qty++;

      }

    //  find total
    total = calcualteProduct();

  }

  const cart = document.getElementById("cart");
  const p = cart.getElementsByTagName("p").length+1

  document.getElementById("total-products").textContent = "Antall varer : " + p + " Total pris : $" + total;
  
}
// Working fine !
function calcualteProduct() {

    //  Initializing variable
    let total = 0;
    let totalProductprice = 0;

    //  Updating quanity
    for(let i = 0; i < itemName.length; i++)
      {

        //  Calculate and add
        totalProductprice += (itemName[i].qty * itemName[i].price);
      }       
       
        total += totalProductprice;

      return total;

}

//  Ferdig KG
function toggleShoppingCart()
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

