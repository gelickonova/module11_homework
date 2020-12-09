// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function isPrime(number) {
    if (number > 1000 || typeof (number) != "number" || isNaN(number)) {
        return ('Данные неверны')
    }
    if (number === 0 || number === 1)
        return (`Число ${number} не является простым`)
    for (let i = 2; i < number / 2 + 1; i++) {
        if (number % i === 0)
            return (`Число ${number} не является простым`)
    }
    return (`Число ${number} простое`)
}

console.log(isPrime(1))
console.log(isPrime(0))
console.log(isPrime(359))
console.log(isPrime('vbnm'))
console.log(isPrime(1000))
console.log(isPrime(1001))
