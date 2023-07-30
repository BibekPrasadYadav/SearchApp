const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
      color:"Black"
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
      color:"Black"
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
      color:"Blue"
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
      color:"Blue"
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
      color:"Black"
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
      color:"Black"
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
      color:"Black"
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
      color:"Black"
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
      color:"Black"
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
      color:"Black"
    },
    {
        id: 11,
        img: "https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/d/e/dell_g15_5515_amd_rayzen_7_16gb_ram_512gb_ssd_15.6-inch_gaming_laptop_1.jpg",
        name: "Gaming Laptop",
        amt: 335,
        catagory:"Laptop",
        color:"Black"
    },
    {
        id: 12,
        img: "https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_template_2_-_2020-11-23t113708.928.jpg",
        name: "Macbook M1 Air",
        amt: 450,
        catagory:"TV",
        color:"Black"
    },
    {
        id: 13,
        img: "https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/p/s/ps5_b2.jpg",
        name: "PlayStation 5 Console",
        amt: 200,
        catagory:"PlayStation",
        color:"Combined Color"
    },
     {
    id: 14,
    img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    amt:8900,
    name:"Guitar T-shirt",
    catagory:"T-shirt",
    color:"Gray"
  },
  {
    id: 15,
    img: "https://cdn.shopify.com/s/files/1/2143/3217/products/UpdatedProductGrid_5_large.png?v=1669058010",
    name:"White T-shirt",
    amt:200,
    catagory:"T-shirt",
    color:"White"
  },

  {
    id: 16,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    amt:3350,
    name:"T-shirt",
    catagory:"T-shirt",
    color:"Red"
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/91xw1ZXMvVL._UX522_.jpg",
    amt:7545,
    name:"Ladies suit",
    catagory:"Suit",
    color:"Purple"
  },

  {
    id: 8,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    amt:120,
    name:"Noissue Bag",
    catagory:"Bag",
    color:"Green"
  },
  

  ];
  
  const productsContainer = document.querySelector(".products");
  const categoryList = document.querySelector(".category-list");
  
  function displayProducts(products) {
    if (products.length > 0) {
      const product_details = products
        .map(
          (product) => `
    <div class="product">
    <div class="img">
      <img src="${product.img}" alt="${product.name}" />
    </div>
    <div class="product-details">
      <span class="name">${product.name}</span>
      <span class="amt">Rs.${product.amt}</span>
      <span class="seller">${product.seller}</span>
    </div>
  </div>`
        )
        .join("");
  
      productsContainer.innerHTML = product_details;
    } else {
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
  }
  
  function setCategories() {
    const allCategories = data.map((product) => product.catagory);
    //console.log(allCategories);
    const catagories = [
      "All",
      ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
      }),
    ];
    //console.log(catagories);
    categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
  
    categoryList.addEventListener("click", (e) => {
      const selectedCatagory = e.target.textContent;
      selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
    });
  }

  const productsContain = document.querySelector(".products");
  const colorList = document.querySelector(".color-list");
  function setColor() {
    const allColor = data.map((product) => product.color);
    //console.log(allCategories);
    const catagories = [
      "All",
      ...allColor.filter((product, index) => {
        return allColor.indexOf(product) === index;
      }),
    ];
    //console.log(catagories);
    colorList.innerHTML = catagories.map((color) => `<li>${color}</li>`).join("");
  
    colorList.addEventListener("click", (e) => {
      const selectedColor = e.target.textContent;
      selectedColor === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.color == selectedColor));
    });
  }



  const priceRange = document.querySelector("#priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  function setPrices() {
    const priceList = data.map((product) => product.amt);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "Rs." + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "Rs." + e.target.value;
      displayProducts(data.filter((product) => product.amt <= e.target.value));
    });
  }
  
  const txtSearch = document.querySelector("#txtSearch");
  txtSearch.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value) {
      displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
    } else {
      displayProducts(data);
    }
  });
  
  displayProducts(data);
  setCategories();
  setPrices();
  setColor()