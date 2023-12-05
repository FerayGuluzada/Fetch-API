fetch('https://dummyjson.com/products')
    .then(dummy => dummy.json())  //parse the response as JSON
    .then((dummy) => {
        let card = "";   //empty string to store card
        console.log(dummy);


        //iterate through each product in products array and generate a card for each
        dummy.products.map((product, index) => {   //product - element from products array   //index of currently processed element
            card += `<div class="card" onclick="redirectToProduct(${index})">
                <div class="productDetails">
                    <div class="image-heading">
                        <img src="${product.images[0]}" alt="${product.thumbnail}">
                        <h1 class="title">${product.title}</h1>
                        <p class="description">${product.description}</p>
                    </div>
                    <div class="details">
                        <div class="product-info">
                            <p class="category"> <span class="categorySpan"> Category: </span> ${product.category}</p>
                            <p class="price"> <span class="categorySpan"> Price: </span> ${product.price}</p>
                            <p class="discount"> <span class="categorySpan"> Discount: </span>${product.discount}</p>
                            <p class="stock"> <span class="categorySpan"> Stock: </span>${product.stock}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        });


         // Set the inner HTML of the element with id "cards" to the card above
        document.getElementById("cards").innerHTML = card;
    })
    .catch((error) => {
        console.log(error);
    });


/////////////////////////////
///PRODUCT CLICK NEW PAGE////
////////////////////////////

    const redirectToProduct = (productId) => {
      // Open the product details page in a new tab
      window.open(`product.html?productId=${productId}`, '_blank');
  };
  


///////////////////////
//SEARCH AND FILTER///
/////////////////////


const search = () => {

  //get search input value, what is written in search box
  const searchBox = document.getElementById("search").value.toUpperCase();

  //get all elments with class "card"
  const cards = document.querySelectorAll(".card");

  //get selected category from the dropdown menu
  const selectedCategory = document.querySelector(".categories").value;


  //iterate through each card

  cards.forEach(card => {

    //get title 
    const title = card.querySelector(".title").textContent.toUpperCase();

    //get description
    const description = card.querySelector(".description").textContent.toUpperCase();

    
    const categoryElement = card.querySelector(".category");

    //get category converted to uppercase
    const categoryText = categoryElement.textContent.toUpperCase();
    const category = categoryText.substring(categoryText.indexOf("CATEGORY:") + 10).trim();

    //check for matches
    const titleMatch = title.includes(searchBox);
    const descriptionMatch = description.includes(searchBox);
    const categoryMatch = category.includes(searchBox);

    //show or hide cards based on search and category match
    if (
      (selectedCategory === "all" || category === selectedCategory.toUpperCase()) &&  //if either all or match
      (titleMatch || descriptionMatch || categoryMatch)
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


////////////////
// PAGINATION///
////////////////

const itemsPerPage = 10;
let currentPage = 1;



// Display data for particular page
function displayData(data, page) {

  // Calculate start and end indices of products for the given page
  const startIndex = (page - 1) * itemsPerPage; //page 2 -> (2 - 1) * 10 = 10 
  const endIndex = startIndex + itemsPerPage; //page 2 -> (10 + 10) = 20
  //page 2 -> items 10-20


  // Slice the data to get products for the current page
  const slicedData = data.slice(startIndex, endIndex);

  let cardsHTML = ''; // HTML for displayed products in this string

  // Generate HTML for each product on the current page
  slicedData.forEach((product, index) => {
    cardsHTML += `
      <div class="card" onclick="redirectToProduct(${startIndex + index})">
        <div class="productDetails">
          <div class="image-heading">
            <img src="${product.images[0]}" alt="${product.thumbnail}">
            <h1 class="title">${product.title}</h1>
            <p class="description">${product.description}</p>
          </div>
          <div class="details">
            <div class="product-info">
              <p class="category"> <span class="categorySpan"> Category: </span> ${product.category}</p>
              <p class="price"> <span class="categorySpan"> Price: </span> ${product.price}</p>
              <p class="discount"> <span class="categorySpan"> Discount: </span>${product.discount}</p>
              <p class="stock"> <span class="categorySpan"> Stock: </span>${product.stock}</p>
            </div>
          </div>
        </div>
      </div>`;
  });

  // Display the generated HTML for products on the page
  document.getElementById("cards").innerHTML = cardsHTML;
}




function paginationButtons(totalItems) {

  //Calculate number of pages required to store the prorducts 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  //Empty string for HTML
  let pagination = "";


  // Iterate through each page and generate HTML for the pagination buttons
  for (let i = 1; i <= totalPages; i++) 
  {
    // Create a button element for each page with 'onclick' that calls 'changePage' function with the page number as an argument
    pagination += `<button onclick="changePage(${i})">${i}</button>`;
  }

  //Set the HTML content of the element with the ID 'pagination' to the generated pagination buttons
  document.getElementById("pagination").innerHTML = pagination;
}



// Function to change the current page and fetch data for the selected page
function changePage(pageNumber) {

  currentPage = pageNumber;

  fetch('https://dummyjson.com/products')
    .then(dummy => dummy.json())
    .then((dummy) => {
      displayData(dummy.products, currentPage);  // Display products for the selected page
    })
    .catch((error) => {
      console.log(error);
    });
}


fetch('https://dummyjson.com/products')
  .then(dummy => dummy.json())
  .then((dummy) => {
    displayData(dummy.products, currentPage);
    paginationButtons(dummy.products.length);
  })
  .catch((error) => {
    console.log(error);
  });




