//=============переменные=============//

// let number = prompt('Угадай число', '');
// if (number == 10) alert ('Верно');
// else alert('Неверно');

// let min = prompt('Который час?', '');
// let message = (min < 0) ? 'минуты не могут быть отрицательные :)' :
//   (min < 15) ? 'первая четверть часа' :
//   (min < 30) ? 'вторая четверть часа' :
//   (min < 45) ? 'третья четверть часа' :
//   (min < 60) ? 'четвертая четверть часа' :
//   'в часу 60 минут :)' ;
// alert(message);

// let a = prompt('Впиши число', '');
// let message = (a > 0) ? 'try' :
//   'false';
// alert(message);

//=======Логическиче операторы=======//

// let a = prompt('Впиши число', '');
//   let message = (a > 0) && (a < 5) ? 'Try' :
//   'false';
// alert(message);

// let a = prompt('Впиши число', '');
//   let message = (a == 0) || (a == 2) ? (+a + 7) :
//   (+a / 10) ;
// alert(message);

// let a = prompt('Переменная "a"','');
// let b = prompt('Переменная "b"','');
//   let message = (a <= 1) && (b >= 3) ? (+a + +b) :
//   (+a - +b);
// alert(message);

// let a = prompt('Переменная "a"','');
// let b = prompt('Переменная "b"','');
//   let message = (11 > a > 2 ) || (6 <= b < 14) ? 'try' :
//   'false';
// alert(message);

//==========Циклы==========//

// let num = 0;
// while (num <= 50) {
//   console.log(num);
//   num++;
// }
// for (let i = 1; i <= 50; i++){
//   document.write(i + '<br>');
// }//тоже самое до 100 :)//

// let num = 11;
// while (num <= 33) {
//   console.log(num);
//   num++;
// }

// for (let i=2; i <= 100; i++) {
//   if (i % 2 == 0) {
//     document.writeln(i + '<br>');
//   }
// }

// function sumTo(n) {
//   return n * (n + 1)/2;
// }
// alert( sumTo(100));

// let n = 1000;
// while (n > 50) {
//   n = n / 2;
// }
// console.log(n);

// for (var n = 1000, num = 0; n > 50; n = n / 2, num++); 
// console.log(n, num); //num-количество интеграций

//==========switch-конструкция==========//

// let num = prompt('Seasons', '');
// switch (+num) {
//   case 1:
//     alert('Winter');
//     break;
//   case 2:
//     alert('Spring');
//     break;
//   case 3:
//     alert('Summer');
//     break;
//   case 4:
//     alert('Autumn');
//     break;
//   default:
//     alert("Нет таких значений");
// }

// let day = prompt('Day of mounth', '');
// let message = (day < 1) ? 'unknown date' :
//   (day < 10) ? 'first decade' :
//   (day < 20) ? 'second decade' :
//   (day < 32) ? 'third decade' :
//   'unknown date';
//   alert(message);

// let month = prompt('month', '');
// if (month == 12 || month <= 2){
//   alert('winter');
// } else if(month >= 3 && month <=5){
//   alert('spring');
// } else if(month >=6 && month <=8){
//   alert('summer');
// } else if(month >=9 && month <=11){
//   alert('autumn');
// }

// let str = 'abcde';
// if (str[0] == 'a') {
// alert('Да');
// } else {
// alert('Нет');
// }

// let str = '123';
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// alert(sum);

// let str = '123456';
// let str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (str1 == str2) {
// alert('Да');
// } else {
// alert('Нет');
// }

// let str = 'abcde';
// alert(str[0]);
// alert(str[1]);
// alert(str[4]);

// let a = prompt('day','');
// alert(60 * 60 * 24 * +a +' seconds');

// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;
// alert(num);

// let str1 = 'Hello, ';
// let str2 = 'World!';
// alert(str1 + str2);

// let name ='Evgeniy';
// alert('Hello,' + name);

// let num = prompt('Enter the num','');
// alert(num*num);

// let num = '12345';
// alert(num[0] * num[1] * num[2] * num[3] * num[4]);

//==========Funcion==========//


// function min(a, b) {
//   if (a > b) {
//     return 1;
//   } else if(a<b){
//     return -1;
//   } else(a=b)
//   return 0;
// }
// console.log(min(3,3));


// showWords = function() {
//   let args = [...arguments];
//   document.write(args.join(' '));
// }
// showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");

// //второй вариант, как лучше?
// showWords = function() {
//   let result = '';
//   let n = arguments.length;
//   for(let i=0; i<n; i++) {
//     result += arguments[i] + " ";
//   }
//   document.write(result);
// }
// showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");

// complexDigit = function() {
//   const args = [...arguments];
//   document.write(args.join(''));
// }
// complexDigit(3,5,6,1,3,4,5);

//==========Объекты==========//

// const user = {
//   name: 'John',
//   surname: 'Smith',
//   name: 'Pete',
// };
// delete user.name;
// console.log(user);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for(let key in salaries){
//   sum += (salaries[key]);
// }
// console.log(sum);


// let menu ={
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(menu);
// myltiplyNumeric(menu);
// function myltiplyNumeric(obj) {
//   for(let key in obj) {
//     if(typeof obj[key] == 'number'){
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(menu);

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(user.age);

// const obj ={
//   id: 5,
//   token: 12343423,
// };
// let keys = object.keys(obj);
// console.log(obj[keys[0]]);

// const obj = {
//   id: 5,
//   token: 12343423,
// };
// let keys = Object.keys(obj);
// console.log(obj[keys[0]]);

//можно и так и так как я понял??

// const obj = {
//   id: 5,
//   token: 12343423,
// };
// let key = "id";
// console.log(obj[key]);

let city1 = {};
  city1.name = "ГородN";
  city1.population = 1e7;

let city2 = {
  name: "ГородM",
  population: 1e6,
};

function getName() { return this.name; }
  city1.getName = getName;
  city2.getName = getName;

function exportStr() { 
  return `name=${this.name}\npopulation=${this.population}\n`; }
city1.exportStr = exportStr;
city2.exportStr = exportStr;
console.log(city1.exportStr());
console.log(city2.exportStr());

function getObj() { return this; }
 function getCity() { return getObj.apply(this).getName(); }
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());
