const app = document.getElementById("app");

function displayProducts(items){

app.innerHTML = "";

items.forEach(product=>{

app.innerHTML += `
<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="showDetails(${product.id})">
View Details
</button>

</div>
`;

});

}

displayProducts(products);

document
.getElementById("search")
.addEventListener("input",function(e){

const filtered = products.filter(product=>
product.name
.toLowerCase()
.includes(
e.target.value.toLowerCase()
)
);

displayProducts(filtered);

});
