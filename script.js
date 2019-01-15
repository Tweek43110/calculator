let output = document.getElementById('output');
let globalAnswer = 0;  //To be changed once the rest is sorted out

let btn = document.getElementsByClassName('btn');
//Classes throw an HTML collection so event listener must be added via indexer
for (i=0; i < btn.length; i++){
    btn[i].addEventListener('click', buttonClick);
}

function storeAnswer(value) {
    let value = value;
    globalAnswer = value;
    return value;
}

function currentValue() {
    let currentValue = document.getElementById('output').innerHTML;
    //Producing string elements on click, convert to number
    currentValue = parseInt(currentValue);
    return currentValue;
}

//Displays button clicked in DOM
function buttonClick() {
    let btnClicked = this.innerHTML;
    output.textContent = btnClicked;
}

//Produces answer when equals button clicked
function equals(event) {
    let equals = document.getElementById('equals');
    equals.addEventListener('click', function(event) {
        let answer = globalAnswer;
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