//console.log(window.location)
//location.href = 'https://owu.com.ua'

//let use = {name: 'Ivan', age: 31, status: true}
//let us = '{"name":"Ivan", "age":31, "status":true}'
//let us = JSON.stringify(use);
//console.log(use);
//console.log(us);

//localStorage.setItem('key1','value1');

//-створити форму з інпутами для name та age.
//   При відправці форми записати об'єкт в localstorage

let form1 = document.forms.form1;
form1.onsubmit = function (e) {
    e.preventDefault();
   let inputN = e.target.nameU.value;
   let inputA = e.target.age.value;
   let user = {inputN,inputA};
   localStorage.setItem(inputN,JSON.stringify(user));

};


//-створити форму з інпутами для model,type та volume автівки.
//   при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carsA = JSON.parse(localStorage.getItem('cars')) || [];

document.forms.car.onsubmit = function (e){
    e.preventDefault();
    let model = e.target.model.value;
    let type = e.target.type.value;
    let volume = e.target.volume.value;
    let car = {model,type,volume};
carsA.push(car);
localStorage.setItem('cars',JSON.stringify(carsA));
};









