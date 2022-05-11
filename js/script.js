//=============переменные=============//

// const number = prompt('Угадай число', '');
//   if (number == 10) {
//     alert('Верно');
//   } else {
//     alert('Неверно');
//   }

// let min = prompt ('Который час?', '');
//   if (min < 0) {
//     alert('минуты не могут быть отрицательные');
//   } else if (min < 15) {
//     alert('первая четверть часа');
//   } else if (min < 30) {
//     alert('вторая четверть часа');
//   } else if (min < 45) {
//     alert('третья четверть часа')
//   } else if (min < 60) {
//     alert('четвертая четверть часа');
//   } else {
//     alert('в часу 60 минут');
//   }

// let a = prompt('Впиши число', '');

// let message = a > 0
//   ? 'try'
//   : 'false';

// alert(message);

//=======Логическиче операторы=======//

// let a = prompt('Впиши число', '');
//   let message = (a > 0) && (a < 5) ? 'Try' :
//   'false';
// alert(message);

// let a = prompt('Впиши число', '');
//   let message = a === 0 || a === 2 ? +a + 7
//   : (+a / 10) ;
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
// for (let i = 1; i <= 50; i++) {
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
// alert ( sumTo(100));

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
// for(let key in salaries) {
//   sum += (salaries[key]);
// }
// console.log(sum);


// let menu ={
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(menu);
// multiplyNumeric(menu);
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
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
// let keys = Object.keys(obj);
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

// const obj = {
//   id: 5,
//   token: 12343423,
// };
// const {id, ...rest} = obj;
// console.log(id);

// let city1 = {};
//   city1.name = "ГородN";
//   city1.population = 1e7;

// let city2 = {
//   name: "ГородM",
//   population: 1e6,
// };

// function getName() { return this.name;}
//   city1.getName = getName;
//   city2.getName = getName;

// function exportStr() { 
//   return `name=${this.name}\npopulation=${this.population}\n`;
// }

// city1.exportStr = exportStr;
// city2.exportStr = exportStr;

// console.log(city1.exportStr());
// console.log(city2.exportStr());

// function getObj() { return this; }
// function getCity() { return getObj.apply(this).getName();
// }

// city1.getCity = getObj;
// city2.getCity = getObj;

// console.log(city1.getCity());
// console.log(city2.getCity());

// let calculator = new Calculator();
// calculator.read();

// function Calculator() {

// this.read = function() {
//   this.a = +prompt('Введите значение "a"', 0);
//   this.b = +prompt('Введите значение "b"', 0);
// };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   }
// }

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// let accumulator = new Accumulator(7);
// accumulator.read();

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function(){
//     this.value += +prompt('Прибавь число', '');
//   };
// }

// alert(accumulator.value);

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// let myFather = new Person("Стрелюков", "Михаил", 56, "Голубой");

// console.log("Моему отцу " + myFather.age + ".");

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("вася"));

// let style = [" Джаз" , " Блюз"];

// style.push (" Рок-н-ролл");

// style[1] = " Классика";
// alert(style);

// alert(style.shift([1]));

// style.unshift(" Реп", " Регги");
// alert(style);

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum;
// }

// alert(sumSalaries(salaries));

// let user = {
//   name: 'John',
//   age: 30
//   };

// function count(obj) {
//   return Object.keys(obj).length;
// }

// console.log(count(user));

// let arr = ["Vasya", "Petrovich"];

// let [firstName, surname] = arr;

// alert(firstName);

//task 1;
// const func = (a, b) => a === b;

// console.log(func(2, 2));

//task 2;
// const func = (a, b) => a + b > 10;

// console.log(func(2, 2));

//task 3;
// const func = (a) => a < 0;

// console.log(func(-1));

//task 4;
// let str = '';

// for(let i = 1; i <=9 ; i++) {
//   str = str + i;
// }

// console.log(str);

//task 5;
// let str = "";

// for(i = 0; i < 20; i++) {
// console.log(str += "x")
// }

// task 6;
// for (let i = 1; i <= 9; i++) {
//   let str = '';

//   for (let j = 1; j <= i; j++) {
//     str = str + i;
//   }
//   console.log(str);
// }

// task 7;
// let str = "";

// for(i = 0; i<5; i++){
//   console.log(str += "xx")
// }

// task 8;
// for(i = 1; i <= 9; i++) {
//   str = '';

//   for(j = 1; j <= 3; j++){
//     str = str + i;
//   }
//   console.log(str);
// }

// Array tasks 1;
// const array1 =['a', 'b', 'c'];
// const array2 = [1, 2, 3];
// console.log(array1.concat(array2));

// const array3 = [...array1, ...array2];
// console.log(array3);

// Array tasks 2;
// const array = ['a', 'b', 'c'];
// array.push(1, 2, 3);

// console.log(array);

// Array tasks 3;
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2);

// console.log(array);

// Array tasks 4;
// const array = [1, 2, 3, 4, 5];
// const removed = array.splice(1, 3);

// console.log(removed);

