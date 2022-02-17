//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars (model, producer, graduation, speed, volume) {
    this.model = model;
    this.producer = producer;
    this.graduation = graduation;
    this.speed = speed;
    this.volume = volume;
    this.drive = function () {
    console.log(`їдемо зі швидкістю ${speed} на годину`);
};
this.info = function (){
    for (let value in this) {
        if (typeof value !== 'function')
            console.log(`${value} - ${this[value]}`)
    }
};
this.newSpeed = function (newsSpeed) {
    this.speed = this.speed + speed;
};
this.changeGraduation = function (newGraduation){
    this.graduation = newGraduation;
};
this.addDriver = function (driver){
    this.driver = driver;
};
}

let addCar = new Cars('BMW', 'Germany', 2018, 250, 3);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.newSpeed(50);
addCar.changeGraduation(2022);
addCar.addDriver('Peter');
console.log(addCar);



//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {
    constructor(model, producer, graduation, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.graduation = graduation;
        this.speed = speed;
        this.volume = volume;
    }
        drive(){
            console.log(`їдемо зі швидкістю ${this.speed} на годину`);
        }
    info (){
        for (let value in this) {
                console.log(`${value} - ${this[value]}`)
        }
    }
    newSpeed (speed) {
        this.speed = this.speed + speed;
    }
    changeGraduation (newGraduation) {
        this.graduation = newGraduation;
    };
    addDriver (driver){
        this.driver = driver;
    }
}
let addCar1 = new Cars('BMW', 'Germany', 2018, 250, 3);
console.log(addCar1);
addCar1.drive();
addCar1.info();
addCar1.newSpeed(40);
addCar1.changeGraduation(2020);
addCar1.addDriver('Pavlo');
console.log(addCar1);


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella (name, age, sizeLegs) {
    this.name = name;
    this.age = age;
    this.sizeLegs = sizeLegs;
}

let cinderellaArray = [
    new Cinderella('Марія', 25, 39),
    new Cinderella('Оля', 27, 36),
    new Cinderella('Женя', 24, 38),
    new Cinderella('Олена', 20, 35),
    new Cinderella('Ніна', 21, 37),
    new Cinderella('Діана', 29, 39),
    new Cinderella('Зоряна', 28, 38),
    new Cinderella('Оксана', 27, 36),
    new Cinderella('Маргарита', 26, 37),
    new Cinderella('Марго', 18, 39),
]
console.log(cinderellaArray);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}
 let prince = new Prince('Ivan', 30, 35);
console.log(prince);


//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let couple = (prince, cinderellaArray) => {
    for (const item of cinderellaArray) {
        if (item.sizeLegs === prince.shoes) {
            return `new girl ${item.name} for prince`
        }
    }
};
 console.log(couple(prince,cinderellaArray));


//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let newGirl = cinderellaArray.find(item => item.sizeLegs === prince.shoes);
console.log(newGirl);