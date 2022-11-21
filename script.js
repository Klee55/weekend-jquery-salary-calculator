console.log('hello');
$(document).ready(onReady);
//console.log($(this));

function onReady(){
    console.log('onReady');
    $('#submitButton').on('click', collectingEmployeeInfo);
    $('#table').on('click', '.deleteButton', deleteEmployee);
    
};

let employeeInfo = [];

//let totalSalary = 0;

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
    

};

function appendEmployeeInfo(){
    console.log('appendEmployeeInfo');
    for ( let index of employeeInfo ){
        let formatter2 = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
        });
    let salary = formatter2.format(index.annualSalary);
    $('#table').append(`
        <tbody class="tableBody">
            <tr>
                <td>${index.firstName} </td>
                <td>${index.lastName}</td>
                <td>${index.id}</td>
                <td>${index.jobTitle}</td>
                <td>${salary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>  
            
        </tbody>
    `)

}
};

let totalSalary = 0;

console.log(totalSalary);

// let formatter = new Intl.NumberFormat('en-US',{
//     style: 'currency',
//     currency: 'USD',
// });
//const budget = formatter.format(20000);

//console.log(formatter);

function salaryCalc(){
    console.log('salaryCalc');
        //totalNumber = 0;
    //let totalSalary = 0;
    for ( let number of employeeInfo){
        totalSalary += Number(number.annualSalary);
    }
    console.log(totalSalary);
    //console.log(totalNumber);
    //console.log(totalSalary);
    
    let formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
    });
    let totalSalaryInCurrency = formatter.format(totalSalary);
    //console.log(formatter.format(totalSalary));
    //$('#totalSalary').empty().append(`${formatter}`);
    console.log(totalSalary);
    console.log(totalSalaryInCurrency);
    $('#totalSalary').empty().text(`${totalSalaryInCurrency}`);
    const budget = formatter.format(20000);
    console.log(budget);
    if (totalSalaryInCurrency > budget){
        $('#totalSalary').css('background-color', 'red');
    };
    //console.log(formatter.format(20000));
}

function deleteEmployee(){
    //$(this).parent().remove();
    $(this).parent().parent().remove();
    console.log($(this).parent());

}

//notes for instructor/evaluator
//I was able to make the Total Monthly turn red when it exeeds 20,000,
//but somehow some numbers like 500 or 5000 triggers the if statement
