//using es5

// function sum(a,b,c,d){
//     console.log(a+b+c+d);
// }

function sum(...numbers){
    console.log(numbers);
    let total=0;
    for (var i of numbers){
        total+=i;
    }
    console.log(total);
}

sum(1,2,3,4,5,6,7,8,9);


function test(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
}

test("yellow","blue","pink","red","black")
