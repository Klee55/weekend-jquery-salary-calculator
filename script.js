console.log('hello')
$(document).ready(onReady);

function onReady(){
    console.log('onReady');
    $('#submitButton').on('click', salaryCalc);


}

let employeeInfo = [];

function salaryCalc(){
    console.log('salaryCalc');
    console.log(employeeInfo);
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    employeeInfo.push(employee);
    console.log(employeeInfo)


}