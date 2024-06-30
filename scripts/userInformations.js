const text = document.getElementById("user-informations");
const userMessage = document.getElementById("user-message");

function setUserInformations() {
    const DB = JSON.parse(localStorage.getItem("formStorage"));
    const data = DB[DB.length - 1];

    text.innerHTML =
        `
            <strong>${data.firstname + " " + data.lastname}</strong>, agradecemos
            pela mensagem enviada! Em brevo entraremos
            em contato pelo email <strong>${data.email}</strong>! 
        `

    userMessage.innerHTML =
        `
            <strong>Mensagem: </strong>${data.message.trim()}
        ` 
}

document.addEventListener("DOMContentLoaded", setUserInformations) 