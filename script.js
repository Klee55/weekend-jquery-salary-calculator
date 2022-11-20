console.log('hello')
$(document).ready(onReady);

function onReady(){
    console.log('onReady');
    $('#submitButton').on('click', collectingEmployeeInfo);


}

let employeeInfo = [];

let totalSalary = 0;

function collectingEmployeeInfo(){
    console.log('salaryCalc');
    //console.log(employeeInfo);
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    employeeInfo.push(employee);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    console.log(employeeInfo)
    appendEmployeeInfo();
    salaryCalc();
    employeeInfo.pop();
    

}

function appendEmployeeInfo(){
    console.log('appendEmployeeInfo');
    for ( let index of employeeInfo ){
    $('#table').append(`
        <tbody>
            <td>${index.firstName}</td>
            <td>${index.lastName}</td>
            <td>${index.id}</td>
            <td>${index.jobTitle}</td>
            <td>$${index.annualSalary}</td>
        </tbody>
    `)

}
}

function salaryCalc(){
    console.log('salaryCalc');
        //totalNumber = 0;
    for ( let number of employeeInfo){
        totalSalary += Number(number.annualSalary);
    }
    //console.log(totalNumber);
    console.log(totalSalary);
    $()
}