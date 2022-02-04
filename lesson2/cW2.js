let number1 = +prompt('Введіть перше число');
let number2 = +prompt('Введіть друге число');
if (number1 > number2){
    console.log(number1)
}else if ( number1===number2){
    console.log('Введенні числа рівні')
}else {
    console.log(number2)
}


let numberOfEntrance = +prompt('Ввести число від 1 до 90');
if(numberOfEntrance >= 1 && numberOfEntrance <= 20){
    console.log('Квартира знаходиться у першому підїзді')
}else if (numberOfEntrance >= 21 && numberOfEntrance <= 48){
    console.log('Квартира знаходиться у другому підїзді')
}else if (numberOfEntrance >= 49 && numberOfEntrance <= 90) {
    console.log('Квартира знаходиться у третьому підїзді')
}



let number = +prompt('Введіть числове значення')
if (number === 10) {
    alert('ВІРНО')
}else {
    alert('НЕВІРНО')
}

(+prompt ('Введіть числове значення')  === 10) ? console.log('ВІРНО') : console.log('НЕВІРНО')


let x = prompt('Введіть значення');
if (typeof x === 'number') {
    console.log('1')
}else if (typeof x === "string") {
    console.log('2')
}else if (typeof x === "boolean") {
    console.log('3')
}else if (typeof x === "object") {
    console.log('3')
}else {
    console.log('Неправильно введені дані')
}



let temperature = +prompt('Введіть яка сьогодні температура');
if(temperature >= +10 && temperature <= +22){
    console.log('Ми йдемо ВЧИТИСЯ')
}else{
    console.log('Сидимо вдома і вчимося ОНЛАЙН')
}

(+prompt('Введіть яка сьогодні температура') === temperature >= +10 && temperature <= +22) ? console.log('Ми йдемо ВЧИТИСЯ') : console.log('Сидимо вдома і вчимося ОНЛАЙН');




let lottery = +prompt('Введіть число від 1 до 5');
switch (lottery){
    case 1:
        alert('Вітаємо!! Ви виграли авто!!');
        break
    case 2:
        alert('Вітаємо!! Ви Виграли байк!!');
        break
    case 3:
        alert('Вітаємо!! Ви щойно виграли квартиру!!');
        break
    case 4:
        alert('Вітаємо!! Ви виграли телефон!');
        break
    case 5:
        alert('Вітаємо!! Ви виграли ТОРТ!!');
        break
    default:
        alert('Дане число не вірне!');
}


