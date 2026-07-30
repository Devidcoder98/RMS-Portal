// Default HOD Accounts
alert("JavaScript Loaded");

const admins = [

{

username:"hod1",
password:"12345"

},

{

username:"hod2",
password:"12345"

}

];

function login(){

let role=document.getElementById("role").value;

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(role=="admin"){

let found=admins.find(a=>a.username==user && a.password==pass);

if(found){

window.location.href = "admin.html";

}

else{

document.getElementById("msg").innerHTML="Invalid Admin Login";

document.getElementById("msg").style.color="red";

}

}

else{

let employees =
JSON.parse(localStorage.getItem("employees")) || [];

let found = employees.find(emp =>

emp.username === user &&
emp.password === pass

);

if(found){

window.location.href = "dashboard.html";

}else{

document.getElementById("msg").innerHTML="Invalid Employee Login";
document.getElementById("msg").style.color="red";

}

}

}