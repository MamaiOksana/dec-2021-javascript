//Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою

let squareRectangle = (p, w) => p*w; console.log(squareRectangle(2, 3));
document.write(`площа прямокутника = ${squareRectangle(2,3)}</br>`);


// - створити функцію яка обчислює та повертає площу кола

let squareCircle = (r) => r * 3.14; console.log(squareCircle(7));
document.write(`площа кола = ${squareCircle(7)}</br>`);


// - створити функцію яка обчислює та повертає площу циліндру

let squareCylinder = (r, hC) => 2*3.14*r*hC; console.log(squareCylinder(2,6));
document.write(`площа кола = ${squareCylinder(2,6)}</br>`);


// - створити функцію яка приймає масив та виводить кожен його елемент

let arrM = [5, 4, 8, 25, false, 'milk'];
let fArr = (arrM) => {
    for (let i = 0; i < arrM.length; i++){
    }
}
fArr(arrM);
console.log(arrM);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let fText = (textN) => {
    for (let i = 0; i < 4; i++) {
        document.write(`<p>${textN}</p>`);
    }
    return textN;
}
fText('hello, mather');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let fText1 = (textE) => {
        for (let i = 0; i < 3; i++) {
            document.write(`<ul><li>${textE}</li></ul>`);
        }
    return textE;
}
fText1('Happy birthday');



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let fText2 = (textA,quantity) => {
    for (let i = 0; i < quantity; i++) {
        document.write(`<ul><li>${textA}</li></ul>`)
    }
    return textA
}
fText2('let it is snow', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let farr = (array1) => {
    document.write(`<ol>`)
    for (let i = 0; i < array1.length; i++) {
        document.write(`<li>${array1[i]}</li>`)
    }
    return array1;
}
farr([true, false, 5, 9, 'foxy']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.

let fArray = (arrayN) => {
    for (let arrayNElement of arrayN) {
        document.write(`<div>${arrayNElement.id}.${arrayNElement.name}-${arrayNElement.age}p.</div>`);
    }
    return arrayN;
}
fArray([{id:1, name: 'Max', age: 29},
            {id:2, name: 'Oksana', age: 31},
            {id:3, name: 'Ivan', age: 39}]);








