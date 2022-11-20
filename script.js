console.log('hello')
$(document).ready(onReady);

function onReady(){
    console.log('onReady');
    $('#submitButton').on('click', salaryCalc);


}

function salaryCalc(){
console.log('salaryCalc');

}