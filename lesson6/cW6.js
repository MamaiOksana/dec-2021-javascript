//- Дано список імен.
//    let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'


let n1 = 'Harry..Potter';
//let n2 = 'Ron---Whisley';
//let n3 = 'Hermione__Granger';

let nameS = (names, gap) => {
    let newNameS = [];
    if (names.includes(gap)) {
        let n = names.split(gap)
        n.forEach((item) => {
            if (item) newNameS.push(item);
        })
        console.log(newNameS.join(' '))
    }
}
nameS (n1,'..');




//   - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


let random = (nums) => {
    let arr = [];
    for (let j = 0; j < nums; j++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}
document.write(`<div>${random(25)}</div>`);
console.log(random(25));


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(random(25).sort ( (u, l) => u - l));


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(random(25).filter(function (number22){
    return number22 % 2 === 0;
}));


//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(random(25).map(numberS => numberS.toString()));


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]//sortNums('descending') // [21,11,3]

let sortNums = (nums,direction) => {
    if (direction ==='asc') return nums.sort((r,y) => r-y);
    if (direction === 'desc') return nums.sort ((r, y) => y-r);
}

console.log(sortNums([5, 25, 66, 54, 7], 'asc'));





//- є масив
//let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((p,g) => g.monthDuration-p.monthDuration));

console.log(coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
}));