// Array tasks 5;
// const array = [1, 2, 3, 4, 5];
// array.splice(2, 0, 'a', 'b', 'c');

// console.log(array);

// Array tasks 6;
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 'a', 'b'), array.splice(6, 0, 'c'), array.splice(8, 0, 'e');

// console.log(array);

// Array tasks 7;
// const array = [3, 4, 1, 2, 7];

// console.log(array.sort());

// // Array tasks 8;
// const obj = {
//   js: 'test',
//   jq: 'hello',
//   css: 'world',
// };

// console.log(Object.keys(obj));

// Array tasks 9;
// const str = '123456';
// revStr = str.split('').reverse().join('');
// console.log(revStr);

// Array tasks 10/11;
// const veb = 'https://docs.google.com/';
// const str = 'index.html';

// console.log(veb.indexOf('https://'));
// console.log(str.lastIndexOf('.html'));

// Array tasks 12;
// const array = [1, 2, 3, 4, 5];

// console.log(array.includes(5));

// Array tasks 13;
// let num = 31;
// let result = false;
// for(i = 2; i < num; i++) { 
//   if(num % i == 0){
//   result = true;
//   break; 
//   }
// }
// if(result == true) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// Array tasks 14;
// let num = [1, 2, 3,2, 4, 5];
// let result = false;
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] == num[i+1]) {
//     result = true;
//     break;
//     }
//   }

//   if (result == true) {
//   console.log('yes');
//   } else {
//   console.log('no');
//   }

// Array tasks 15;
// const arr = [];
//   for (i = 1; i <= 9; i++) {
//     str = '';
//     for (j = 0; j < i; j++) {
//       str += i;
//     }
//     arr.push(str);
//   }
// console.log(arr);

// Function tasks 1;
// function arrayFill(value, length) {
//   let arr = [];
//   for(i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
// const data = 3;
// const valueToFill = 'a';
// console.log(arrayFill(valueToFill, data));

// Function tasks 2;
// const data = [1, 2, 3];
// const result = [];
// for(i = data.length - 1; i >= 0; --i) {
//   result.push(data[i]);
// }
// console.log(result);

// // Function tasks 3;
// const data = [0, 1, false, 2, undefined, '', 3, null];

// function compact(arr) {
//   return arr.filter(function(a) { 
//     return a;
//   });
// }

// console.log(compact(data));

// Function tasks 4;
// const data = [['a', 1], ['b', 2]];
// const fromPairs = array => {
// const obj = {};
// for(i = 0; i < array.length; i++) {
//   obj[array[i][0]] = array[i][1];
// }
// return obj;
// };
// console.log(fromPairs(data));

// Function tasks 5;
// const data = [1,2,3,2,1]
// const without = (arr, ...args) => arr.filter((el) => !args.includes(el)); 
// console.log(without(data, 3, 1));

// Function tasks 6;
// const data = [1, 2, 1, 2, 3];
// function unique () {return data.filter((e,i,a) => a.indexOf(e) == i)}

// console.log(unique(data));

// Function tasks 7;
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];

// let isEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.sort().every(function(value, index) { return value === arr2.sort()[index]});

// console.log(isEqual(arr1, arr2));
// console.log(isEqual(arr1, arr3));
// console.log(isEqual(arr1, arr4));

// Function tasks 8;
// const data = [1, 2, 3, 4, 5, 6, 7]; 
// const size = 3;
// const chunk = (data, size) => {
//   const arr = [];
//   let index = 0;
//   while (index < data.length) {
//     arr.push(data.slice(index, size + index));
//     index += size;
//   }
//   return arr;
// };

// console.log(chunk(data, 2));
// console.log(chunk(data, 3));

// Function tasks 9;
// let arr = [[1, 2, 3], [4, 8], [7]];
// let sum = 0;
// for(i = 0; i < arr.length; i++) {
//   for(j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

//перечитал теорию, придумал полегче решение:)
// let arr = [[1, 2, 3], [4, 5], [7]];
// let result = arr.flat() .reduce((sum, current) => sum + current);
// console.log(result);

// Function tasks 10;
// const arr = [1, 4, 0, -2, 3, -1];
// let isPositive = num => num >= 0;
// let newArr = [];
// for(i = 0; i <= arr.length; i++) {
//   if(isPositive(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// Function tasks 11;
// function getDigitsSum(num) {
// let str = String(num);
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//   sum += Number(str[i]);
// }
// return sum;
// }

// console.log(getDigitsSum(123));

// Function tasks 12;
// let ucFirst = str => str[0].toUpperCase() + str.slice(1);

// console.log(ucFirst('kathrynowy'));

// Recursion tasks 1;

// Recursion tasks 2;
// let arr = [12, 23, 34, 45]
// function numArray(i) {
//   console.log(arr[i++]);
//   if(i < arr.length) {
//     numArray(i);
//   }
// }
// numArray(0);

// Recursion tasks 3;
// var num = 12325;
// function resultSum(num) {
//     if (num === 0) return 0;
//     return num % 9;
// }

// console.log(resultSum(num));
