let output = document.getElementById('output');
let storedValues = [];

let btn = document.getElementsByClassName('btn');
//Classes throw an HTML collection so event listener must be added via indexer
for (i=0; i < btn.length; i++){
    btn[i].addEventListener('click', buttonClick);
}


function currentValue() {
    let currentValue = document.getElementById('output').innerHTML;
     if (currentValue === "+" || currentValue === "-" ||
    currentValue === "*" || currentValue === "/") {
        return currentValue;
    }
    //Producing string elements on click, convert to number
    currentValue = parseInt(currentValue);
    return currentValue;
}

//Displays button clicked in DOM
function buttonClick() {
    let btnClicked = this.innerHTML;
    output.textContent = btnClicked;
    addClick();
}

function addClick() {
    let toAdd = currentValue();
    storedValues.push(toAdd);

}

//Produces answer when equals button clicked
function equals(event) {
    let equals = document.getElementById('equals');
    equals.addEventListener('click', function(event) {
        let val1 = storedValues[0];
        let val2 = storedValues[2];
        let op = storedValues[1];
        let answer = operate(op, val1, val2);
        output.textContent = answer;
    })
}
equals(event)



//To call, operator must be string or else there is an error
function operate(operator, num1, num2){
    if (operator === "+") {
        return math.add(num1, num2);
    } else if (operator === '-') {
        return math.subtract(num1, num2);
    } else if (operator === '*') {
        return math.multiply(num1, num2);
    } else if (operator === '/') {
        return math.divide(num1, num2);
    } else {
        alert('Something has gone wrong!');
    }
}

let math = {
    add: function add(addNum, addNum2) {
        return addNum + addNum2;
    },

    subtract: function subtract(subNum, subNum2) {
        return subNum - subNum2;
    },

    multiply: function multiply(multNum, multNum2) {
        return multNum * multNum2;
    },

    divide: function divide(divNum, divNum2) {
        return divNum / divNum2;
    }
}