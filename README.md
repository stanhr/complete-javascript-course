# complete-js-course

# Fundamentals — Part 1

— в JS все целые числа с точкой (десятичные) под капотом. В пайтоне там разные типы данных для этого.

— Operator Precedence

— В консоле браузера можно продолжать работать с операторами и кодом, например что-то посчитать из тех переменных что есть на странице.

— Template literals:
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

— область видимости / доступности переменной. изучим позднее.

— Type Coersion. При сложении строк будет конкатенация, при вычитании строк попытается перевести в числа и отнять: "1"+"0"+"3"-3+10 // будет 110

— Truthy and Falsy Values. 5 falsy values: 0, '', undefined, null, NaN — которые при попытке конвертирования в булиновое значение станут false. Все остальные значения: не пустая строка, цифра отличная от нуля и тд буду true значения.
Truthy and Falsy Values нужно понимать когда они используются в операторах сравнения и условиях if else, к примеру.

— Желательно всегда использовать strict equality === строгое сравнение. Чтобы избегать type coersion и возможные связанные баги с этим. Или не равняется: !===

# Fundamentals — Part 2

— 'use strict'; активирует strict mode, нужно его в начало скрипта ставить. Применяется к коду после него. Позволяет избежать коды: он делает определенные вещи и делает видимость в конкретных ситуациях — выдает ошибки, вместо того чтобы просто тихо зафейлится, без видимых ошибок. Например: показывает ошибку если переменная была не обьявлена; показывает ошибку, если мы использовали слово в названии переменной, которое зарезервировано джаваскриптом.

## Функции

— Как аля переменные для кусков кода. Для того чтобы переиспользовать код.

— Могут принимать входящие данные (аргументы), могут возвращать / return данные

— Вызываются просто nameOfFunction(argument1, argument2);

— Если указали return, то в месте вызова функции вернется значение return.

— Принцип DRY (Don't repeat yourself) позволяют реализовать функции в т.ч.

— После return внутри функции, выполнение прекращается, поэтому все что ниже уже не работает. Так как функция вернула значение и вышла.

## Function Declarations vs. Function Expressions

— В Function Declarations функцию можно вызвать еще до обьявления ее, в отличии от Function Expressions

— Какую юзать — предпочтение каждого, но нужно знать как работают оба варианта.

## Arrays / Массивы

— метод пуш arrayName.push добавляет элемент/value в конец массива, а метод .unshift добавляет элемент в начало массива.
— метод названиеМассива.pop(); удалит последний элемент в массиве. Этот метод как value вернет сам элемент, который был удален, если например сохранить его в переменную и открыть. А метод .shift(); удалит первый элемент в массиве и соответственно вернет его, по аналогии с попом, как value — что было удалено.
— метод .indexOf("value"); вернет числовое значение индекса, под котором value хранится. А если запросить велью которого нет в массиве — то выведет "-1"
— метод .includes("value") вернет true/false, есть ли такой value в массиве; // строгое сравнение ===

## Обьекты

— получить какое-то свойство обьекта через dot notation и через bracket notation, примеры:
let objectName = {
property1: "value1",
property2: "value2"
}
console.log(objectName.property1);
console.log(objectName["property1"]);

— Разница в том что в bracket notation можно использовать expression и получить value названия этого property, например в следствии конкатенации строк. // пример есть в лекции, если не понятно.

— А в dot notation нужно только указывать полное точное имя property обьекта. Получить его в следствии результата выражения невозможно.

— Также dot notation и bracket notation можно использовать для добавления параметра в обьект:
// чтобы добавить значения:
objectName.property3 = "value3";
objectName["property4"] = "value4";
console.log(objectName);

— Любая функция, которая прикреплена к обьекту (внутри прописана), называется методом. 

— .this значит что этот обьект, из которого вызывается метод. .this в консоль вернет полностью весь обьект. 