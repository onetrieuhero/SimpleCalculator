
let num1 = document.getElementById("firstNum-text-box");
let num2 = document.getElementById("secondNum-text-box");

let submit = document.getElementById("submit");
let result = document.getElementById("result");


submit.addEventListener("click", calculateSums);


function calculateSums(){
    if(num1.value != "" || num1.value != ""){
        let variable1 = parseFloat(num1.value);
        let variable2 = parseFloat(num2.value);

        let dropdown = document.getElementById("dropdown");
        let userInput = dropdown.options[dropdown.selectedIndex].value;

        if(userInput == "add"){
            let newResult = variable1 + variable2;
            result.innerHTML = "The Result is: " + newResult;
        } else if(userInput == "sub"){
            let newResult = variable1 - variable2;
            result.innerHTML = "The Result is: " + newResult;
        } else if (userInput == "mult"){
            let newResult = variable1 * variable2;
            result.innerHTML = "The Result is: " + newResult;
        } else if (userInput == "divide"){
            if(variable2 == 0){
                result.innerHTML = "Can't Divide By Zero";
            }else{
            let newResult = variable1 / variable2;
            result.innerHTML = "The Result is: " + newResult;
            }
        }



    }else{result.innerHTML = "Please Enter a Number";}

}