let colors = ["red","yellow","blue","pink","orange"];

// for(val of colors){
//     console.log(val);
// }

// for(val of "colors"){
//     console.log(val);
// }


let person = {
    name:"john",
    age:23,
    gender:"M"
}

for(let key in person){
    console.log(person[key]);
    console.log(key);
}