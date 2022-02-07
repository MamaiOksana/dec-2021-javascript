// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbers =[2,17,13,6,22,31,45,66,100,-18];

//перебрати його циклом for
for (let number = 0; number<numbers.length; number++) {
    console.log(numbers[number]);
}

//перебрати його циклом while
number = 0;
 while (number<numbers.length) {
    console.log(numbers[number]);
    number++;
 }

//перебрати циклом while та вивести  числа тільки з непарним індексом
number=0;
 while (number<numbers.length){
     if (number %2 === 1){
         console.log(numbers[number]);
     }
     number++;
 }

 //4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let number = 0; number<numbers.length; number++) {
    if(number %2 === 1){
        console.log(numbers[number]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення

number=0;
while (number<numbers.length){
    if (numbers[number] %2 === 0){
        console.log(numbers[number]);
    }
    number++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let number =0; number<numbers.length; number++) {
    if(numbers[number] %2 ===0){
        console.log(numbers[number]);
    }
}

//7. замінити кожне число кратне 3 на слово "okten"
for (let number =0; number<numbers.length; number++) {
    if (number % 3 === 0) {
        numbers[number] = "octen";
        console.log(numbers[number]);
    }
}

// 8. вивести масив в зворотньому порядку.

let numberS =[2,17,13,6,22,31,45,66,100,-18];
for (let number = numberS.length - 1; number >= 0; number--) {
    console.log(numberS[number]);
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (ззаду на перед)
let numS =[2,17,13,6,22,31,45,66,100,-18];

//1.перебрати його циклом for (ззаду на перед)

for (let s = numS.length - 1; s >= 0; s--) {
    console.log(numS[s]);
}

 //2.перебрати його циклом while (ззаду на перед)

 num=10;
while (num--) {
    console.log(numS[num]);
}

// 3.перебрати циклом while та вивести  числа тільки з непарним індексом (ззаду на перед)

num=10;
while (num--) {
    if (num % 2 === 1) {
        console.log(numS[num]);
    }
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом (ззаду на перед)

for (let num = numS.length-1; num>=0; num--) {
    if(num %2 === 1){
        console.log(numS[num]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення (ззаду на перед)

  num = 10;
 while (num--){
 if (numS[num] %2 === 0){
    console.log(numS[num]);
  }
 }


// 6. перебрати циклом for та вивести  числа тільки парні  значення (ззаду на перед)

for (let num = numS.length-1; num>=0; num--) {
    if (numS[num] % 2 === 0) {
        console.log(numS[num]);
    }
}


// 7. замінити кожне число кратне 3 на слово "okten" (ззаду на перед)

 for (let num = numS.length-1; num>=0; num--) {
    if (num % 3 === 0) {
     numS[num] = "octen";
   console.log(numS[num]);
   }
 }