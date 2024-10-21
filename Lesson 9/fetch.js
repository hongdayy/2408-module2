import { fetchApi } from "./fetchApi.js";

// const fetchApi = (url) =>{
//     const result = fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         return data;
//     });
//     return result;
// }


// get category
fetch("https://dummyjson.com/products/category/beauty")
.then(response => response.json())
.then(data => {
    let htmls = ""; 

    // Duyệt qua từng sản phẩm trong danh sách sản phẩm
    data.products.forEach(item => {
        // Tạo HTML cho từng sản phẩm
        htmls += `
            <div class="product-item">
        <img src="${item.thumbnail}" >
        <h3>${item.title }</h3>
        <p>${item.price}</p>
    </div>
</div>
        `;
        console.log(item); 
    });
    const divCategory = document.querySelector("#category");
    divCategory.innerHTML = htmls; 
})

//end category




//ASYNC/ AWAIT



