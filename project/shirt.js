/*let products=[
{
    name:"BLACK TSHIRT",
    size="L",
    color="BLACK",
    Image="prod1.webp",
    price=599
},
{
    name:"RED TSHIRT",
    size="M",
    color="RED",
    Image="prod2.webp",
    price=499
},
{
    name:"MAROON TSHIRT",
    size="L",
    color="MAROON",
    Image="prod3.webp",
    price=699
},
{
    name:"BLUE TSHIRT",
    size="L",
    color="BLUE",
    Image="prod4.webp",
    price=799
},
{
    name:"GREY TSHIRT",
    size="L",
    color="GREY",
    Image="prod5.webp",
    price=399
},
{
    name:"GREEN TSHIRT",
    size="L",
    color="GREEN",
    Image="prod6.webp",
    price=199
},
];

function displayproducts(){
    let productsstring="";

         products.forEach(function(product) {
         productsstring += `<div class="product">
         <div class="prodimg">
         <img src="images/${Image}" width="100%">
         <h3>${product.name}</h3>
         <p>PRICE:<del>1199rs</del>${product.price}</p>
         <p>SIZE:${product.size}</p>
         <P>COLOR:${product.color}</P>
         <p>
             <button>
                 ADD TO CART
             </button>
         </p>
        </div>
        </div>`;
    });

    document.getElementById("prod").innerHTML = productsstring;
}*/

let products = [
  {
    id: 1,
    name: "BLACK TSHIRT",
    size: "L",
    color: "BLACK",
    price: 599,
    image: "prod1.webp",
    
  },
  {
    id: 2,
    name: "RED TSHIRT ",
    size: "M",
    color: "WHITE",
    price: 399,
    image: "prod2.webp",
    
  },

  {
    id: 3,
    name: "MAROON TSHIRT",
    size: "S",
    color: "MAROON",
    price: 299,
    image: "prod3.webp",
    
  },

  {
    id: 4,
    name: "BLUE TSHIRT",
    size: "M",
    color: "Black",
    price: 499,
    image: "prod4.webp",
   
  },

  {
    id: 5,
    name: "GREY TSHIRT",
    size: "S",
    color: "GREY",
    price: 699,
    image: "prod5.webp",
    
  },

  {
    id: 6,
    name: "GREEN TSHIRT",
    size: "M",
    color: "GREEN",
    price: 199,
    image: "prod6.webp",
    
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price :<del>1199rs</del> ${price}rs/-</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price :<del>1199rs</del> ${price}rs/-</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
          <button onclick="removeFromCart(${id})">PAY</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}



function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);

  //   putting in cart
  cart.push(pro);
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
}