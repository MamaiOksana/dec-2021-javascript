//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname, email, phone) {
this.id = id;
this.name = name;
this.surname = surname;
this.email = email;
this.phone = phone;
}

//створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray = [
    new User (12, 'Коля', 'Дідик', '@jlhjlghlgmail.com', 380694444448),
    new User (21, 'Макс', 'Голик','@jlhоропhlgmail.com', 380631725974),
    new User (36, 'Марія', 'Полик','@jраоаhоропhlgmail.com', 380636925974),
    new User (44, 'Марко', 'Коралик','@hоддорпlgmail.com', 380631728874),
    new User (15, 'Захар', 'Кузьма','@jlhорощккgmail.com', 380631769877),
    new User (6, 'Мирося', 'Факел','@jоооііпhlgmail.com', 380931725974),
    new User (78, 'Оля', 'Вільха','@іііропhlgmail.com', 380931755974),
    new User (18, 'Оксана', 'Китиця','@сссііропhlgmail.com', 380638965974),
    new User (98, 'Михайло', 'Козій','@jlосіhlgmail.com', 38063885574),
    new User (10, 'Іван', 'Смотрик','@jlhсісіоgmail.com', 380631639875)
]

console.log(userArray);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(userArray.filter( value => {
    return value.id % 2 === 0;
}));


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


console.log(userArray.sort((l,q) => l.id - q.id));



//- створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}}


//створити пустий масив, наповнити його 10 об'єктами Client


let clientArray = [
    new Client (22, 'Коля', 'Дідик', '@jlhghlgmail.com', 380694444448, [ 'молоко', 'сир']),
    new Client (21, 'Макс', 'Голик','@jlhропhlgmail.com', 380631725974, ['книжка', 'зошит']),
    new Client (34, 'Марія', 'Полик','@jрааhоропhlgmail.com', 380636925974, ['ручка', 'олівець']),
    new Client (44, 'Марко', 'Коралик','@hоддорlgmail.com', 380631728874, ['лінійка', 'журнал', 'парашут']),
    new Client (15, 'Захар', 'Кузьма','@jlhорощкgmail.com', 380631769877, ['торт']),
    new Client (61, 'Мирося', 'Факел','@jоооііпlgmail.com', 380931725974, ['сумка', 'ноутбук']),
    new Client (8, 'Оля', 'Вільха','@іііропlgmail.com', 380931755974, ['папуга']),
    new Client (1, 'Оксана', 'Китиця','@сссіропhlgmail.com', 380638965974, ['туфлі', 'шкарпетки', 'сукня', 'квіти', 'порошок']),
    new Client (18, 'Михайло', 'Козій','@jlсіhlgmail.com', 38063885574, ['кіт', 'корм']),
    new Client (16, 'Іван', 'Смотрик','@jlhссіоgmail.com', 380631639875, ['фарби', 'мольберт'])
]
console.log(clientArray);


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

 console.log(clientArray.sort((min, max) => min.order.length - max.order.length));
