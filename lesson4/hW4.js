//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square (a,b){
    let square = a*b;
    return square;
}
document.write(`площа прямокутника = ${ square(3,2)} </br>`);
console.log(square(3,2));


//- створити функцію яка обчислює та повертає площу кола з радіусом r

function square2 (r){
    let square2 = 3.14*r**2;
    return square2;
}
console.log(square2(5));
document.write(`площа кола = ${square2(5)} </br>`);


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function square3 (h,r) {
    let square3 = 2*3.14*r*h;
    return square3;
}
console.log(square3(5,3));
document.write(`площа циліндра = ${square3(5,3)}</br>`);

//- створити функцію яка приймає масив та виводить кожен його елемент

let arr = [5, 6, 7, true, false, 'mix'];
function arrayElements(arr) {
    for (let j = 0; j < arr.length; j++) {
        document.write(arr[j]);
    }
}
arrayElements(arr);
console.log(arr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    for (let i = 0; i < 5; i++) {
        document.write(`<p>${text}</p>`);
    }
    return text;
}
paragraph(`hello world`);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ul (li3){
    for (let i = 0; i < 1; i++) {
        document.write(`<ul>
                            <li>${li3}</li>
                            <li>${li3}</li>
                            <li>${li3}</li>
                       </ul>`)
    }
    return li3;
}
ul(`sun is soon`);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul2 (li, quantity){
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${li}</li>`);
    }
    return li;
}
ul2(`winter`, 8);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayB = [5, 3,6, true, 'fox'];
function arr2 (newArray){
    document.write(`<ol>`)
    for (let i = 0; i < newArray.length; i++) {
        document.write(`<li>${newArray[i]}</li>`);
    }
    return newArray;
}
arr2(arrayB);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayC = [{id: 1, name: 'Max', age: 25},
              {id: 2, name: 'Ira', age: 23},
              {id: 3, name: 'Oksana', age: 31},
              {id: 4, name: 'Petro', age: 28}];
function arr3(array3) {
    for (let array3Element of array3) {
        document.write(`<div>${array3Element.id}.${array3Element.name},${array3Element.age}</div>`);
    }
}
arr3(arrayC);