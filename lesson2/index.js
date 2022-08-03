
/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/

console.log("четные числа от 10 до 50");

for (let i = 10; i <= 50; i=i+2) {
    console.log(i);
}

/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/

const me = {
    firstName: "Vadim",
    lastName: "Matveev",
    age: 44,
    hasPets: false
}

console.log(me);

/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/

const original = "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей, что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам";

const array = [
    'я в Симбирск,',    //0 - 2
    'в трактире.',      //1 - 9
    'с утра',           //2 - 11
    'В ту же ночь',     //3 - 0
    'Я остановился',    //4 - 8
    'для закупки',      //5 - 5
    'что и было поручено Савельичу.', //6 - 7
    'приехал',         //7 - 1
    'где должен был',   //8 - 3
    'нужных вещей,',     //9 - 6
    'отправился по лавкам', //10 - 12
    'пробыть сутки',    //11 - 4
    'Савельич'          //12 - 10
]
//              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
const order = [ 3, 7, 0, 8, 11,5, 9, 6, 4, 1, 12, 2, 10 ];

let result = array[ order[0]];
for (let index = 1; index < order.length; index++) {
    result+=` ${array[order[index]]}`;
}

console.log(original);
console.log(result);
console.log(`Строки ${result!==original?"не":""}совпадают.`);


/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/


const displayFullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

displayFullName("Вадим", "Матвеев");

/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/

let curOddNumber = 21;
while (curOddNumber <= 67) {
    console.log(curOddNumber);
    curOddNumber = curOddNumber+2;
}