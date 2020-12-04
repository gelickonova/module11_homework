// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

function sum (firstNum){
    return function sum2 (secondNum){
        return firstNum+secondNum;
    }
}

console.log(sum(1)(2));
