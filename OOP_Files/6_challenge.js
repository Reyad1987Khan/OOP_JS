// class Car {
//     constructor(name,year) {
//         this.name = name;
//         this.year = year;
//     }
//     usedYear() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let bmw = new Car("BMW",2015);
// document.getElementById("demo").innerHTML = "My car name is " + bmw.name + " and age is " + bmw.usedYear();

// class Car{
//     constructor(name,carModel) {
//         this.name = name;
//         this.carModel = carModel
//     }
//     speed(){
//         this.lightOn('450 Km per hour');
//         this.lightOff();
//     };
//     lightOn(speedPower) {
//         console.log(this.carModel + '  '+ speedPower );
//     };
//     lightOff(){
//         console.log(this.carModel)
//     }

// }

// let ferrary = new Car ("Fararry","EK-333");
// ferrary.speed();
// ferrary.lightOn();

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(){
//         return "I have a "+ this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand,mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford","Mustang");
// console.log(myCar.show());

// class Anumal {
//     constructor (name) {
//         this.name = name;
//     }
//     eats(){
//         return this.name + " eats fishes";
//     }
// }

// class AllAnymals extends Anumal{

// }
// let cat = new Anumal("Cat");
// console.log(cat.eats());
// let dogs = new AllAnymals("dogs");
// console.log(dogs.eats());


// const Computer = function(name,model){
//    this.name = name;
//    this.model = model;
// }

// Computer.prototype.aboutComputer = function(){
//     console.log(`The computer name is ${this.name} and model is ${this.model}`)
// }
// const dell = new Computer("Dell","DELL2024")
// const hp = new Computer ('hp','2404011');
// console.log(hp);
// dell.aboutComputer();
// hp.aboutComputer();

// const arr = [20,34,56,79,80,32,6,100];
// const  number = arr.filter(element => {
//     return element % 2 === 0;
// });


// console.log(number)

// Array.prototype.filter = function(){
//     let arr = [];
//     for (let i = 0; i < this.length; i++){
//         // console.log(this[i]);
//         if(this[i] % 2 === 0){
//             arr.push(this[i])
//         };
//     }
//     return arr;

// }
// console.log([2,4,5,6,79,65,67,70].filter());

// let HouseRent = function (amount) {
//     this.amount = amount;

// }

// HouseRent.prototype.increment = function (month) {
//         this.amount += 1000;
//         this.month = month;
//         console.log(`Next year rent will be inrement ${this.amount} from the month of ${this.month}`);
// }

// let myHouseRent = new HouseRent (14500);
// console.log(myHouseRent);
// myHouseRent.increment('December');


// HouseRent.prototype.dicrement = function (month) {
//     this.amount -= 1000;
//     this.month = month;
//     console.log(`Next year rent will be dicrement ${this.amount}`);
// }

// console.log(myHouseRent);
// myHouseRent.dicrement('December');

// class Houserent {
//     constructor (amount){
//         this.amount = amount;
//     }
//     increment(incrementamount,month){
//         this.incrementamount = incrementamount;
//         this.month = month;
//         console.log(`Corrent house rent is ${this.amount}, the increment rent will be  ${this.amount += this.incrementamount} from the month of ${this.month}`)
//     }
// }


// const myHouse = new Houserent (14500);
// myHouse.increment(1200,'December 2024');

// https://www.youtube.com/watch?v=CsMGRkSEXR0&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=8
// Object Oriented Programming Bangla #8 OOP Static Method In Javascript Bangla || Advanced Topic
// const Computer = function (name,model) {
//     this.name = name;
//     this.model = this.model;
// }

// Computer.sayaboutComputer = function (){
//     console.log("This is telling about computer");
// }
// Computer.sayaboutComputer();
// let dell = new Computer ('Dell','D2024001');
// console.log(dell);



// class Houserent {
//     constructor (amount){
//         this.amount = amount;
//     }
//     increment(incrementamount,month){
//         this.incrementamount = incrementamount;
//         this.month = month;
//         console.log(`Corrent house rent is ${this.amount}, the increment rent will be  ${this.amount += this.incrementamount} from the month of ${this.month}`)
//     }
//     static sayaboutComputer = function (){
//             console.log("This is telling about computer");
//         }
// }
// Houserent.sayaboutComputer();
// let myHouse = new Houserent('14500');
// myHouse.increment(1200,'December 2024');

// Object Oriented Programming Bangla #9 Getters and Setters with OOP in Javascript Bangla
// https://www.youtube.com/watch?v=0X0yoRSGSNY&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=10

// class Computer {
//     constructor(name,model){
//         this.name = name;
//         this.model = model;
//     }
//     aboutComputerName (){
//         console.log(`${this.name} ${this.model}`)
//     }
//     get computerName(){
//         return this.name;
//     }
//     set computerName(value){
//         this.name = value;
//     }
// }


// let myComputer = new Computer("Dell","DELL2024");
// console.log(myComputer.computerName);
// myComputer.computerName = "ASUS"
// console.log(myComputer)


// Object Oriented Programming Bangla #10 Object.create() in Javascript Bangla
// https://www.youtube.com/watch?v=RqxbKN6fQ9w&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=10

// const computer = {
//     name: "Dell",
//     model: "D2024001",
//     pcFunction : function (){
//         console.log(`My computer name is : ${this.name} & its model is: ${this.model}`);
//     }
// }

// console.log(computer.pcFunction());

// const computer = {
//     name: "",
//     model: "",
//     pcFunction(){
//         console.log(`My computer name is : ${this.name} & its model is: ${this.model}`);
//     }
// }
// let dell = Object.create(computer);
// dell.name = "Dell";
// dell.model = "D2024001";
// dell.pcFunction();
// console.log(dell);


// Object Oriented Programming Bangla #11 Class Inheritance in javascript || Advanced Topic
// https://www.youtube.com/watch?v=9LSZErdO1gs&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=11


// class Computer {
//     constructor(name,model){
//         this.name = name;
//         this.model = model;
//     }
//     aboutComputer(){
//         console.log(`The cmputer name is ${this.name} and the model is ${this.model}`);
//     }
// }
// Bluprint Object 
// let dell = new Computer("Dell","D2024001");
// dell.aboutComputer();

// class Hp extends Computer{
//     constructor(name,model,warenty){
//         super(name,model)
//         this.warenty = warenty;
//     }
//     aboutWarenty(){
//         console.log(`${this.name} it provides warenty for ${this.warenty}`)
//     }
// }

// let hp = new Hp("Hp","HP2024-001","Five years");
// hp.aboutComputer();
// hp.aboutWarenty();






// Abstraction Introduction :
//  Object Oriented Programming Bangla #12 Class Abstraction in javascript Bangla || Advanced Topic
//  https://www.youtube.com/watch?v=mUSuINqB0jE&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=12

// class Computer{
//     constructor(name,model) {
//         this.name = name;
//         this.model = model;
//     }
//     aboutComputer() {
//         console.log(`My computer name is ${this.name} & it's model is ${this.model}`);
//     }
// }

// class Hp extends Computer{
//     constructor(name,model,warenty){
//         super(name,model)
//         this.warenty = warenty;
//     }
//     aboutWarenty(){
//         console.log(`${this.name} provides ${this.warenty} years warenty`);
//     }
//     useComputer(value) {
//         console.log(`${(this.warenty * 12 * 30)- value * 30} days warenty remaining `);
//     }
// }

// let hp = new Hp('Hp','hp2024001',5);
// // console.log(hp)
// hp.aboutComputer();
// hp.aboutWarenty();
// hp.useComputer(6.7)


// Encapsulation Introduction
// Object Oriented Programming Bangla #13 Encapsulation in javascript Bangla || Advanced Topic
// https://www.youtube.com/watch?v=Cnuqyymx1cg&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=13

// class Computer{
//     // Private Property 
//     #warenty
//     constructor(name,model,warenty){
//         this.name = name;
//         this.model = model;
//         this.#warenty = warenty;
//     }
//     aboutComputer(){
//         this.#aboutWarenty();
//         console.log(`My computer name is ${this.name} & it's model is ${this.model}`);
//     }
//     // Privatr Method 
//     #aboutWarenty(){
//         console.log(`Dell Provides ${this.warenty} warenty`)
//     }
// }

// let dell = new Computer("Dell","D2024-001",'5 Years');
// dell.aboutComputer();
// console.log(dell.warenty);
// dell.aboutWarenty();



// Object Oriented Programming Bangla #14 Polymorphism in javascript Bangla || Advanced Topic
// https://www.youtube.com/watch?v=43OLOa41K9Y&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=14


// class Computer {
//     constructor(name,model) {
//         this.name = name;
//         this.model = model;
//     }
//     aboutComputer(){
//         console.log(`This computer name is ${this.name} and it's model is ${this.model}`);
//     }
// }

// class Hp extends Computer{
//     constructor(name,model,color) {
//         super(name,model);
//         this.color = color;
//     }
//     aboutComputer(){
//         console.log(`This computer name is ${this.name} , it's model is ${this.model} and the color is '${this.color}'`);
//     }
// }

// let hp2 = new Hp('HP-Prow','HP2024001','Parl');
// let hp3 = new Hp('HP-Prow','HP2024001','Gray');
// hp2.aboutComputer();
// hp3.aboutComputer();


// Object Oriented Programming Bangla #15 Javascript Advanced OOP Full Course Overview by Code ABC
// https://www.youtube.com/watch?v=8ufHY8T9YOo&list=PL2ozzDVxiDadtyMfWsB7tCJjuDlZWAKTl&index=15


class Car {
    constructor(name,tier,){
        this.name = name;
        this.tier = tier;
    }
    aboutCar() {
        return `This car name is ${this.name} and it's have ${this.tier} tiers` ;
    }
    static staticMethod(){
        return `You could'not access this mehod in instance`
    }
    get getName(){
        return `The car name is ${this.name}`
    }
    set getName(value){
        this.name = value;
    }
}

class Premio {
    constructor(name,tier,light){
        this.name = name;
        this.tier = tier;
        this.light = light;
    }
        aboutCar(){
        console.log(`This computer name is ${this.name} , it's model is ${this.model} and the color is '${this.color}'`);
    }
}
let premio1 = new Premio('Primeo',4,6)
console.log(premio1);
console.log(premio1.aboutCar());

// const ferrari = new Car ('Farrary',4);
// console.log(Car.staticMethod());
// console.log(ferrari.getName);
// console.log(ferrari.getName = 'Ayan');
// Car.staticMethod();
// console.log(Car.prototype);
// console.log(ferrari.__proto__);