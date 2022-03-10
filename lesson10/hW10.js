//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.getElementById('text');
let button = document.getElementById('button');

button.onclick = function (){
    text.style.display = 'none';
};


//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button1 = document.getElementById('button1');
button1.onclick = function () {
button1.style.display = 'none';
};

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('button2').onclick = function (){
    let age = document.getElementById('age').value;
    if (!age) {
        alert('Ви повинні ввести свій вік');
    }else if (+age < 18){
        alert('Вам замало років');
    }else{
        alert('Вітає вас - вам достатньо років для нашого сайту!');
    }
}

//- Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
let headElement = menuElement.querySelector('.head');
headElement.onclick = function (){
    menuElement.classList.toggle('hidden')
}

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.
 let comments = [
     {title: 'milk', body: 'fresh'},
     {title: 'tomato', body: ' super fresh' },
     {title: 'dress', body: 'new collection' }
 ];

let mainDiv = document.createElement('div')
for (let item of comments) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');


    h4.innerText = item.title;
    p.innerText = item.body;
    btn.innerText = 'згорни мене'

    btn.onclick = () => {
        p.classList.add('pHidden');
    }
 div.append(h4, p, btn);
mainDiv.append(div, hr);
}
document.body.appendChild(mainDiv);