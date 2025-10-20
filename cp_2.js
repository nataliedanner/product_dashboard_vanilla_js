// Define function fetchProductsThen()

function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(reponse => reponse.json())
    .then(products=> {
        products.forEach(product => {
            console.log(`Product: ${product.fields.name}`)
        })
    })
    .catch(err => console.error(`Error fetching products:`, err));
}

// Create function fetchProductsAsync()

async function fetchProductsAsync() {
    const response = await fetch(`https://www.course-api.com/javascript-store-products/`);
    return response.json()
}

async function displayProducts() {
    const products = await fetchProductsAsync();
    const container = document.getElementById("product-container")
    container.innerHTML = "";
   products.slice(0, 5).forEach((p) => {
        const { name, price } = p.fields;
        const imageUrl = getImageUrl(p.fields);
       const card = document.createElement("div");
       card.className = "product-container";
       card.innerHTML =`
       <img class="product-image" src="${imageUrl}" alt="${escapeHtml(name)}">
       <div class="product-name"> ${(name)}</div>
       <div class="product-price"> $${(price / 100).toFixed(2)}</div>
       `;

       container.appendChild(card);
   });
   container.textContent = "Showing first 5 products."

}


fetchProductsThen()

// Add reusable Handle error function

async function handleError(error, options = []) {
    console.error(`An error occured:`, error)
    if (options.context) {
        console.error(`Context:`, options.context)
    }
}

// Call functions
fetchProductsAsync()
displayProducts()

