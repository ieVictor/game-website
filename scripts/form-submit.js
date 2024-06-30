function addToStorage(message) {
    const DB = JSON.parse(localStorage.getItem("formStorage")) || [];
    DB.push(message);
    localStorage.setItem('formStorage', JSON.stringify(DB));  
}

function submitForm() {
    const message = {
        firstname: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    
    addToStorage(message);
    setTimeout(window.location.replace("../pages/success.html"), 1500);
}