fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    //khoi tao
    var products = document.querySelector(".products");
    products.innerHTML = "";
    data.forEach((item) => {
      var newproduct = document.createElement("div");
      newproduct.classList.add("product");
      newproduct.innerHTML = `            
                            <img src="${item.image}">
                            <div class="info">
                                <div class="name">${item.title}</div>
                                <div class="price">${item.price}</div>
                            </div>`;

      products.appendChild(newproduct);
    });
  });

var searchinput = document.querySelector('.search input')
searchinput.addEventListener('input', function(e){
    let txtsearch = e.target.value.trim()
    let listproduct = document.querySelectorAll('.product')
    listproduct.forEach(item=>{
        //if(item.innerText.includes(txtsearch))
    })
})
