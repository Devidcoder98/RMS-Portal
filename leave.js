let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

showData();

function addLeave(){

let emp = document.getElementById("empName").value;

let from = document.getElementById("fromDate").value;

let to = document.getElementById("toDate").value;

let type = document.getElementById("leaveType").value;

if(emp=="" || from=="" || to==""){

alert("Please fill all fields");

return;

}

leaves.push({

emp,

from,

to,

type

});

localStorage.setItem("leaves",JSON.stringify(leaves));

clearForm();

showData();

}

function showData(){

let table=document.getElementById("leaveTable");

table.innerHTML="";

leaves.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${item.emp}</td>

<td>${item.from}</td>

<td>${item.to}</td>

<td>${item.type}</td>

<td>

<button class="delete"

onclick="deleteLeave(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteLeave(index){

leaves.splice(index,1);

localStorage.setItem("leaves",JSON.stringify(leaves));

showData();

}

function clearForm(){

document.getElementById("empName").value="";

document.getElementById("fromDate").value="";

document.getElementById("toDate").value="";

}