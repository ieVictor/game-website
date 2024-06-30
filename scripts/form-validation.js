const validEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const username = document.getElementById("page-form").querySelectorAll("input#first-name, input#last-name");
const email = document.getElementById("email");
const textarea = document.getElementById("message");

username.forEach(input => {
    input.addEventListener("blur", () => {
        checkName(input);
        validateForm();
    })
})

email.addEventListener("blur", () => {
    checkEmail(email);
    validateForm();
})

textarea.addEventListener("blur", () => {
    checkTextField(textarea);
    validateForm();
})

function checkNoValue(event) {
    if (event.value.trim().length === 0) {
        event.setAttribute("class", "input");
        return true;
    }
    return false; 
}

function checkEmail(event) {
    if (checkNoValue(event)) return;
    if (validEmail.test(event.value)) {
        event.setAttribute("class", "success");
        return;
    }

    event.setAttribute("class", "error");
    return; 
}

function checkName(event) {
    if (checkNoValue(event)) return;
    if (validName.test(event.value)) {
        event.setAttribute("class", "success");
        return;
    }

    event.setAttribute("class", "error");
    return
}

function checkTextField(event) {
    if (checkNoValue(event)) return;
    if (event.value.trim().length > 10) {
        event.setAttribute("class", "success");
        return
    }

    event.setAttribute("class", "error");
}

function validateForm() {
    let filled = true;
    const formInputs = document.getElementById("page-form").querySelectorAll("input, textarea");
    const formButton = document.getElementById("form-button");

    formInputs.forEach(input => {
        if(input.getAttribute("class") !== "success") filled = false;
    })

    if (filled) {
        formButton.disabled = false;
        return;
    }
    
    formButton.disabled = true;
}

