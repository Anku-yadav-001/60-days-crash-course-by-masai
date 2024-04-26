// let obj={
//     name:"aman",
//     age:19,
//     study:true,
//     greet:function(){
//         console.log(this)
//     }
// }
// console.log(obj.greet());
// console.log(this);

// function Pepole(name,age,study){
//         this.name=name;
//         this.age=age;
//         this.study=study;
//         this.greet=function(){
//             console.log(`${this.name} everything is done`);
//         }
// }
// function Car(name){
//     this.name=name
// }
// let people1=new Pepole("aman",19,true)
// let car1=new Car("BMW")
// // console.log(people1.greet());
// console.log(people1 instanceof Pepole);
// console.log(car1 instanceof Car);
// console.log(people1 instanceof Car);
// console.log(car1 instanceof Pepole);

function curriedFun(x){
    return function(y){
        return x+y
    }
}
let addition=curriedFun(3)
console.log((addition(5)));