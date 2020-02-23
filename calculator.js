let a = prompt("Select number");
const operator = prompt ("Operator");
let b = prompt("Select another number");
a = Number(a);
b = Number(b);
console.log (a);
console.log (typeof a);
console.log (b);
console.log (operator);
console.log(operate (a,b,operator));

function operate(a,b,operator) {
    switch (operator) {
        case "+": 
            return a + b;
        break;
        case "-":
            return a-b;
        break;
        case "*":
            return a*b;
        break;
        case "/":
            return a/b;
        break;
    }
}



