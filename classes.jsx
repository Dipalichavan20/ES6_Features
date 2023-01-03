class Student{
    constructor(name,age){
        this.myname = name;
        this.age = age
    }

    show(){
        console.log(`Details of student: Name: ${this.myname} Age: ${this.age}`);

        return `Details of student: 
        Name: ${this.myname} 
        Age: ${this.age}`
    }
}

class Players extends Student{ 
    constructor(name,age,game){
        super(name,age);
        this.game=game;
    }

    playerData(){
        console.log(`${super.show()} and my fav game is ${this.game}`);
    }
}
var obj1= new Student("John",25);
var obj2= new Players("Johns",5,"football");
obj1.show();
obj2.show();
obj2.playerData();