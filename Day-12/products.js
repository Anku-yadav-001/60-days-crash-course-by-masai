let container=document.getElementById("products")
let uname=document.getElementById("username")
let data=[]
fetch("http://localhost:3000/products").then(function(res){
    return res.json()
}).then(function(res){
        data=res
        displayData(data);
})

function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
const username = getQueryParam('username');

uname.innerHTML=`Logged In user-<strong>${username}</strong>`

function displayData(data){
    data.forEach(element => {
        let div=document.createElement("div")
        let title=document.createElement("h4")
        let image=document.createElement("img")
        let price=document.createElement("p")
        let rating=document.createElement("p")
        let addtocart=document.createElement("button")
        let deletefromcart=document.createElement("button")

        title.innerHTML=`<strong>Title:</strong> ${element.title}`
        image.src=element.src
        price.innerHTML=`<strong>Price:</strong> ${element.price}`
        rating.innerHTML=`<strong>Rating:</strong> ${element.ratings}`

        addtocart.innerText="add to cart"
        deletefromcart.innerText="delete from cart"

        div.append(image,title,price,rating,addtocart,deletefromcart)
        container.appendChild(div)
    });
}
