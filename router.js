function showDetails(id){

const product = products.find(
p => p.id === id
);

app.innerHTML = `
<button onclick="location.reload()">
Back
</button>

<h2>${product.name}</h2>

<img src="${product.image}" width="300">

<h3>Price : ₹${product.price}</h3>
`;

}
