//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
 //   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let div1 = document.createElement('div');
div1.innerText = 'Блок перший';
div1.style.margin = '25px';
document.body.append(div1);

let div2 = document.createElement('div');
div2.innerText = 'Блок другий';
div2.style.margin = '25px';
document.body.append(div2);

let form1 = document.createElement('form');
form1.setAttribute('name', 'form1');
div1.append(form1);

let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
div2.append(form2);

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');

let input2 = document.createElement('input');
input2.setAttribute('name','input2');

let input3 = document.createElement('input');
input3.setAttribute('name','input3');

let input4 = document.createElement('input');
input4.setAttribute('name','input4')

let btn = document.createElement('button');
btn.innerText = 'Інфо';
btn.style.display = 'block';
btn.style.marginBottom = '20px';
document.body.append(btn);

form1.append(input1, input2);
form2.append(input3, input4);

btn.addEventListener('click', function () {
console.log (document.forms.form1.input1.value);
console.log (document.forms.form1.input2.value);
console.log (document.forms.form2.input3.value);
console.log (document.forms.form2.input4.value);
})

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');
let button2 = document.createElement('button');

button2.innerText = 'створити таблицю';
document.body.append(inputOne, inputTwo, inputThree, button2);
button2.addEventListener('click', function () {
    let line = inputOne.value;
    let column = inputTwo.value;
    let text = inputThree.value;
    function generationTable (line, column, text) {
        let table = document.createElement('table');
        let div = document.createElement('div')

        table.style.border = '2px solid yellow';
        div.append(table);
        document.body.append(div);

        for (let i = 0; i < line; i++) {
            let line =  document.createElement('tr');
            for (let j = 0; j < column; j++) {
              let column = document.createElement('td') ;
              column.style.border = '2px solid blue';
              column.innerText = `${text}`;
              table.append(line);
              line.append(column);
            }
        }
    }
generationTable(line, column, text);

})

//- Сворити масив не цензурних слів.
//    Сворити інпут текстового типу.
//    Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//    Перевірку робити при натисканні на кнопку

let bedWords = ['fuck', 'дурак', 'нахаба', 'свинтус'];
let enterText = document.createElement('input');
let checkButton = document.createElement('button');
checkButton.innerText = 'перевірка на цензуру';
checkButton.style.display = 'block';
enterText.style.marginTop = '20px';
enterText.style.display = 'block';
document.body.append(enterText, checkButton);
checkButton.addEventListener('click', function () {
    let textInput = enterText.value;
    for (let bedWord of bedWords) {
        if (bedWord === textInput) {
            alert('ататата!! так не можна!!!');
            enterText.value = '';
            return;
        }
    }
    if (enterText) {
        alert('це гарне слово!');
        enterText.value = '';
    }
})


//- Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//  Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//  Кинути алерт з попередженням у випадку якщо містить.
//  Перевірку робити при натисканні на кнопку

let bedWords2 = ['fuck', 'дурак', 'нахаба', 'свинтус'];
let enterText2 = document.createElement('input');
let checkButton2 = document.createElement('button');
checkButton2.innerText = 'перевірка на цензуру';

checkButton2.style.display = 'block';
enterText2.style.marginTop = '20px';
enterText2.style.display = 'block';
document.body.append(enterText2, checkButton2);
checkButton2.addEventListener('click', function () {
    let textInput2 = enterText2.value;
    for (let bedWord of bedWords2) {
        if (textInput2.includes(bedWord)) {
            alert('ататата!! так не можна!!!');
            enterText2.value = '';
            return;
        }
    }
    if (enterText2) {
        alert('це гарне слово!');
        enterText2.value = '';
    }
})
