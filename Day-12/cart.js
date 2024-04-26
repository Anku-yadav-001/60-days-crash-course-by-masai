let container=document.getElementById("cart-items")
let uname=document.getElementById("username")
let cartdata=document.getElementById("cartdata")
let cart_total=document.getElementById("cart_total")
let total=0
let data=[]
let empty_cart=document.getElementById("empty-cart")
function getUsernameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}
const username = getUsernameFromURL();
uname.innerHTML=`Logged In user-<strong>${username}</strong>`

cartdata.addEventListener("click",function(){
    window.location.href = `cart.html?username=${encodeURIComponent(username)}`;
})
fetch(`http://localhost:8080/allUsersCart`).then(function(res){
    return res.json()
}).then(function(res){
        data=res[username]
        if(data.length===0){
            let htag=document.createElement("h1")
            htag.innerText="Cart is empty !!!"
            htag.style.color="gray"
            htag.style.marginTop="18%"
            empty_cart.append(htag)
          }
       
        displayData(data);
})


function displayData(data){
    data.map(element => {
        let div=document.createElement("div")
        let title=document.createElement("h4")
        let image=document.createElement("img")
        let price=document.createElement("p")
        let rating=document.createElement("p")
        let deletefromcart=document.createElement("button")
        title.innerHTML=`<strong>Title:</strong> ${element.title}`
        image.src=element.src
        price.innerHTML=`<strong>Price:</strong> ${element.price}`
        rating.innerHTML=`<strong>Rating:</strong> ${element.ratings}`
        deletefromcart.innerText="delete from cart"
         deletefromcart.addEventListener("click",function(){
                deleteData(element.id)
         })
       div.append(image,title,price,rating,deletefromcart)
       container.appendChild(div)
       total=total+element.price
       cart_total.innerHTML=`Total: <strong>${total}</strong>`
    });
}

async function deleteData(id){
        try {
            let ans=await fetch(`http://localhost:8080/allUsersCart?${username}`)
            let resp=await ans.json()
            let index=resp[username].findIndex(product => product.id === id)
          
            if (index !== -1) {
                resp[username].splice(index, 1);
                await fetch(`http://localhost:8080/allUsersCart?${username}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(resp)
                });

                alert('Product deleted from cart');
            } 
        } catch (error) {
            console.log(error);
        }
}