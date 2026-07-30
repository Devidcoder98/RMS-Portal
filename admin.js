updateDashboard();

function updateDashboard(){

let employees =
JSON.parse(localStorage.getItem("employees")) || [];

let leaves =
JSON.parse(localStorage.getItem("leaves")) || [];

let shifts =
JSON.parse(localStorage.getItem("shifts")) || [];

document.getElementById("employeeCount").innerHTML =
employees.length;

document.getElementById("leaveCount").innerHTML =
leaves.length;

document.getElementById("shiftCount").innerHTML =
shifts.length;

document.getElementById("projectCount").innerHTML = 0;

}

function liveClock(){

let d = new Date();

document.getElementById("clock").innerHTML =
d.toLocaleTimeString();

document.getElementById("today").innerHTML =
d.toDateString();

}

setInterval(liveClock,1000);

liveClock();

// ============================
// Navigation Functions
// ============================

function goDashboard() {
    window.location.href = "admin.html";
}

function goLeave() {
    window.location.href = "leave.html";
}

function goShift() {
    window.location.href = "shift.html";
}

function goEmployee() {
    window.location.href = "employee.html";
}

function goProject() {
    window.location.href = "project.html";
}

function logout() {

    if(confirm("Are you sure you want to Logout?")){

        window.location.href="index.html";

    }

}

function goAnnouncement(){

window.location.href="announcement.html";

}