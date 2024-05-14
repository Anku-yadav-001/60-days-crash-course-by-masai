//parent function
function foo(){
    function cbFunction(value){
        console.log(value," in parent component");
    }
    bar(cbFunction)
}

//child function
function bar(cb){
    let someval=Math.random()
    console.log(someval, " in child component");
    cb(someval)

}
foo()