let formInput = document.getElementById("loginInput");

formInput.addEventListener("submit", (e) => {

    e.preventDefault();

    // Handles the submit section

    let myUserName = document.getElementById("email");
    let myPassword = document.getElementById("password");

    let userNameError = document.getElementById("usernameError");
    let passWordError = document.getElementById("passwordError");

    if (myUserName.value == "") {
        userNameError.innerHTML = "Required*"
        return 0
    }
    if (myPassword.value == "") {
        passWordError.innerHTML = "Required*"
        return 0
    } else {
        openPopup();
        formInput.reset()
            // myUserName.value == "";
            // myPassword.value == "";

    }

});

// Modal popup

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}