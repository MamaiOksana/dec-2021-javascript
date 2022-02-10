//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numbers (num1, num2, num3){
    if( num1 < num2 && num1<num3){
        console.log(num1);
        document.write(`<div>${num1}</div>`);
    }else if ( num2<num1 && num2<num3 ){
        console.log(num2);
        document.write(`<div>${num2}</div>`);
    }else {
        console.log(num3)
        document.write(`<div>${num3}</div>`)
    }
}
numbers(45, 58,99);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function numberS (num1, num2, num3){
    if( num1 > num2 && num1>num3){
        console.log(num1);
        document.write(`<div>${num1}</div>`);
    }else if ( num2>num1 && num2>num3 ){
        console.log(num2);
        document.write(`<div>${num2}</div>`);
    }else {
        console.log(num3)
        document.write(`<div>${num3}</div>`)
    }
}
numberS(65, 655, 489);



// - створити функцію яка повертає найбільше число з масиву

let array = [5, 66, 88, 44, 69];
function arrayF(arr){
    let max = [0];
    for (let arrElement of arr) {
        if (max < arrElement) {
            max = arrElement;
        }
    }
    return max;
}
let a =arrayF(array);
console.log(a)


// - створити функцію яка повертає найменьше число з масиву

 let array2 = [54, 96, 77, 55666, -99];
 function arrayF2(arr2){
     let min = arr2[0];
    for (let arr2Element of arr2) {
         if (min > arr2Element) {
           min = arr2Element;
       }
     }
     return min;
 }
 let b = arrayF2(array2);
 console.log(b);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

  let array3 = [8, 2, 10];
 function sum(numbers){
  let i = 0;
 for (let numbersElement of numbers) {
 i = numbersElement + i;
}
return i;
}
let j= sum(array3);
console.log(j);



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let array4 = [5,15,10];
function arithmeticMean(numbers){
    let sum = 0;
    for (let number of numbers) {
        sum = number + sum;
        result = sum / numbers.length;
    }
    return result;
}
let k = arithmeticMean(array4);
console.log(k);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numbers2 (add) {
    let min = arguments [0];
    let max = arguments [0];
    for (let element of arguments) {
        if (element < min){
           min = element;
        }
       if (element > max){
            max= element;
       }
    }
     console.log(max);
    return min;
}
let f = numbers2(99,55,15,8,99);
console.log(f);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


function random(numS){
    let array = [];
    for (let i = 0; i < numS; i++) {
        array.push(Math.round(Math.random()*100));
    }
      return array;
}
document.write(`<div>${random(21)}</div>`);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function random2(lim,limit){
    let array =[];
    for (let i = 0; i < lim; i++) {
        array.push(Math.round(Math.random()*limit));
    }
    return array;
}
document.write(`<div>${random2(15, 200)}</div>`);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function revers (array5){
    let array = [];
    let ri = 0;
    for (let i = array5.length-1; i >= 0; i--, ri++) {
   array[ri] = array5[i];
    }
   return array;
}
console.log(revers([2,3,4]));