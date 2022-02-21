//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) додає клас з назвою групи, елементу з ід main_header

//a) додає клас з назвою групи, елементу з ід main_header
let newElem = document.getElementById('main_header');
console.log(newElem);
newElem.classList.add('dec-2021');
console.log(newElem);


//b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
ul[0].style.width = '400 px';

//c) робить шириниу всіх елементів з класом linkList шириною 50%

let classNew = document.getElementsByClassName('linkList');
for (let classNewElement of classNew) {
    classNewElement.style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2
 let listElement2Text = document.getElementsByClassName('listElement2');
console.log(listElement2Text);
console.dir(listElement2Text[0].innerHTML);

//e) отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');
console.log(li);
for (let liElement of li) {
    liElement = liElement.style.background = 'silver';
}

//f) отримує всі елементи 'a' та додає їм клас anchor

let aClass = document.getElementsByTagName('a');
console.log(aClass);
for (let aClass1 of aClass) {
    aClass1.classList.add('anchor');
    console.log(aClass1);
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aClassLink3 = document.getElementsByTagName('a');
console.log(aClassLink3);
for (let aClassLink3Element of aClassLink3) {
    console.log(aClassLink3Element);
    if (aClassLink3Element.innerText === 'link3'){
        aClassLink3Element.style.fontSize = '40px';
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aText = document.getElementsByTagName('a');
console.log(aText);
for (let aTextElement of aText) {
    console.log(aTextElement);
    let newClassA = aTextElement.innerText
    aTextElement.classList.add(`element_${newClassA}`)
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let sub_header = document.getElementsByClassName('sub-header');
console.log(sub_header);
sub_header[0].style.background = prompt('введіть колір фону');
sub_header[1].style.background = prompt('введіть колір фону');


//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let sub_header2 = document.getElementsByClassName('sub-header');
console.log(sub_header2);

for (let subHeader2Element of sub_header2) {
    console.log(subHeader2Element);
    if(subHeader2Element.innerText === 'content 2 segment'){
        subHeader2Element.style.color = prompt('введіть колір тексту')
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1');
console.log(content1);
let newContent1 = content1;
console.log(newContent1);
newContent1.innerText = prompt('введіть тут свій текс');


//l) отримати елементи p та змінити їм padding на 20px

let elementP = document.getElementsByTagName('p');
console.log(elementP);
let padP = elementP[0].style.padding = '20px';
console.log(padP);


//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let classText2 = document.getElementsByClassName('text2');
console.log(classText2);
classText2[0].innerText = 'oct-2022!';
