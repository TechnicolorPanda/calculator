const output = 0;
let typing = false;
let firstNum = "";
let nextNum = "";

display();

function display() {
    const output = document.createElement("div");
    output.classList.add("box");
    output.textContent = "0";
    container.appendChild(output);
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

    function joinNums(n) {
        nextNum = n;
    if (typing == false){
         output.textContent = nextNum;
         firstNum = nextNum;
         typing = true;
    } else {
         firstNum += nextNum;
         output.textContent = firstNum;
     }
    };
}

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

