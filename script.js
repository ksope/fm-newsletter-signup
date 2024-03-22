const form = document.getElementById("form");
const email = document.getElementById("email-btn");
const subscribeBtn = document.getElementById("subscribe");
const dismissBtn = document.getElementById("dismiss");

//Event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value === "") {
        showError(email, "Valid email required");
    } else if (!checkEmail(email)) {
        showError(email, "Email is not valid");
    } else {
        const inputValue = email.value;
        localStorage.setItem("userInputValue", inputValue); // Store the value in local storage
        showSuccess(email, "./confirmation.html");
    }
});

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//Show success outline
function showSuccess(input, link) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    window.location.href = link; // Redirect to the display page
}

//checl email is valid
function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(input.value.trim())) {
        return true;
    } else {
        return false;
    }
}

module.exports = showSuccess;
