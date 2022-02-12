//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


let number = (num1, num2, num3) => {
    if(num1<num2 && num1<num3){
         document.write(`<div>${num1}</div>`);
         return num1;
     }else if ( num2<num1 && num2<num3 ){
         document.write(`<div>${num2}</div>`);
         return num2;
    }else {
         document.write(`<div>${num3}</div>`)
        return num3;
     }
}
console.log(number(3, 55, 97));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numberS = (num1, num2, num3) => {
    if( num1 > num2 && num1>num3){
        document.write(`<div>${num1}</div>`);
    return num1;
   }else if ( num2>num1 && num2>num3 ){
        document.write(`<div>${num2}</div>`);
        return num2;
    }else {
        document.write(`<div>${num3}</div>`)
        return num3;
    }
}
console.log(numberS(25, 66, 15));


// - створити функцію яка повертає найбільше число з масиву


let arrayF = (arr) => {
    let max = [0];
    for (let arrElement of arr) {
        if (max < arrElement) {
            max = arrElement;
        }
     }
     return max;
 }
console.log(arrayF([25, 1033, 555]));


// - створити функцію яка повертає найменьше число з масиву

let arrayNew = (arrayNew) => {
    let min = [0];
    for (let arrayNewElement of arrayNew) {
        if (min > arrayNewElement){
    } min = arrayNewElement;
    }
    return min;
}
console.log(arrayNew([36, 88, 30]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = (arrayN) => {
    let i = 0;
    for (let arrayNElement of arrayN) {
        i = i + arrayNElement;
    }
    return i;
}
 console.log(sum([5,15,5]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let midl = (numNew) => {
    let i = 0;
    for (let numNewElement of numNew) {
        i = numNewElement + i;
    }
     i = i / numNew.length;
    return i;
}
 console.log(midl([10,50,30]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let fun = (addNew) => {
    let min = 0;
    let max = 0;
    for (let addNewElement of addNew) {
        if (addNewElement < min){
            min = addNewElement;
        }
        if (addNewElement > max) {
            max = addNewElement;
        }
    }
    console.log(max)
    return min;
}
console.log(fun([55, 2, 99]));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let funRandom = (numbers3) => {
    let i = [];
    for (let h = 0; h<numbers3; h++) {
        i.push(Math.round(Math.random()*100));
    }
    return i;
}
console.log(funRandom([15]));
document.write(`<div>${funRandom(15)}</div>`);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let funRandom2 = (numbers4, limit) => {
    let n = [];
    for (let i = 0; i < numbers4.length; i++) {
        n.push(Math.round(Math.random()*limit));
    }
    return n;
}
console.log(funRandom2([25], 25));
document.write(`<div>${funRandom2(10, 25)}</div>`);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse1 = (arrNew1) => {
    let arr = [];
    let   r = 0;
    for (let i = arrNew1.length-1; i >=0; i--, r++) {
       arr[r] = arrNew1[i];
    }
    return arr;
}
console.log(reverse1([9, 8, 7]));