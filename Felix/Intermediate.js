let employees = `
[{
    "UniqueID": "111111",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "222222",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "333333",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "444444",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "555555",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "666666",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "777777",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "888888",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "999999",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}, {
    "UniqueID": "000000",
    "FirstName": "Felix",
    "LastName": "Blechl",
    "Emailaddress": "felix.blechl@chello.at",
    "JobTitle": "Warum liegt hier Stroh",
    "Salary": "50000"
}]`


let employees_final = JSON.parse(employees);
console.log(employees_final);


for (let count of employees_final) {
    document.getElementById("input").innerHTML += `<table border="1" style="border-collpase:collapse;"> <tr> <td>${count.UniqueID} </td> <td>${count.FirstName} </td> <td>${count.LastName} </td> <td>${count.Emailaddress} </td> <td>${count.JobTitle} </td> <td>${count.Salary} </td> <tr> </table`
}