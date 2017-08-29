var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');

digits.forEach(function(btn){
    btn.addEventListener('click', function(){
        readout.innerText += this.innerText;
    })
})