 fetch('https://dummyjson.com/products')
.then(dummy => dummy.json())
.then((dummy) => {

    let card = "";
    console.log(dummy);
 
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
            

// const search = () => {  // for Sa for Samsung
//   const searchBox = document.getElementById("search").value.toUpperCase();
//   console.log(searchBox); //SA

//   const cards = document.getElementById("cards");
//   console.log(cards); // all <div id="cards">

//   const product = document.querySelectorAll(".card");
//   console.log(product);

//   const productName = cards.getElementsByTagName("h1");
//   console.log(productName); // all h1s



//   for(var i = 0; i < productName.length; i++)
//   {
//     let match = product[i].getElementsByTagName('h1')[0];
//     console.log(match);

//     if(match)
//     {
//       let textvalue = match.textContent || match.innerHTML;

//       if(textvalue.toUpperCase().indexOf(searchBox) > -1)
//       {
//         product[i].style.display = "";
//       } 


//       else
//       {
//         product[i].style.display = "none";
//       }


//     }
//   }
// }

// const search = () => {
//   const searchBox = document.getElementById("search").value.toUpperCase();
//   const cards = document.querySelectorAll(".card");

//   cards.forEach(card => {
//     const title = card.querySelector(".title").textContent.toUpperCase();
//     const description = card.querySelector(".description").textContent.toUpperCase();
//     const category = card.querySelector(".category").textContent.toUpperCase();

//     if (
//       title.includes(searchBox) ||
//       description.includes(searchBox) ||
//       category.includes(searchBox)
//     ) 
//     {
//       card.style.display = "block";
//     } 
    
//     else 
//     {
//       card.style.display = "none";
//     }
//   });
// };


const search = () => {
  const searchBox = document.getElementById("search").value.toUpperCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector(".title").textContent.toUpperCase();
    const description = card.querySelector(".description").textContent.toUpperCase();
    const categoryElement = card.querySelector(".category");
    const categoryText = categoryElement.textContent.toUpperCase();
    const category = categoryText.substring(categoryText.indexOf("CATEGORY:") + 10).trim();

    if (
      title.includes(searchBox) ||
      description.includes(searchBox) ||
      category.includes(searchBox)
    ) 
    {
      card.style.display = "block";
    } 
     
    else 
    {
      card.style.display = "none";
    }
  });
};



