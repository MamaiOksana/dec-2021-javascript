  let time = +prompt('Введіть час від 0 до 59');
  if  (time >= 0 && time <= 14) {
      console.log('Перша чверть')
  } else if (time >= 15 && time <= 29) {
      console.log('Друга чверть')
  } else if (time >= 30 && time <= 44) {
      console.log('Третя чверть')
  } else if (time >= 45 && time <= 59) {
      console.log('Четверта чверть')
  } else {
      console.log('Неправильно введені дані')
  }

let day = +prompt('Ввести число від 1 до 31');
  if (day >= 1 && day <= 10){
      console.log('Перша декада')
  } else if (day >=11 && day <=20){
      console.log('Друга декада')
  } else if (day >=21 && day <=31){
      console.log('Третя декада')
  } else {
      console.log('Неправильно вписані числа')
  }


  let test = 'Winter';
  if (test === true) {
      console.log('Вірно');
  } else {
      console.log('Неправильно');
  }

  let test1 = 'Winter';
  if (test1 === false) {
      console.log('Вірно');
  } else {
      console.log('Неправильно');
  }

  (test !== "Winter") ? console.log('Вірно') : console.log('Неправильно')

  let a = +prompt('Введіть числа 1, 0, -3');
  if (a !== 0) {
      console.log('Вірно')
  } else {
      console.log('Неправильно')
  }

  (a !== 0) ? console.log('Вірно') : console.log('Неправильно')


  let dayOfWeek = prompt('Ведіть день тижня');
  switch (dayOfWeek){
      case 'понеділок':
          console.log('йди на роботу');
          break;
      case 'вівторок':
          console.log('йди на практичне заняття');
          break;
      case 'середа':
          console.log('слухай лекцію');
          break;
      case 'четвер':
          console.log('виконуй практичну роботу');
          break;
      case 'пятниця':
          console.log('заняття у басейні');
          break;
      case 'субота':
          console.log('прибирай у домі');
          break;
      case 'неділя':
          console.log('відпочивай');
          break;
      default:
          console.log("Ти щось не то ввів");
  }

  let year = +prompt('Введіть кількість днів в цьому році');
  if(year % 4 === 0){
      console.log('Рік високосний');
  }else {
      console.log('Рік не високосний');
  }
  

  let officialName = prompt("Яка офіційна назва JavaScript?");
  if (officialName ==='ECMAScript'){
      alert('Правильно');
  }else {
      alert("Не знаєте? ECMAScript!")
  }