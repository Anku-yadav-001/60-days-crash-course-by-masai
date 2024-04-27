function generateNumber() {
  // generate a random integer(hint : Math.random)
 let result=Math.floor(Math.random()*101)+1
 let number=document.getElementById('number')
 number.textContent=result
 checkOddEven(result)
}

function checkOddEven(num) {
  // logic for even / odd
  let even_odd=document.getElementById('odd-even')
  if(num%2==0)
  {
    even_odd.textContent="The number is even"
  }
  else{
    even_odd.textContent="The number is odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  button=document.getElementById('generate-number');
  button.addEventListener('click',function()
  {
   generateNumber()
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
