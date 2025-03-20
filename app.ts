/*(let message: string = 'Hello, TypeScript!';
let count : number = 10;
console.log(message);
console.log(count);

let num: number = 100;
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(num);
console.log(numbers);
numbers.push(6,7,8,9,10);
console.log(numbers);

let tuple: [string, number] = ['hello', 10];
console.log(tuple);

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
}

let c: Color = Color.Green;
console.log(c);

function add(x: number, y: number, z: number): number {
    return x + y + z;
}

let result_add = add(30, 40, 50);
console.log(result_add);

function sub( x: number, y: number, z:number): number {
    return x - y - z;
}
let result_sub = sub(50, 40, 30);
console.log(result_sub);

function mul(x: number, y: number, z: number): number {
    return x * y * z;
}
let result_mul = mul(2, 3, 4);
console.log(result_mul);

function div(x: number, y: number, z: number): number {
    return x / y / z;
}
let result_div = div(100, 10, 2);
console.log(result_div);



class Car {
    brand: string;
    model: string;
    year: number;
    doors: number;
    color: string;

    constructor(brand: string, model: string, year: number, doors: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.doors = doors;
        this.color = color;
    }

    startEngine() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    stopEngine() {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}

const myCar = new Car('Ford', 'Fiesta', 2019, 4, 'black');

myCar.startEngine();
myCar.stopEngine();

const myCar2 = new Car('BMW', '320i', 2020, 4, 'white');
console.log(myCar2.brand);
console.log(myCar2.model);
console.log(myCar2.year);
console.log(myCar2.doors);
console.log(myCar2.color);
myCar2.startEngine();


class bankaccount {
    private balance: number; //private 외부접근불가
    constructor(initialBalance: number){
        this.balance = initialBalance;
    }

//balance는 private이기 때문에 접근 불가 그러나 deposit/Balance를 통해 접근가능
    deposit(amount: number): void {
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited: ${amount} Your balance is ${this.balance}`);
        } else {
            console.log(`Invalid amount`);
        }
    }

    getBalance(): number {
        return this.balance; 
    }
}

const myaccount = new bankaccount(500000)
myaccount.deposit(100000);
console.log(myaccount.getBalance());


class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makesound(): void {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makesound(): void {
        console.log(`${this.name} barks`);
    }
}
const dog = new Dog("Joy");
dog.makesound();


class Bird {
    fly(): void {
        console.log('The bird is flying');
    }
}

class Eagle extends Bird {
    fly(): void {
        console.log('The eagle is soaring majestically');
    }
}

class Penguin extends Bird {
    fly(): void {
        console.log('The penguin cannot fly');
    }
}

const eagle = new Eagle();
eagle.fly();

const penguin = new Penguin();
penguin.fly();


class Bird {
    species: string;

    constructor(species: string) {
        this.species = species;
    }
    
    fly(): void {
        console.log(`${this.species} is flying`);
    }
}

class Eagle extends Bird {
    constructor() {
        super("Eagle");
    }

    hunt(): void {
        console.log("Eagle is hunting");
    }
}

class Penguin extends Bird {
    constructor() {
        super("Penguin");
    }

    swim(): void {
        console.log("Penguin is swimming");
    }
    
    fly(): void {
        console.log("Penguin cannot fly");
    }
}

const eagle = new Eagle();
console.log(eagle.species);
eagle.fly();
eagle.hunt();

const penguin = new Penguin();
console.log(penguin.species);
penguin.fly();
penguin.swim();


abstract class Animal {
    abstract makesound(): void; 
}

class Cat extends Animal {
    makesound(): void {
        console.log('Meow');
    }
}

const cat = new Cat();
cat.makesound();

class Dog extends Animal {
    makesound(): void {
        console.log('Woof');
    }
}
const dog = new Dog();
dog.makesound();

class Bird extends Animal {
    makesound(): void {
        console.log('Tweet');
    }
}
const bird = new Bird();
bird.makesound();
*/

