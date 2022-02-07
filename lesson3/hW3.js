//2--створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

let number = [25, 69, 5, 925, 15];
let car = ['kia', 'toyota', 'bmw', 'reno', 'audi'];
let text = ['summer', 125, false, true, 'winter', 2525];
console.log(number);
console.log(car);
console.log(text);

//-- Створити пустий масив.
// Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

let empty = []
    empty [0] = true;
    empty [1] = 1258;
    empty [2] = false;
    empty [3] = 'number';
    empty [4] = 'cars';
    empty [5] = 'boy';
    empty [6] = 100500;
console.log(empty);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.



for (let f=0; f<10; f++) {
    document.write(`<div>taxi</div>`);
    console.log(f);
}

let b = car;
for (let b=0; b<10; b++) {
    document.write(`<div> ${b} cat </br></div>`);
}
console.log(b);


let h = 0;
while (h<20){
    document.write(`<h1>Good morning</h1>`);
    console.log(h);
    h++;
}


let o = 0;
while (o<20){
    document.write(`<h1> ${o} Good morning</h1>`);
    console.log(o);
    o++;
}


//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [10, 45, 75, 55, 7, 11, 8, 9, 4, 2022];
for (let number1=0; number1 < numbers.length; number1++) {
    console.log(numbers[number1]);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let string = ['kia', 'toyota', 'bmw', 'reno', 'audi', 'summer', 'winter', 'lorry', 'like', 'cat'];
for (let string1 = 0; string1 < string.length; string1++) {
    console.log(string[string1]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let text4 = [true, false, 1256, 2022, 1991, 'dog', {}, [], 'mather', 'father'];
for (let text4Element=0; text4Element < text4.length; text4Element++) {
    console.log(text4[text4Element]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let text5 = ['summer', 'winter', 1051245, 'lorry', 'like', 'cat', true, false, 1289, 11];
for (let text5Element=0; text5Element < text5.length; text5Element++) {
    if (typeof text5[text5Element] === 'boolean') {
        console.log(text5[text5Element]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let text6 = ['summer', 'winter', 1051245, 'lorry', 'like', 'cat', true, false, 1289, 11];
for (let text6Element = 0; text6Element < text5.length; text6Element++) {
    if (typeof text6[text6Element] === 'number'){
        console.log(text6[text6Element]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let text7 = ['kia', true, 'toyota', false, 'bmw',1289, 85, 'audi', 'summer'];
for (let text7Element = 0; text7Element < text7.length; text7Element++) {
    if (typeof text7[text7Element] === 'string') {
        console.log(text7[text7Element]);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let box = [];
box [0] = true;
box [1] = false;
box [2] = 5555;
box [3] = 'son';
box [4] = ' car';
box [5] = 'lorry';
box [6] = 'film';
box [7] = 'index';
box [8] = 1235;
box [9] = 165;
for (let box1 = 0; box1 < box.length; box1++) {
   console.log(box[box1]);
}


//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let box5=0; box5 < 10; box5++) {
    document.write(`<h3>${box5}</h3>`);
    console.log(box5);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let box2 = 0; box2<100; box2++) {
    document.write(`<div>${box2}</div>`);
    console.log(box2);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let box3 = 0; box3 < 100; box3+=2) {
    document.write(`<div>${box3}</div>`);
    console.log(box3);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let box4=0; box4<100; box4++) {
    if (box4 %2 ===0) {
        document.write(`<div>${box4}</div>`);
        console.log(box4);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let winter = 0; winter<100; winter++) {
    if (winter %2 ===1) {
        document.write(`<div>${winter}</div>`)
        console.log(winter);
    }
}

