function addToNSStorage(email) {
    const NSB = JSON.parse(localStorage.getItem("newsletterStorage")) || [];
    NSB.push(email);
    localStorage.setItem('newsletterStorage', JSON.stringify(NSB));  
}

function submitNewsletter() {
    const email = {
        email: document.getElementById("newsletter-email").value,
    }

    addToNSStorage(email);
    setTimeout(window.location.replace("../pages/contact.html"), 1500);
}