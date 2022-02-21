//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

 //   - Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"

let byIdContent = document.getElementById('content');
console.log (byIdContent);

//-- отримує текст з блоку з id "rules"

let byIdRules = document.getElementById('rules');
console.log(byIdRules);

//-- замініть текст параграфа з id 'content' на будь-який інший

let anotherTextContent = byIdContent;
console.log(anotherTextContent);
anotherTextContent.innerHTML = 'Всі правила Бійцівського клубу є вірними та патребують перекладу на українську та англійські мови!'

//-- замініть текст параграфа з id 'rules' на будь-який інший

let anotherTextRules = byIdRules;
console.log(anotherTextRules);
anotherTextRules.innerHTML = '1.Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. Второе правило Бойцовского\n' +
    'клуба: никогда никому не рассказывать о Бойцовском клубе. Третье правило Бойцовского клуба: в схватке\n' +
    'участвуют только двое. Четвертое правило Бойцовского клуба: не более одного поединка за один раз.\n' +
    '2.Перше правило Бійцівського клубу: нікому не розповідати про Бойцовський клуб. Друге правило Бойцовського\n' +
    '    клубу: ніколи нікому не розповідати про Бійцівський клуб. Третє правило Бійцівського клубу: у сутичці\n' +
    '    беруть участь лише двоє. Четверте правило Бійцівського клубу: не більше одного поєдинку за один раз.\n' +
    '3.The first rule of Fight Club is: don\'t tell anyone about Fight Club. Second Rule of Fighting\n' +
    '    Club: Never tell anyone about Fight Club. The third rule of Fight Club: in the fight\n' +
    '    only two are involved. Fourth rule of Fight Club: no more than one fight at a time!!!'

//-- змініть кожному елементу колір фону на червоний

let newBackground = document.body.children;
for (let backgroundElement of newBackground) {
    backgroundElement = backgroundElement.style.background = 'red';
}

//-- змініть кожному елементу колір тексту на синій
let newColor = document.body.children;
for (let newColorElement of newColor) {
    newColorElement = newColorElement.style.color = 'blue';
}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log

let listIdRules = document.getElementById('rules');
console.log(listIdRules.classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний

let newColorFc_rules = document.getElementsByClassName('fc_rules');
for (let newColorFcRule of newColorFc_rules) {
    newColorFcRule = newColorFcRule.style.color = 'red';
}
