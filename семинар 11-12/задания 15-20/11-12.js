//Филина Ольга ПИ20-1
//Задание 15
console.log('Задание 15'); 


function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function(){
        console.log(this.from +" "+ this.to);
    };
}

let c1 = ["Москва", "Екатеренбург"]
var c = new Card(c1[0], c1[1]);
c.show();

console.log('\n');


//Задание 16
console.log('Задание 16');

class Human{
    constructor(name, age, height){
    this.name = name,
    this.age = age,
    this.height = height
    }
    getInfo() {
    return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstname() {
        return `${this.name}`;
        }
}    
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
    ];

for (let human of humans)
    console.log(human.getInfo());

console.log('\n');



//Задание 17
console.log('Задание 17');

function sortByName(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}


var users = [["Aнна",154], ["Даниил",186], ["Василий",174]]
console.log(sortByName(users))

function sortByHeight(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j][1] < arr[j + 1][1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

console.log(sortByHeight(users))

console.log('\n');


//Задание 18
console.log('Задание 18');

var dt1 = new Date(2045, 0, 1, 00, 00); 
console.log(dt1);

console.log('\n');

//Задание 19
console.log('Задание 19');

var dt2= parseInt(+new Date()/1000);
console.log(dt2);

console.log('\n');


//Задание 20
console.log('Задание 20');

function getDays(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth-1, 32).getDate();
}

console.log(getDays(2,2021))
