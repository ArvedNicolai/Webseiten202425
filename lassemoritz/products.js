const product = [
    {
      id: 0,
      image: 'pictures/alphatshirt.jpg',
      title: 'Alpha T-Shirt',
      price: 20,
    },
    {
      id: 1,
      image: 'pictures/autismusbuch.jpg',
      title: 'Autismusbuch',
      price: 12,
    },
    {
      id: 2,
      image: 'pictures/bodypillow.jpg',
      title: 'Bodypillow',
      price: 15,
    },
    {
      id: 3,
      image: 'pictures/finanzamt.jpg',
      title: 'Finanzamt T-shirt',
      price: 8,
    },
    {
      id: 4,
      image: 'pictures/helenefischer.jpg',
      title: 'Helene Fischer CD',
      price: 2,
    },
    {
      id: 5,
      image: 'pictures/herrenhäuser.jpg',
      title: 'Premium Herri',
      price: 32,
    },
    {
      id: 6,
      image: 'pictures/kanyewest.jpg',
      title: 'Kanye West CD',
      price: 36,
    },
    {
      id: 7,
      image: 'pictures/lennertssocken.jpg',
      title: 'Lennerts Socken',
      price: 100,
    },
    {
      id: 8,
      image: 'pictures/OIP.jpg',
      title: 'Zorp Zorp',
      price: 20,
    },
    {
      id: 9,
      image: 'pictures/rizzbook.jpg',
      title: 'Rizzbible',
      price: 90,
    },
    {
      id: 10,
      image: 'wolfpic.png',
      title: 'Alphabuch',
      price: 24,
    },
    {
      id: 11,
      image: 'pictures/gta6.jpg',
      title: 'GTA VI',
      price: 85,
    }

  ];
  const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>€ ${price}.00</h2>` +
          "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
      </div>`
    )
  }).join('')
  
  var cart = [];
  
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "€" + 0 + ".00";
    }
    else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "€ " + total + ".00";
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>€ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
        );
      }).join('');
    }
  }