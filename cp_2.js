// Define function fetchProductsThen

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



fetchProductsThen()