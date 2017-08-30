var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equalsBtn = document.querySelector('#equals');

var evalArray = [];

equalsBtn.addEventListener('click', function(){
    //readout.innerText = eval(readout.innerText);
    //make this work with evaluate
    console.log(evalArray);
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



function evaluate(operation, num1, num2){
    switch(operation) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    
}
}

//bonus: clear button
//being able to chain operations

