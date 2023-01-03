let x=88;
let y=Infinity;
let n=NaN;
let str="vvv"
let z=9.7

console.log(isFinite(x)); //true
console.log(isFinite(y));//false
console.log(isFinite(n));//false
console.log(Number.isFinite(n));//false

console.log(isNaN(x)); //false
console.log(isNaN(str)); //true
console.log(isNaN(n));  //true

console.log(Number.isInteger(x)); //true
console.log(Number.isInteger(z)); //false