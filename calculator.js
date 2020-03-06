const result = 0;
let typing = false;
let firstNum = "";
let nextNum = "";
let equation = "";
let operator = "";
let answer = 0;
let numbers = 0;
let array_num = -1;
let back_arr = 0;

display();

function display() {
    const output = document.createElement("div");
    output.classList.add("box1");
    output.textContent = "";
    container.appendChild(output);
    const result = document.createElement("div");
    result.classList.add("box2");
    result.textContent = "0";
    container.appendChild(result);

    let tmp_operator = [];
    let num_arr = [];
    //let tmp_arr = [];
    equals.disabled = true;
    back.disabled = true;
    
    //defines function of each button

    document.getElementById("back").addEventListener("click", function(){
        backspace();
    });
    document.getElementById("clear").addEventListener("click", function(){
        clearEntry();
    });
    document.getElementById("1").addEventListener("click", function(){
        joinDigits("1");
    });
    document.getElementById("2").addEventListener("click", function(){
        joinDigits("2");
    });
    document.getElementById("3").addEventListener("click", function(){
        joinDigits("3");
    });
    document.getElementById("4").addEventListener("click", function(){
        joinDigits("4");
    });    
    document.getElementById("5").addEventListener("click", function(){
        joinDigits("5");
    });
    document.getElementById("6").addEventListener("click", function(){
        joinDigits("6");
    });    
    document.getElementById("7").addEventListener("click", function(){
        joinDigits("7");
    });
    document.getElementById("8").addEventListener("click", function(){
        joinDigits("8");
    });    
    document.getElementById("9").addEventListener("click", function(){
        joinDigits("9");
    });
    document.getElementById("0").addEventListener("click", function(){
        joinDigits("0");
    });
    document.getElementById("plus").addEventListener("click", function(){
        clickOperator("+");
    });
    document.getElementById("minus").addEventListener("click", function(){
        clickOperator("-");
    });
    document.getElementById("times").addEventListener("click", function(){
        clickOperator("*");
    });
    document.getElementById("divide").addEventListener("click", function(){
        clickOperator("/");
    });
    document.getElementById("equals").addEventListener("click", function(){
        returnAnswer(equation);
    })
    document.getElementById("dot").addEventListener("click", function(){
        joinDigits("dot");
    })

    //adds keyboard selection of elements

    addEventListener("keydown", function(e) {
        switch(e.keyCode){
        case 8:
            backspace();
            break;
        case 67:
            clearEntry();
            break;
        case 97:
            joinDigits("1");
            break;
        case 98:
            joinDigits("2");
            break;
        case 99:
            joinDigits("3");
            break;
        case 100:
            joinDigits("4");
            break;
        case 101:
            joinDigits("5");
            break;
        case 102:
            joinDigits("6");
            break;
        case 103:
            joinDigits("7");
            break;
        case 104:
            joinDigits("8");
            break;
        case 105:
            joinDigits("9");
            break;
        case 96:
            joinDigits("0");
            break;
        case 110:
            joinDigits(".");
            break;
        case 107:
            clickOperator("+");
            break;
        case 109:
            clickOperator("-");
            break;
        case 106:
            clickOperator("*");
            break;
        case 111:
            clickOperator("/");
            break;
        case 187:
            returnAnswer(equation);
            break;
        }
    })

    //resets calculator when clear is selected

    function clearEntry(){
        console.log("clear");
        firstNum = "";
        nextNum = "";
        equation = "";
        operator = "";
        answer = 0;
        numbers = 0;
        output.textContent = " ";
        result.textContent = "0";
        array_num = "-1";
        tmp_operator = [];
        num_arr = [];
        equals.disabled = true;
        dot.disabled = false;
        back.disabled = true;
    }

    //deletes entry from last button selected

    function backspace() {
        back_arr = firstNum.split("");
        back_arr.pop();
        if (back_arr.length > 0) {
            result.textContent = back_arr.join("");
            firstNum = back_arr.join("");
            back_arr = "";
            return firstNum;
        } else {
            back.disabled = true;
            result.textContent = "";
            firstNum = "";
            back_arr = "";
            return firstNum;
        }
    }

    //join digits on multi-digit numbers into a single number
        
    function joinDigits(n) {
        back.disabled = false;
        if (n === "dot") {
            dot.disabled = true;
            n = ".";
        }
        nextNum = n;
        if (typing == false){
            result.textContent = nextNum;
            firstNum = nextNum;
            typing = true;
            return firstNum;
        } else {
            operate (firstNum, nextNum, n);
            firstNum += nextNum;
            result.textContent = firstNum;
            return firstNum;
        }
    };

    //operates on numbers when an operator is selected

    function clickOperator(x) {
        equation = `${equation} ${firstNum} ${x}`;
        output.textContent = equation;
        typing = false;
        equals.disabled = false;
        dot.disabled = false;
        back.disabled = true;
        tmp_operator.push(x);
        num_arr.push(firstNum);
        return num_arr;
    }

    //returns an answer when equals sign is selected following order of operations

    function returnAnswer(equation) {
        equation = `${equation} ${firstNum}`;
        output.textContent = `${equation} =`;
        num_arr.push(firstNum);
        for (let i=-1; i<tmp_operator.length; i++){
            if (tmp_operator.includes("*")) {
                let a = tmp_operator.indexOf("*");
                answer  = operate(num_arr[a], num_arr[a+1], "*");
                num_arr.splice(a, 2, answer);
                tmp_operator.splice(a, 1);
            } else if (tmp_operator.includes("/")) {
                let a = tmp_operator.indexOf("/");
                answer  = operate(num_arr[a], num_arr[a+1], "/");
                num_arr.splice(a, 2, answer);
                tmp_operator.splice(a, 1); 
            } else {
                console.log(tmp_operator);
                answer  = operate(num_arr[0], num_arr[1], tmp_operator[0]);
                num_arr.splice(0, 2, answer);
                tmp_operator.splice(0, 1);
            }
        }
        result.textContent = parseFloat(answer.toFixed(8));
    }

    function operate(a,b,operator) {
        switch(operator) {
            case "+": 
                return sum(a,b);
            case "-":
                return minus(a,b);
            case "*":
                return times(a,b);
            case "/":
                return divide(a,b);
        }
    }

    function sum(a,b) {
        return parseFloat(a)+parseFloat(b);
    }
    
    function minus(a,b) {
        return a-b;
    }

    function times(a,b) {
        return a*b;
    }

    function divide(a,b) {
        if (b == 0) {
            return result.textContent = "wormhole_created"
        } else {
            return (a/b);
        }
    }

}


