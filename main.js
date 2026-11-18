// ?https://dummyjson.com/docs/products productlari çəkin api-dən, ekranda kart dizaynı ilə göstərin. kart dizaynlarını bootstrapdan də götürə bilərsiz özünüz də yaza bilərsiz. Əsas odu şəkil, ad, description, price və category hissəsi olsun
const box = document.querySelector(".box");
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
            box.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src=${item.thumbnail} class="card-img" alt="...">
    <h5 class="mt-2 mb-0 title">${item.title}</h5>
    <p class="card-text desc ">${item.description}</p>
    <small class="fg-3 price">${item.price}</small>
    <b class="fg-3 category">${item.category}</b>
  </div>
</div>`
        })
    })

fetch('https://dummyjson.com/products')
.then(res => res.json())
    .then(data => {
        console.log(data)
        
    }
)
