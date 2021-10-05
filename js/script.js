let question = prompt(`Выберите операцию: add, sub, mult, div`);
let numOne = +prompt(`Введите первое число:`);
let numTwo = +prompt(`Введите второе число:`);
if (question  === `add`) {
   alert( `${numOne} + ${numTwo} = ${numOne + numTwo}`);
} else if  (question  === `sub`) {
   alert( `${numOne} - ${numTwo} = ${numOne - numTwo}`);
} else if (question  === `mult`) {
   alert( `${numOne} * ${numTwo} = ${numOne * numTwo}`);
} else if (question  === `div`) {
    alert(`${numOne} / ${numTwo} = ${numOne / numTwo}`);
} else {
    alert(`Вероятно, вы ввели что-то неправильно`);
}
