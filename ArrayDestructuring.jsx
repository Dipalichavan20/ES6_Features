let lang = ['react','js','java','html','angular'];

//using es5
// let a=lang[0];
// let b=lang[1];
// let c=lang[2];
// let d=lang[3];

// console.log("Languages "+a+b+c+d);

//using es6

let [a,b,c,d,e]=lang;
console.log(`languages ${a} ${b} ${c}`);

let [p,,,,q] = lang;
console.log(`languages ${p} ${q}`);

let x,y;
[x,y] = lang;
console.log(`languages--> ${x} ${y}`);


//Swap 2 number without thrid variable

let num1= 10;
let num2=20;

//using es5
// let temp=num1;
// num1=num2;
// num2=temp;

[num1,num2]=[num2,num1]

console.log(`value of num1 and num2 is ${num1} ${num2}`);