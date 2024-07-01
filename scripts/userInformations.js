const text = document.getElementById("user-informations");
const userMessage = document.getElementById("user-message");

function setUserInformations() {
    const DB = JSON.parse(localStorage.getItem("formStorage"));
    const data = DB[DB.length - 1];

    text.innerHTML =
        `
            <strong>${data.firstname.trim() + " " + data.lastname.trim()}</strong>, thank you 
            for your message! We will contact you shortly
            contact by email <strong>${data.email}</strong>!
        `

    userMessage.innerHTML =
        `
            <strong>Message: </strong>${data.message.trim()}
        ` 
}

document.addEventListener("DOMContentLoaded", setUserInformations) 