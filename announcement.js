// ================================
// Announcement System
// ================================

alert("Announcement JS Loaded");

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

showAnnouncements();

function saveAnnouncement() {

    alert("Publish Button Working");


    let title = document.getElementById("title").value;
    let message = document.getElementById("message").value;
    let date = document.getElementById("date").value;
    let pin = document.getElementById("pin").checked;

    let file = document.getElementById("file").files[0];

    if (title == "" || message == "" || date == "") {

        alert("Please fill all fields");

        return;

    }

    let filename = "";

    if (file) {

        filename = file.name;

    }

    announcements.unshift({

        title: title,
        message: message,
        date: date,
        pin: pin,
        filename: filename

    });

    localStorage.setItem("announcements", JSON.stringify(announcements));

    clearForm();

    showAnnouncements();

    alert("Announcement Published Successfully");

}

function showAnnouncements() {

    let list = document.getElementById("announcementList");

    list.innerHTML = "";

    if (announcements.length == 0) {

        list.innerHTML = "<h3>No Announcement Available</h3>";

        return;

    }

    announcements.sort((a, b) => b.pin - a.pin);

    announcements.forEach((item, index) => {

        list.innerHTML += `

        <div class="card">

            ${item.pin ? "<h3 style='color:red;'>📌 Important</h3>" : ""}

            <h2>${item.title}</h2>

            <p>${item.message}</p>

            <p><b>Date :</b> ${item.date}</p>

            ${item.filename ? `<p>📎 ${item.filename}</p>` : ""}

            <button onclick="deleteAnnouncement(${index})">
                Delete
            </button>

        </div>

        `;

    });

}

function deleteAnnouncement(index) {

    if (confirm("Delete this announcement?")) {

        announcements.splice(index, 1);

        localStorage.setItem("announcements", JSON.stringify(announcements));

        showAnnouncements();

    }

}

function clearForm() {

    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
    document.getElementById("date").value = "";
    document.getElementById("pin").checked = false;
    document.getElementById("file").value = "";

}