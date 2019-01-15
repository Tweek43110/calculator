let output = document.getElementById('output');
let btn = document.getElementsByClassName('btn');
let globalAnswer = 0;  //To be changed once the rest is sorted out

//Classes throw an HTML collection so event listener must be added via indexer
for (i=0; i < btn.length; i++){
    btn[i].addEventListener('click', buttonClick);
}

function buttonClick() {
    let btnClicked = this.innerHTML;
    console.log('You clicked ' + btnClicked);
    output.textContent = btnClicked;
}

function equals(event) {
    let equals = document.getElementById('equals');
    equals.addEventListener('click', function(event) {
        console.log('Equals button pressed!');
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