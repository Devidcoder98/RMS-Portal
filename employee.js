let employees = JSON.parse(localStorage.getItem("employees")) || [];

displayEmployees();

function addEmployee(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let department=document.getElementById("department").value;
let designation=document.getElementById("designation").value;
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(
name=="" ||
email=="" ||
department=="" ||
designation=="" ||
username=="" ||
password==""
){

alert("Please Fill All Fields");

return;

}

employees.push({

name,
email,
department,
designation,
username,
password

});

localStorage.setItem("employees",JSON.stringify(employees));

clearForm();

displayEmployees();

}

function displayEmployees(){

let table=document.getElementById("employeeTable");

table.innerHTML="";

employees.forEach((emp,index)=>{

table.innerHTML+=`

<tr>

<td>${emp.name}</td>

<td>${emp.email}</td>

<td>${emp.department}</td>

<td>${emp.designation}</td>

<td>

<button class="deleteBtn"
onclick="deleteEmployee(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteEmployee(index){

employees.splice(index,1);

localStorage.setItem("employees",JSON.stringify(employees));

displayEmployees();

}

function clearForm(){

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("department").value="";
document.getElementById("designation").value="";
document.getElementById("username").value="";
document.getElementById("password").value="";

}