//Arrow functions do not have their own "this" binding. 
//Instead, this is lexically scoped, meaning that it refers 
//to the this value of the enclosing lexical context.
const person={
    name:'Haren Sharma',
    age:23,
    regular_fun:function(){
        console.log(`My name is ${this.name}`);
        const arrow_fun=()=>{
            console.log(`My age is ${this.age}`);
        }
        arrow_fun();
    },
    arrow_fun2:()=>{
        console.log(`And I am ${this.age} years old`);
    }
}
person.regular_fun();
//My name is Haren Sharma
//My age is 23
person.arrow_fun2();
//And I am undefined years old

