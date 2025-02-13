const mobiles = [
    // Apple
  { name: "iPhone 14 Pro Max", price: 1199, picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg", brand: "Apple", detail: "Flagship with amazing camera" },
  { name: "iPhone 14", price: 999, picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg", brand: "Apple", detail: "Great performance and battery life" },
  { name: "iPhone SE 2022", price: 429, picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg", brand: "Apple", detail: "Affordable with compact design" },
  { name: "iPhone 13 Mini", price: 729, picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg", brand: "Apple", detail: "Small size, flagship performance" },
  { name: "iPhone 12", price: 649, picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg", brand: "Apple", detail: "Classic Apple performance and design" },

  // Samsung
  { name: "Samsung Galaxy S23 Ultra", price: 999, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg", brand: "Samsung", detail: "Best for productivity and gaming" },
  { name: "Samsung Galaxy Z Fold 5", price: 1799, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg", brand: "Samsung", detail: "Folding phone for multitasking" },
  { name: "Samsung Galaxy Z Flip 5", price: 999, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip5-5g.jpg", brand: "Samsung", detail: "Compact with foldable screen" },
  { name: "Samsung Galaxy A54", price: 449, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg", brand: "Samsung", detail: "Mid-range with excellent features" },
  { name: "Samsung Galaxy M14", price: 249, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m14-5g-sm-m146.jpg", brand: "Samsung", detail: "Affordable with good battery life" },
  { name: "Samsung Galaxy A23", price: 299, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23-5g.jpg", brand: "Samsung", detail: "Budget-friendly with good features" },
  { name: "Samsung Galaxy A13", price: 199, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a13-5g.jpg", brand: "Samsung", detail: "Budget-friendly with good battery life" },
  { name: "Samsung Galaxy A03", price: 149, picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03.jpg", brand: "Samsung", detail: "Budget-friendly with good battery life" },

  // Google
  { name: "Google Pixel 8 Pro", price: 899, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg", brand: "Google", detail: "Top-notch AI photography features" },
  { name: "Google Pixel 8", price: 699, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8.jpg", brand: "Google", detail: "Compact flagship with great camera" },
  { name: "Google Pixel 7a", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-7a.jpg", brand: "Google", detail: "Affordable with flagship features" },
  { name: "Google Pixel 6 Pro", price: 799, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg", brand: "Google", detail: "Premium design and great camera" },
  { name: "Google Pixel 6", price: 599, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg", brand: "Google", detail: "Mid-range with good battery life" },
  { name: "Google Pixel 5", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg", brand: "Google", detail: "Budget-friendly with good battery life" },
  { name: "Google Pixel Fold", price: 1799, picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-fold.jpg", brand: "Google", detail: "Google's first foldable phone" },

  // OnePlus
  { name: "OnePlus 12", price: 699, picture: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg", brand: "OnePlus", detail: "Performance-focused with clean UI" },
  { name: "OnePlus 11R", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-ace2.jpg", brand: "OnePlus", detail: "Mid-range with fast charging" },
  { name: "OnePlus Nord 3", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-3r.jpg", brand: "OnePlus", detail: "Affordable with premium performance" },
  { name: "OnePlus Nord CE 3", price: 349, picture: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce3-5g.jpg", brand: "OnePlus", detail: "Budget-friendly with clean UI" },
  { name: "OnePlus 10T", price: 649, picture: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-10t-5g.jpg", brand: "OnePlus", detail: "Flagship with fast charging" },

  // Xiaomi
  { name: "Xiaomi Redmi Note 13 Pro", price: 349, picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-5g.jpg", brand: "Xiaomi", detail: "Budget-friendly powerhouse phone" },
  { name: "Xiaomi Redmi Note 12 Pro", price: 199, picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-pro.jpg", brand: "Xiaomi", detail: "Affordable with stylish design" },
  { name: "Xiaomi Redmi Note 11 Pro", price: 249, picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11-pro-global.jpg", brand: "Xiaomi", detail: "Budget-friendly with good battery life" },
  { name: "Xiaomi 13 Ultra", price: 1299, picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-ultra.jpg", brand: "Xiaomi", detail: "Pro camera setup with premium design" },
  { name: "Xiaomi Poco F5 Pro", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-pro-2.jpg", brand: "Xiaomi", detail: "High specs at an affordable price" },
  { name: "Xiaomi Mi 11", price: 699, picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg", brand: "Xiaomi", detail: "Mid-range with good battery life" },

  // Sony
  { name: "Sony Xperia 1 V", price: 1299, picture: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-vi-red.jpg", brand: "Sony", detail: "Great for creators and photos" },
  { name: "Sony Xperia 5 V", price: 999, picture: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-v-new.jpg", brand: "Sony", detail: "Compact with top-tier specs" },
  { name: "Sony Xperia Pro-I", price: 1799, picture: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-pro-i.jpg", brand: "Sony", detail: "Professional camera phone" },
  { name: "Sony Xperia 10 IV", price: 399, picture: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iv.jpg", brand: "Sony", detail: "Budget-friendly with clean software" },

  // Oppo
  { name: "Oppo Find X6 Pro", price: 749, picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6-pro.jpg", brand: "Oppo", detail: "Stylish design with flagship specs" },
  { name: "Oppo Reno 10", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-10x-zoom.jpg", brand: "Oppo", detail: "Affordable with premium features" },
  { name: "Oppo A78", price: 299, picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a58.jpg", brand: "Oppo", detail: "Budget-friendly with good battery" },
  { name: "Oppo K11", price: 399, picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-k11-5g.jpg", brand: "Oppo", detail: "Mid-range with fast performance" },
  { name: "Oppo Find N2 Flip", price: 999, picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg", brand: "Oppo", detail: "Compact foldable with strong battery" },
  { name: "Oppo Reno 10 Pro", price: 899, picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10-pro-international.jpg", brand: "Oppo", detail: "Premium camera and fast performance" },

  // Realme
  { name: "Realme GT 5", price: 599, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-150w.jpg", brand: "Realme", detail: "Gaming phone with fast charging" },
  { name: "Realme Narzo 60 Pro", price: 299, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo60-pro-5g.jpg", brand: "Realme", detail: "Affordable with good performance" },
  { name: "Realme C55", price: 149, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-c55.jpg", brand: "Realme", detail: "Budget-friendly and lightweight" },
  { name: "Realme 11", price: 299, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-11-5g-tw.jpg", brand: "Realme", detail: "Budget-friendly with good battery life" },
  { name: "Realme 11 Pro", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-11-pro.jpg", brand: "Realme", detail: "Premium camera and smooth design" },
  { name: "Realme 11 Pro+", price: 649, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-11-pro-plus.jpg", brand: "Realme", detail: "Premium camera and smooth design" },
  { name: "Realme GT Neo 5", price: 499, picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo5.jpg", brand: "Realme", detail: "Great performance at a mid-range price" }
  
  ];

//   console.log(mobiles);
  
// const promise = new Promise((resolve,reject) =>{
//     if(mobiles.length > 50){
//         console.log("Success");
//         resolve(mobiles);
//     }else{
//         console.log("unsuccess");
//         reject("Failed");
//     }
// })

// promise.then(resolve => {
//     console.log(resolve);
// }).catch((error => {
//     console.log(error);
// }))

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(mobiles.length > 47){
//            resolve(mobiles); 
//     }else{
//         reject("Failed");
//     }
// },5000)
// })

// promise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// const promise = new Promise ((resolve,reject) => {
//     setTimeout(()=> {

//     },2000)
// })


const main = document.querySelector(".main");
// console.log(main);

const mobileProduct = (mobile) => {
    main.innerHTML = "";
    mobile.map((item)=>{
        return main.innerHTML += `<div class="cart">
        <div class="cart-image">
            <img src="${item.picture}" alt="">
        </div>
        <div class="title mt-3">
            <p>${item.name}</p>
        </div>
        <div class="price">
            <p> Usd : $${item.price}</p>
        </div>
        <div class="detail">
            <p>${item.detail}</p>
        </div>
        
    </div>`
        
    })
    
    
}
mobileProduct(mobiles);

// const apple = mobiles.filter((item) => {
//     return item.brand === "Apple";
    
// })
// console.log(apple,"apple");

const filteredMobile = (brand) => {
    // console.log(brand.innerHTML);
    main.innerHTML = "";
    const filtered = mobiles.filter(item => item.brand === brand.innerHTML)
    console.log(filtered);
    mobileProduct(filtered)
}



// const picture = new Promise((resolve,reject) => {
//     if(mobiles.picture = true){
//         resolve(mobiles[0].picture);
//     }else{
//         reject("No pic")
//     }
// })
// picture
// .then((res) => {
//     console.log(res);
    
// })
// .catch((err) => {
//     console.log(err);
// })
    
  
  