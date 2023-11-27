 fetch('https://dummyjson.com/products')
.then(dummy => dummy.json())
.then((dummy) => {

    let card = "";
    console.log(dummy);
    // dummy.products.map((product)=>{
    //     card+=`<div class="card">
    //     <img src="${product.images[0]}" alt="${product.thumbnail}">
    //     <h1 class="title">${product.title}</h1>
    //     <p>${product.description}</p>
    //     <p class="category"> <span class="categorySpan"> category: </span> ${product.category}</p>
    //     <p class="price"> <span class="categorySpan"> price: </span> ${product.price}</p>
    //     <p class="discount"><span class="categorySpan"> discount: </span>${product.discount}</p>
    //     <p class="stock"> <span class="categorySpan"> stock: </span>${product.stock}</p>
    //   </div>`
    // });
    dummy.products.map((product) => {
      card += `<div class="card">
        <div class="product-details">
          <div class="image-heading">
            <img src="${product.images[0]}" alt="${product.thumbnail}">
            <h1 class="title">${product.title}</h1>
            <p class = "description">${product.description}</p>
          </div>
          <div class="details">
            <div class="product-info">
              <p class="category"> <span class="categorySpan"> category: </span> ${product.category}</p>
              <p class="price"> <span class="categorySpan"> price: </span> ${product.price}</p>
              <p class="discount"><span class="categorySpan"> discount: </span>${product.discount}</p>
              <p class="stock"> <span class="categorySpan"> stock: </span>${product.stock}</p>
            </div>
          </div>
        </div>
      </div>`;
    });
    
    

    document.getElementById("cards").innerHTML = card;


} ).catch((error)=>{console.log(error)});
            

