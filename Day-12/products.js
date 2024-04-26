let container=document.getElementById("products")
let uname=document.getElementById("username")
let cartdata=document.getElementById("cartdata")
let data=[]
fetch("http://localhost:8080/products").then(function(res){
    return res.json()
}).then(function(res){
        data=res
        displayData(data);
})
function getUsernameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}

 const username = getUsernameFromURL();

uname.innerHTML=`Logged In user-<strong>${username}</strong>`
cartdata.addEventListener("click",function(){
    window.location.href = `cart.html?username=${encodeURIComponent(username)}`;
})
function displayData(data){
    data.map(element => {
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
        addtocart.addEventListener("click",function(){
                addData(element.id,element.title,element.src,element.price,element.ratings)
        })
        deletefromcart.innerText="delete from cart"
        deletefromcart.addEventListener("click",function(){
            deleteData(element.id)
     })
        div.append(image,title,price,rating,addtocart,deletefromcart)
        container.appendChild(div)
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
async function addData(userid,title,src,price,rating){
    try {
        let resonse=await fetch(`http://localhost:8080/allUsersCart?${encodeURIComponent(username)}`);
        let cart_data=await resonse.json()

        cart_data[username].push({
            id:userid,
            title:title,
            src:src,
            price:price,
            ratings:rating
        })
        await fetch(`http://localhost:8080/allUsersCart?${encodeURIComponent(username)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart_data)
        });

        alert('Product added to cart');
    } catch (error) {
        console.log(error);
    }
}