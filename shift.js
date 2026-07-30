let shifts = JSON.parse(localStorage.getItem("shifts")) || [];

showShift();

function addShift(){

let emp=document.getElementById("empName").value;
let shift=document.getElementById("shift").value;
let date=document.getElementById("shiftDate").value;

if(emp=="" || date==""){

alert("Please fill all fields");

return;

}

shifts.push({
emp,
shift,
date
});

localStorage.setItem("shifts",JSON.stringify(shifts));

clearForm();

showShift();

}

function showShift(){

let table=document.getElementById("shiftTable");

table.innerHTML="";

shifts.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${item.emp}</td>

<td>${item.shift}</td>

<td>${item.date}</td>

<td>

<button class="deleteBtn"
onclick="deleteShift(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteShift(index){

shifts.splice(index,1);

localStorage.setItem("shifts",JSON.stringify(shifts));

showShift();

}

function clearForm(){

document.getElementById("empName").value="";
document.getElementById("shiftDate").value="";

}