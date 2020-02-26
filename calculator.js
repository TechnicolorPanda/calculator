const result = 0;
let typing = false;
let firstNum = "";
let nextNum = "";
let equation = "";
let operator = "";
let answer = 0;
let numbers = 0;

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

    //defines function of each button

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
    document.getElementById("clear").addEventListener("click", function(){
        clearEntry();
    })

    //join digits on multi-digit numbers into a single number
        
    function joinDigits(n) {
        nextNum = n;
        numbers++;
        console.log(numbers);
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
        firstNum = 0;
        typing = false;
        operator = x;
    }

    //returns an answer when equals sign is selected

    function returnAnswer(equation) {
        equation = `${equation} ${firstNum}`;
        output.textContent = `${equation} =`;
        for (i=0; i<(numbers-1); i++){
            let tmp_arr = equation.split(/[*+-/]/);
            console.log("i="+i);
            console.log("array i=" + tmp_arr[i]);
            console.log("array i+1=" + tmp_arr[i+1]);
            answer = operate(tmp_arr[i], tmp_arr[i+1], operator);
            result.textContent = answer;
        }
    }

    function operate(a,b,operator) {
        switch (operator) {
            case "+": 
                return parseFloat(a)+parseFloat(b);
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

    //resets calculator when clear is selected

    function clearEntry(){
        console.log("clear");
        typing = false;
        firstNum = "";
        nextNum = "";
        equation = "";
        operator = "";
        answer = 0;
        numbers = 0;
        output.textContent = " ";
        result.textContent = "0";
    }

}


