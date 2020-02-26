const result = 0;
let typing = false;
let firstNum = "";
let nextNum = "";
let equation = "";
let operator = "";

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

    document.getElementById("1").addEventListener("click", function(){
        joinNums("1");
    });
    document.getElementById("2").addEventListener("click", function(){
        joinNums("2");
    });
    document.getElementById("3").addEventListener("click", function(){
        joinNums("3");
    });
    document.getElementById("4").addEventListener("click", function(){
        joinNums("4");
    });    
    document.getElementById("5").addEventListener("click", function(){
        joinNums("5");
    });
    document.getElementById("6").addEventListener("click", function(){
        joinNums("6");
    });    
    document.getElementById("7").addEventListener("click", function(){
        joinNums("7");
    });
    document.getElementById("8").addEventListener("click", function(){
        joinNums("8");
    });    
    document.getElementById("9").addEventListener("click", function(){
        joinNums("9");
    });
    document.getElementById("0").addEventListener("click", function(){
        joinNums("0");
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
        
    function joinNums(n) {
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

    function clickOperator(x) {
        equation = `${equation} ${firstNum} ${x}`;
        output.textContent = equation;
        firstNum = 0;
        typing = false;
        operator = x;
    }

    function operate(a,b,operator) {
        switch (operator) {
            case "+": 
                return a+b;
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

    function returnAnswer(equation) {
        equation = `${equation} ${firstNum}`;
        output.textContent = `${equation} =`;
        let tmp_arr = equation.split(/[*+-/]/);
        console.log(tmp_arr[0]);
        console.log(tmp_arr[1]);
        let answer = operate(tmp_arr[0], tmp_arr[1], operator);
        result.textContent = answer;
    }
}

function operate(a,b,operator) {
    switch (operator) {
        case "+": 
            return a+b;
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

