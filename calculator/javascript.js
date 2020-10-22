var numbers = document.querySelectorAll(".number");

var operators = document.querySelectorAll(".opr");

var equal = document.querySelector(".equal");

var clear=document.querySelector(".clear");

var firstNumber, secondNumber, operation, firstNumber1,len,secondNumber1;

// GETTING NUMBERS

numbers.forEach(assign);

function assign(number, index) {
    number.addEventListener("click", function () {
        document.querySelector(".calculator-screen").value += (9 - index);
        if ((firstNumber1 != 0)&&(operation != " ")){
           secondNumber=document.querySelector(".calculator-screen").value.slice(len);
           secondNumber1=+secondNumber;
        }
    })
}

// GETTING OPERATION

operators.forEach(setOperation);

function setOperation(operator, index) {
    operator.addEventListener("click", function () {
        firstNumber = document.querySelector(".calculator-screen").value;
        firstNumber1 = +firstNumber;
        operation = operator.innerHTML;
        document.querySelector(".calculator-screen").value += operation;
        len=document.querySelector(".calculator-screen").value.length;
        
    })
}

// CALCULATING THE RESULT

equal.addEventListener("click", function () {
    
    if(operation == operators[0].innerHTML){
        document.querySelector(".calculator-screen").value=firstNumber1/secondNumber1;
    }
    
    if(operation == operators[1].innerHTML){
        document.querySelector(".calculator-screen").value=firstNumber1*secondNumber1;
    }
    
    if(operation == operators[2].innerHTML){
        document.querySelector(".calculator-screen").value=firstNumber1-secondNumber1;
    }
    
    if(operation == operators[3].innerHTML){
       document.querySelector(".calculator-screen").value=firstNumber1+secondNumber1;
    }

})

// CLEARING THE SCREEN

clear.addEventListener("click", function () {

    document.querySelector(".calculator-screen").value=" ";

})