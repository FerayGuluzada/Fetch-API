// Get productId from the URL
const productId = window.location.search.split('=')[1]; //split after = to get the id

// Fetch the product details based on the productId
fetch('https://dummyjson.com/products')
    .then(dummy => dummy.json())
    .then((dummy) => {
        
        const selectedProduct = dummy.products[productId]; //Get product details based on the productId

        // Display detailed product information in the productDetails div
        const productDetailsDiv = document.getElementById('productDetails');

        // Create HTML with the selected product details 
        productDetailsDiv.innerHTML = `
        <div class="group">
            <h1>${selectedProduct.title}</h1>
            <p>${selectedProduct.description}</p>
            <p><span class="span"> category: </span> ${selectedProduct.category}</p>
            <p><span class="span"> price: </span> ${selectedProduct.price}</p>
            <p><span class="span"> stock: </span> ${selectedProduct.stock}</p>
            <div class="photoGallery"></div> 
        </div>
        `;

        //Get the photo-gallery div element
        const photoGalleryDiv = document.querySelector('.photoGallery');


        // For each image URL in the array create HTML string representing <img>
        //The src of the image element is the current image URL and each image in the class galleryImage
        const imageElements = selectedProduct.images.map(image => `<img src="${image}" class="galleryImage">`).join('');
        photoGalleryDiv.innerHTML = imageElements;
       
    })
    .catch((error) => {
        console.log(error);
    });
