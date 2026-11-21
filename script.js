// ---------- 1. DARK / LIGHT MODE ----------
var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "Dark Mode";
    } else {
        themeBtn.textContent = "Light Mode";
    }
});

// ---------- 2. CONTACT FORM VALIDATION ----------
var form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var messageError = document.getElementById("message-error");
    var success = document.getElementById("success");

    // clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    var valid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) {
        success.textContent = "Thanks " + name + "! Your message has been sent.";
        form.reset();
    }
});