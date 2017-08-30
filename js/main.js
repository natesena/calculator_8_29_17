var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equalsBtn = document.querySelector('#equals');
var clearBtn = document.querySelector('#clear');

var evalArray = [];

equalsBtn.addEventListener('click', function(){
    console.log(evalArray);
    readout.innerHTML = solve();
    evalArray.push(readout.innerHTML);
})

clearBtn.addEventListener('click', function(){
    clear();
})

function isSame(btn){
    console.log('isSame evalArray start: '+ evalArray);
    if(!!readout.innerText){//if not empty
        console.log('last readout not number y/n: ' + isNaN(readout.innerText[readout.innerText.length - 1]) + ' last readout value: '+ (readout.innerText[readout.innerText.length - 1]));
        console.log('last button not number y/n: ' + isNaN(btn.innerText)+ ' last button value: ' +btn.innerText);
        //if(isNaN(readout.innerText[readout.innerText.length - 1]) === isNaN(btn.innerText)){ 
        if(isNaN(readout.innerText[readout.innerText.length - 1]) === isNaN(btn.innerText)){     
            console.log('is same type as last character');
            return true;
        }
        else{
            console.log('Is not same type as last character');
            return false;
        }
    }
    else{//if readout is empty/clear
        //evalArray.push(btn.innerText);
        //console.log('isSame pushed '+ btn.innerText);
        console.log('array was empty. any number is ok');
        return true;
    }
   
}

digits.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log('digits evalArray start: '+evalArray);
        if(!!evalArray[0]){//if array is not empty
            console.log('evalArray is not empty');
            if(isSame(btn)){
                readout.innerText += this.innerText;
                console.log('another number was pressed');
                evalArray[evalArray.length - 1]+=this.innerText;
                console.log('digits added '+this.innerText+ ' to nonempty evalArray');
            }
            else{
                readout.innerText += this.innerText;
                console.log('just switched from operator to number');
                evalArray.push(this.innerText);
                console.log('pushed new number to array');
                console.log(evalArray);
            }
            
        }
        else{//if array is empty
            readout.innerText += this.innerText;
            evalArray.push(this.innerText);
            console.log('digits added '+this.innerText+ ' to empty evalArray');
        }
        console.log('digits evalArray end: '+ evalArray);
        console.log('----------------');
    })
})


operators.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log('operators evalArray start: '+evalArray);
        if(isSame(btn)){
            alert('u cant do that');
        }
        else{
            readout.innerText += this.innerText;
            console.log('pushing operator into evalArray');
            evalArray.push(this.innerText);
            console.log('operators evalArray finish: '+evalArray);
        }
        console.log('--------------------');
    })
})



function clear(){
    readout.innerHTML ='';
    for(var i = 0; i < evalArray.length; i++){
        evalArray.push();
    }
    console.log(evalArray);
}

function evaluate(num1, operation, num2){
    console.log('evaluating '+num1+ ' ' + operation + ' ' + num2);
    if(!!evalArray[0]){//if array is not empty
        var index1 = evalArray.shift();
        console.log('-- evaluate next operator index1: '+ index1+ ' --');
        var index2 = evalArray.shift();
        console.log('-- evaluate next number index2: '+ index2+ ' --');
        return evaluate(simpleEvaluate(num1, operation, num2), index1, index2);
    }
    else{
        console.log('evaluate evalArray empty, answer coming');
        return simpleEvaluate(num1, operation, num2);
    }
  
}
function simpleEvaluate(num1, operation, num2){
    //console.log('simpleEvaluate '+ num1 + ' '+ operation + ' '+ num2);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(operation) {
        case '+':
            console.log('simpleEvaluate of '+num1 + ' '+ operation + " "+ num2 + ' equals '+ (num1+num2));
            return num1 + num2
        case '-':
        console.log('simpleEvaluate of '+num1 + ' '+ operation + " "+ num2 + ' equals '+ (num1-num2));
            return num1 - num2
        case '*':
        console.log('simpleEvaluate of '+num1 + ' '+ operation + " "+ num2 + ' equals '+ (num1*num2));
            return num1 * num2
        case '/':
        console.log('simpleEvaluate of '+num1 + ' '+ operation + " "+ num2 + ' equals '+ (num1/num2));
            return num1 / num2
    
    }
}

function solve(){
    if(isNaN(evalArray[evalArray.length - 1])){//if last evalArray index is NaN
        alert('add another number');
    }
    else{
        var index1 = evalArray.shift();
        var index2 = evalArray.shift();
        var index3 = evalArray.shift();
        console.log('solving '+index1+ ' ' + index2 + ' ' + index3);
        var answer = evaluate(index1, index2, index3);
        console.log('answer: '+ answer);
        return answer;
    }
}

//bonus: clear button
//being able to chain operations

