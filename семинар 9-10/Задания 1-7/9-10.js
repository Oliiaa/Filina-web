//Филина Ольга ПИ20-1

//Задание 1
console.log('Задание 1');
var str = "";
while (str.length<7) console.log(str+="#");
console.log('\n');


//Задание 2
console.log('Задание 2');
for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(i);  
    }      
}
console.log('\n');


//Задание 3
console.log('Задание 3');
var str=""
for (var i = 1; i < 64; i++) {
    if (i >8 && i % 9 == 0) {
        str+='\n'
    } else if (i % 2 == 0) {
        str+=' '
    } else if (i % 2 == 1) {
        str+='#'
    }      
}
console.log(str);
console.log('\n');


// Задание 4
console.log('Задание 4');
function min(first,second) {
    if (first < second) {
        console.log('Минимальное число: ', first);
    } else if (second < first) {
        console.log('Минимальное число: ', second);
    }else if (first == second) {
        console.log('Числа равны: ', first);
    }
}
min(43, 56);
console.log('\n');



//Задание 5
console.log('Задание 5');
function countBs(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == 'В'){
            count++;
        }
    }
    console.log(`Всего русских букв В = ${count}`);
}

function countChar(str, letter){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == letter){
            count++;
        }
    }
    console.log(`Всего русских букв ${letter} = ${count}`);
}
countBs("ПривВВвет, как у вас дела?");
countChar("Приввввет, как у вас дела?", 'а');
console.log('\n');



//Задание 6
console.log('Задание 6');
function range(first,second, step=1) {
    let arr=[];
    console.log(`Шаг равен ${step}`)
    if (Number(step) < 0) {
        for (i=first; i>=second; i+=step) {
            arr.push(i);
        }
    } else if (Number(step > 0)) {
        for (i=first; i<=second; i+=step) {
            arr.push(i);
        }
    }
    console.log(`Итоговый массив [${arr}]`);
}

range(1, 10)
range(1, 10, 2)
range(5, 2, -1)

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(`Сумма ${arr} равна ${sum}`);
}

sum([2, 21, 32, 54]);


console.log('\n');


//Задание 7
console.log('Задание 7');
function reverseArray(arr){
    neww = [];
    let j = 0;
    for (let i = arr.length-1; i > -1; i--){
        neww[j] = arr[i];
        j++;
    }
    console.log(`Перевернутый массив [${neww}]`);
}
reverseArray([1,2,3,4,5]);

function reverseArrayInPlace(arr){
    for (let i = 0; i < arr.length/2; i++){
        let t = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = t;
    }
    console.log(`Перевернутый массив [${arr}]`);
}

reverseArrayInPlace([1,2,3,4,5,6,7,8]);