const name = prompt(`Вкажіть ваше ім'я`);
console.log(name);
const secondName = prompt( `Вкажіть ваше по-батькові`);
console.log(secondName);
const age = prompt(`Вкажіть ваш вік`)
console.log(age);
let newPerson = `Вітаю ${name} ${secondName}. Тобі ${age} років.`;
console.log(newPerson);

let greeting = `hello`;
console.log(greeting)
document.write(greeting + "<br/>");
alert(greeting);

let word = `owu`;
console.log(word);
document.write(word + "<br/>");
alert(word);

let word2 = `com`;
console.log(word2);
document.write(word2 + "<br/>");
alert(word2);

let word3 = `ua`;
console.log(word3);
document.write(word3 + "<br/>");
alert(word3);

let number1 = 1;
console.log(number1);
document.write(number1 + "<br/>");
alert(number1);

let number2 = 10
console.log(number2);
document.write(number2 + "<br/>");
alert(number2);

let number3 = -999;
console.log(number3);
document.write(number3 + "<br/>");
alert(number3);

let number4 = 123;
console.log(number4);
document.write(number4 + "<br/>");
alert(number4);

let PI = 3.14;
console.log(PI);
document.write(PI + "<br/>");
alert(PI);

let number5 = 2.7;
console.log(number5);
document.write(number5 + "<br/>");
alert(number5);

let number6 = 16;
console.log(number6);
document.write(number6 + "<br/>");
alert(number6);

let answer1 = `true`;
console.log(answer1);
document.write(answer1 + "<br/>");
alert(answer1);

let answer2 = `false`;
console.log(answer2);
document.write(answer2 + "<br/>");
alert(answer2);



greeting = `hello world`;
console.log(greeting);
document.write(greeting + "<br/>");
alert(greeting);

word = `own`;
console.log(word);
document.write(word + "<br/>");
alert(word);

word2 = `com.gmail`;
console.log(word2);
document.write(word2 + "<br/>");
alert(word2);

word3 = `com.ua`;
console.log(word3);
document.write(word3 + "<br/>");
alert(word3);

number1 = 12;
console.log(number1);
document.write(number1 + "<br/>");
alert(number1);

number2 = 101
console.log(number2);
document.write(number2 + "<br/>");
alert(number2);

number3 = 999;
console.log(number3);
document.write(number3 + "<br/>");
alert(number3);

number4 = 12345;
console.log(number4);
document.write(number4 + "<br/>");
alert(number4);

PI = 3.14587;
console.log(PI);
document.write(PI + "<br/>");
alert(PI);

number5 = 3;
console.log(number5);
document.write(number5 + "<br/>");
alert(number5);

number6 = 36;
console.log(number6);
document.write(number6 + "<br/>");
alert(number6);

answer1 = `always true`;
console.log(answer1);
document.write(answer1 + "<br/>");
alert(answer1);

answer2 = `never false`;
console.log(answer2);
document.write(answer2 + "<br/>");
alert(answer2);

let firstName = `Оксана`;
let middleName = `Ярославівна`;
let lastName = `Мамай`;
let person = firstName+' '+middleName+' '+lastName;
console.log(person);

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);


console.log(5 < 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(5 >= 6);
console.log(10 <= 10);
console.log(10 >= 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 !== '123');

let str = "20";
let d = 5;
document.write(str + d + "<br/>");
document.write(str - d + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");

//в 1му випадку при дії "+" то число завжди зливається зі стрінгою;
//в 2му випадку виконується дія "-" коректно;
//в 3му випадку дія "*" виконується між двома строками, стрінга приймається за число;
// в 4му випадку відбувається дія "/" при якій стрінга приймається за число;