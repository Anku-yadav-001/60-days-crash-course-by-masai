 let form=document.querySelector("form")


 function handleIncoming(event){
    event.preventDefault()
    let formData=event.target;
    let username=formData[0].value;
    let password=formData[1].value

    checkLogin(username,password);
 }

 async function checkLogin(u_name,u_password){
 
   try {
    let ans=await fetch("http://localhost:3000/users")
    let response=await ans.json();
    response.forEach((ele)=>{
             if(ele.name==u_name && ele.password==u_password){
                  alert("User login successfully 💥💥")
                  window.location.href = `products.html?username=${encodeURIComponent(u_name)}`;
    } else{
        alert("Invalid credentials ")
    }
    })
   } catch (error) {
    console.log(error);
   }
  }

form.addEventListener("submit",function(event){
    handleIncoming(event)
})
