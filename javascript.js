function add(a,b) {
    return Number(a)+Number(b);
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    if (String(operator) == "+") {
        return add(a,b)
    } else if (String(operator) =="-"){
        return subtract(a,b)
    } else if (String(operator) == "x") {
        return multiply(a,b)
    } else if (String(operator) == "÷") {
        return divide(a,b)
    }
}

const equalsBtn = document.querySelector('#equalsBtn');
const numbers = document.querySelectorAll('.numberBtn');
const viewport1 = document.querySelector('#viewport1');
const viewport2 = document.querySelector('#viewport2');
const deleteBtn = document.querySelector('#deleteBtn');
const decimalBtn = document.querySelector('#decimalBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const clearBtn = document.querySelector('#clearBtn');
const addBtn = document.querySelector('#addBtn');


const operators = ["x","+","-","÷"];

numbers.forEach((number)=> {
    number.addEventListener("click", ()=>{
    viewport1.innerHTML+= number.innerHTML});})

deleteBtn.addEventListener("click", ()=>{
    if (viewport1.innerHTML.length>0) {
    viewport1.innerHTML = viewport1.innerHTML.slice(0, -1)
    } else return;}
)

decimalBtn.addEventListener("click", ()=>{
    if (viewport.innerHTML1.includes(".")) {
        return
    } else {viewport1.innerHTML+= "."}
})

clearBtn.addEventListener("click", ()=> {
    viewport1.innerHTML = "";
    viewport2.innerHTML = ""})

operatorBtn.forEach((operator)=> {
    operator.addEventListener("click", ()=>{
    if (viewport2.innerHTML.length>0) {
        viewport1.innerHTML=viewport2.innerHTML+operator.innerHTML
        viewport2.innerHTML=""
    } else if (operators.some(v => viewport1.innerHTML.includes(v))) {
        return;
    } else {
        viewport1.innerHTML+=operator.innerHTML
    }
        });})

let operationSymbol;
let number1;
let number2;
let computationResult;

equalsBtn.addEventListener("click", ()=> {
    for (let symbol of operators) {
        if (viewport1.innerHTML.includes(symbol)) {
        operationSymbol = symbol;
    };}
    const equation = viewport1.innerHTML.split(operationSymbol);
    number1 = equation[0];
    number2 = equation[1];
    computationResult = operate(operationSymbol,number1,number2)
    viewport2.innerHTML = computationResult;})