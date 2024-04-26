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
    let ans=await fetch("http://localhost:8080/users")
    let response=await ans.json();
    let isUserValid = response.some((ele) => ele.name === u_name && ele.password === u_password);
  console.log(isUserValid);
  if(isUserValid){
    alert("User login successfully 💥💥")
    let exist=await isCartExist(u_name)
    if(!exist){
      generateCart(u_name)
    }
    window.location.href = `products.html?username=${encodeURIComponent(u_name)}`;

  }


    else{
        alert("Invalid credentials ")
  }
   } catch (error) {
    console.log(error);
   }
  }

form.addEventListener("submit",function(event){
    handleIncoming(event)
})
async function generateCart(username) {
  try {
    
      await fetch(`http://localhost:8080/allUsersCart`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ [username]: [] }) 
      });
  } catch (error) {
      console.log(error);
  }
}

 async function isCartExist(username){
  
     try {
      let response=await fetch(`http://localhost:8080/allUsersCart`)
      let ans= await response.json()
      if (ans.hasOwnProperty(username)) {
        return true;
    } else {
        return false;
    }
     } catch (error) {
      console.log(error);
     }
        
    
}