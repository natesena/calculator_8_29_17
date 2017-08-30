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
        if(isNaN(readout.innerText[readout.innerText.length - 1]) === isNaN(btn.innerText)){ 
            console.log('IS SAME As last character');
            return true;
        }
        else{
            console.log('IS NOT SAME as last character');
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
            readout.innerText += this.innerText;
            if(isSame(btn)){
                console.log('another number was pressed');
                evalArray[evalArray.length - 1]+=this.innerText;
                console.log('digits added '+this.innerText+ ' to nonempty evalArray');
            }
            else{
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

// digits.forEach(function(btn){
//     btn.addEventListener('click', function(){
//         console.log('digits evalArray start: '+evalArray);
//        if(isSame(btn)){
//         readout.innerText += this.innerText;
//         if(!!evalArray[0]){//if evalArray is empty
//             evalArray.push(this.innerText);
//             console.log('digits added '+this.innerText+ ' to empty evalArray');
//         }
//         else{
//             evalArray[evalArray.length - 1]+=this.innerText;
//         console.log('digits added '+this.innerText+ ' to current indice');
//         }
//        }
//        else{
//         evalArray.push(this.innerText);
//         console.log('digits: last character was different, created new index');
//        }
//        console.log('digits evalArray end: '+ evalArray);
//        console.log('--------------------');
//     })
// })



operators.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(isSame(btn)){
            alert('u cant do that');
        }
        else{
            readout.innerText += this.innerText;
            evalArray.push(this.innerText);
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

