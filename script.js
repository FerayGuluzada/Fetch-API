 fetch('https://dummyjson.com/products')
.then(dummy => dummy.json())
.then((dummy) => {

    let card = "";
    console.log(dummy);
    dummy.products.map((product)=>{
        card+=`<div class="card">
        <h1 class="title">${product.title}</h1>
        <img src="${product.images[0]}" alt="${product.thumbnail}">
        <p>${product.description}</p>
        <p class="category">${product.category}</p>
        <p class="price">${product.price}</p>
        <p class="discount">${product.discount}</p>
        <p class="stock">${product.stock}</p>
      </div>`
    });

    document.getElementById("cards").innerHTML = card;


} ).catch((error)=>{console.log(error)});
            

