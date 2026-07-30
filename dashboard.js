console.log("RMS Employee Dashboard Loaded");

// Future Features:
// Notifications
// Live Clock
// Leave API
// Shift API
// Projects API
// Profile Update

function loadAnnouncements(){

let announcements =
JSON.parse(localStorage.getItem("announcements")) || [];

let area=document.getElementById("announcementArea");

if(!area) return;

area.innerHTML="";

announcements.forEach(item=>{

area.innerHTML+=`

<div class="card">

<h3>${item.title}</h3>

<p>${item.message}</p>

<small>${item.date}</small>

</div>

`;

});

}

loadAnnouncements();