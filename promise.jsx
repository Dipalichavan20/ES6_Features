//in promise we need to call excutor function. It has 2 aargumrnts(resolve,reject)
var pobj = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let rollno=[1,2,3,4,5];
        resolve(rollno);
      // reject("Error while communicating...");
    }, 2000);
})

const getInfo = (index) =>{
    return new Promise((resolve,reject)=>{
        setTimeout((index) => {
            let person={
                fname:"john",
                age:25
            }
            resolve(`Roll no ${index} name ${person.fname} age:${person.age}`)
        }, 2000, index);
    })
}

//retrive / consume data
pobj.then((rollno)=>{
    console.log(rollno);
    // getInfo(rollno[2]).then((x)=>{
    //     console.log(x);
    // })
    return getInfo(rollno[2]);
}).then((e)=>{
    console.log(e);
}).catch((error)=>{
    console.log(error);
})