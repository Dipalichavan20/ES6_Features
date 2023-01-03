function sum(a,b,c) {
    console.log(a+b+c);
}

let myVal =[1,5,3]

//using es5
//sum(2,3,4);
//sum.apply(null,myVal)

//using es6

sum(...myVal);

//concat array
var arr1=[1,2,3];
var arr2 = [4,5,6];
var arr3= [8,9]

//using es5
// arr1=arr1.concat(arr2)
// console.log(arr1);
//using es6
arr1=[...arr1,...arr2,...arr3];
console.log(arr1);

//copy array

let arrc1=[1,2,3];

//using es5
// let arrc2= arrc1;
// console.log(arrc2);
// arrc2.push(4,5);
// console.log(arrc2);
// console.log(arrc1);

//using es6

//let arrc2=[...arrc1]
//console.log(arrc2);
let arrc2=[...arrc1,4,5,6]
console.log(arrc2);
console.log(arrc1);