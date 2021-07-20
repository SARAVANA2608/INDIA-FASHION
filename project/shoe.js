let products = [
    {
      id: 1,
      name: "BLACK SHOE",
      size: "9",
      color: "BLACK",
      price: 599,
      image: "pr1.webp",
      
    },
    {
      id: 2,
      name: "WHITE SHOE ",
      size: "10",
      color: "WHITE",
      price: 399,
      image: "pr2.webp",
      
    },
  
    {
      id: 3,
      name: "RED SHOE",
      size: "8",
      color: "MAROON",
      price: 299,
      image: "pr3.webp",
      
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