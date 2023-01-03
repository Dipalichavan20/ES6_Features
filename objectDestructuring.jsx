let person ={
    fname:'john',
    age:25,
    gender:'Male',
    hobbies:{
        first:'cricket',
        sec:'reading'
    }
}

//using es5
console.log("Name is "+ person.fname);

//using es6;
 let {fname:myname,age,gender,hobbies} = person;
 console.log(`Name: ${myname} , age: ${age} , Hobby: ${hobbies.sec}`);