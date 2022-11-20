console.log('hello');
$(document).ready(onReady);
console.log($(this));

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
    $('#table').append(`
        <tbody class="tableBody">
            <tr>
                <td>${index.firstName} </td>
                <td>${index.lastName}</td>
                <td>${index.id}</td>
                <td>${index.jobTitle}</td>
                <td>${index.annualSalary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>  
            
        </tbody>
    `)

}
};

function salaryCalc(){
    console.log('salaryCalc');
        //totalNumber = 0;
    let totalSalary = 0;
    for ( let number of employeeInfo){
        totalSalary += Number(number.annualSalary);
    }
    //console.log(totalNumber);
    console.log(totalSalary);
    let formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
    });
    formatter.format(totalSalary);
    console.log(formatter.format(totalSalary));
    $('#totalSalary').empty().append(`${totalSalary}`);

    if (totalSalary > 20000){
        $('#totalSalary').css('background-color', 'red');
    };
};

function deleteEmployee(){
    //$(this).parent().remove();
    $(this).parent().parent().remove();
    console.log($(this).parent());

}

$(this).parent().parent().remove();

//Intl.NumberFormat((totalSalary));

//console.log(totalSalary);

// Create our number formatter.
//let formatter = new Intl.NumberFormat('en-US', {
    //style: 'currency',
    //currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  //});
  
  //console.log(formatter.format(2500)); /* $2,500.00 */