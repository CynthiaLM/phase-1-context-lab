//employee record
function createEmployeeRecord(employeeData) {
return {
firstName: employeeData[0],
familyName: employeeData[1],
title: employeeData[2],
payPerHour: employeeData[3],
timeInEvents: [],
timeOutEvents: []
};
}
//employee records
function createEmployeeRecords(arrayOfArrays) {
return arrayOfArrays.map(employeeData => createEmployeeRecord(employeeData));
}
// TimeIn
function createTimeInEvent(dateTimeString) {
const [date, hour] = dateTimeString.split(' ');
this.timeInEvents.push({
type: 'TimeIn',
date: date,
hour: parseInt(hour, 10)
});

return this;
}
//timeOut
function createTimeOutEvent(dateTimeString) {
const [date, hour] = dateTimeString.split(' ');
this.timeOutEvents.push({
type: 'TimeOut',
date: date,
hour: parseInt(hour, 10)
});

return this;
}
//hours worked
function hoursWorkedOnDate(date) {
const timeInDaily = this.timeInEvents.find(event => event.date === date);
const timeOutDaily = this.timeOutEvents.find(event => event.date === date);

return (timeOutDaily.hour - timeInDaily.hour) / 100;
}  
//wages earned on date
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this,date);
    const hourlyRate = this.payPerHour;
    
    return hoursWorked * hourlyRate;
    }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// find an employee by first name
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}
//payroll
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => {
    return totalPayroll + allWagesFor.call(employeeRecord);
  }, 0);
}