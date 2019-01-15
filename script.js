
let output = document.getElementById('output');
let storedValues = [];

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

//To call, operator must be string or else there is an error
function operate(operator, num1, num2){
    if (operator === '+') {
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

let btn = document.getElementsByClassName('btn');
//Classes throw an HTML collection so event listener must be added via indexer
for (i=0; i < btn.length; i++){
    btn[i].addEventListener('click', buttonClick);
}


//**********************************************************************************************Working on this
function multipleNumbers() {
    const lastAdded = storedValues[storedValues.length -1];
    //test for a follow up digit or float
    const check = /^-?\d+\.?\d*$/g.test(lastAdded);
    if (check === true) {
        //Can't seen to get this to work
        storedValues.join('');
         console.log('true');
    } else {
        console.log('false')
     
    }

}

// ****************************************************************************Combines multiple operands needs bug fixing
// function checkForTwoOperands(newOperand) {
//     const lastButtonClicked = storedValues[storedValues.length-1]
//     const test = /[\+\-\/\*]/g.test(lastButtonClicked);

//     if (test === true) {
//         storedValues.pop();
//         storedValues.push(newOperand);
//         output.setAttribute('value', storedValues.join(''));
//         console.log('true');
//     } else {
//         storedValues.push(newOperand);
//         output.setAttribute('value', storedValues.join(''));
//         console.log('false');
//     }
// }

//Depends on buttonClick
function currentValue() {
    let currentValue = document.getElementById('output').innerHTML;
    //exceptions to be left as strings
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
    multipleNumbers();
    addClick();
    //checkForTwoOperands();

}

//Depends on currentValue, pushes clicked buttons to the array
function addClick() {
    let toAdd = currentValue();
    storedValues.push(toAdd)
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
        return storedValues = [];
    })
}
equals(event)

function clearValues(cleared) {
    let clear = document.getElementById('clear');
    clear.addEventListener('click', function(cleared) {
        output.textContent = 'Cleared';
        return storedValues = [];
    })
}
clearValues()