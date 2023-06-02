const form = document.querySelector("form");
const userName = document.getElementById("name");
const nameError = document.getElementById("name_error");
const email = document.getElementById("email");
const emailError = document.getElementById("email_error");
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subject_error");
const message = document.getElementById("message");
const messageError = document.getElementById("message_error");
const succes = document.querySelector(".message_succes")
const button = document.querySelector("button");

function validateForm(event) {

    event.preventDefault();

    let showSuccessMessage = true;

    if (checkLength(userName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        showSuccessMessage = false;
    };

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        showSuccessMessage = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        showSuccessMessage = false;
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        showSuccessMessage = false;
    }  
    if (showSuccessMessage) {
                succes.style.display = "block";
                form.reset();
    } else {
                message.innerHTML = "";
    }

    
};


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(email);
    return emailMatches;
};

form.addEventListener("submit", validateForm);




