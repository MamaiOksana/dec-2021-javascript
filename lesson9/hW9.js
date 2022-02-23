//Все робити за допомоги js.
//- створити блок,
//    - додати йому класи wrap, collapse, alpha, beta
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//- додати цей блок в body.
//- клонувати його повністю, та додати клон в body.

let div = document.createElement('div')
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.background = 'yellow';
div.style.color = 'blue';
div.style.fontSize = '40px';
document.body.append(div);
let div2 = div.cloneNode(true);
document.body.append(div2);


//- Є масив:
//    ['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.

let info = ['Main','Products','About us','Contacts'];
for (let infoElement of info) {
    console.log(infoElement)
    let li = document.createElement('li');
    li.append('ul');
    console.log(li);
}


//- Є масив
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
console.log(coursesAndDurationArrayElement);
let div = document.createElement('div');
div.innerText = `${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`
    document.body.append(div);
console.log(div);
}


//- Є масив
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesElement of coursesAndDurationArray2) {
    let div = document.createElement('div');
    div.classList.add('item');
    document.body.append(div);
    let h1 = document.createElement('h1');
    h1.classList.add(`heading${coursesElement.title.replace(" ", "")}`);
    console.log(h1);
    div.append(h1);
    let p = document.createElement('p');
    p.classList.add(`description${coursesElement.monthDuration}`);
    console.log(p);
    div.append(p);
    document.body.append(div);
    console.log(div);
}


