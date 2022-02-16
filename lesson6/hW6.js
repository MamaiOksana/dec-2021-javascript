//- Знайти та вивести довижину наступних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'


let text1 = 'hello world';
console.log(text1.length);

let text2 = 'lorem ipsum';
console.log(text2.length);

let text3 = 'javascript is cool';
console.log(text3.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

let uC1 = text1.toUpperCase();
console.log(uC1);

let uC2 = text2.toUpperCase();
console.log(uC2);

let uC3 = text3.toUpperCase();
console.log(uC3);


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lC1 = uC1.toLowerCase();
console.log(lC1);

let lC2 = uC2.toLowerCase();
console.log(lC2);

let lC3 = uC3.toLowerCase();
console.log(lC3);


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let string1 = ' dirty string   ';
let string1New = string1.substring(1, 13);
console.log(string1New);

let string2New = string1.trim();
console.log(string2New);



//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


let stringToarray = (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let aRR = stringToarray(str);
document.write (aRR);
console.log(aRR);


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.substring(0,length);
}
 console.log(delete_characters('Каждый охотник желает знать', 7));


//- Напишіть функцію  insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
 //   let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    let str1 = str.replace(' ', '-');
    return str1.toUpperCase();
}
console.log(insert_dash("HTML JavaScript PHP"));


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


let fun = (str2) => {
    return str2[0].toUpperCase() + str2.slice(1);
}
console.log(fun('hello, world'));



//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
let newStr = str.split(' ');
let newStr1 = newStr.map(textN=>textN.charAt(0).toUpperCase()+textN.slice(1));
    return  newStr1.join(' ');

}

console.log(capitalize('привіт, як у тебе справи?'));
document.write(capitalize('привіт, як у тебе справи?'));