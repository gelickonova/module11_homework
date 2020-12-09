// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.

const powNum = (number, power)=>{
    let x = 1;
    for (let i = 0; i < power; i++) {
        x = x * number;
    }
    return x;
}

const number = 2;
const power = 16;
console.log(powNum(number, power))

// Можно проверить результат сравнивая с Math.pow:
// console.log(`powNum: ${powNum(number, power)}, math.pow: ${Math.pow(number, power)}`)
