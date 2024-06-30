const validNewsletterEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterButton = document.getElementById("newsletter-button");

newsletterEmail.addEventListener("blur", () => {
    checkNewsletterEmail(newsletterEmail);
})

function checkNoValue(event) {
    if (event.value.trim().length === 0) {
        event.setAttribute("class", "input");
        return true;
    }
    return false; 
}

function checkNewsletterEmail(event) {
    if (checkNoValue(event)) return;
    if (validNewsletterEmail.test(event.value)) {
        event.setAttribute("class", "success");
        newsletterButton.disabled = false;
        return;
    }

    event.setAttribute("class", "error");
    newsletterButton.disabled = true;
    return; 
}
