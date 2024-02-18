let formInput = document.getElementById("loginInput");

formInput.addEventListener("submit", (e) => {

    e.preventDefault();

    // Handles the submit section

    let myUserName = document.getElementById("email");
    let myPassword = document.getElementById("password");

    if (myUserName.value == "" || myPassword.value == "") {
        alert("Please fillin a value in this field!!!");
    } else if (myUserName.value == "" && myPassword.value == "") {
        alert("You cannot submit an empty form, please input your username and password!!!");
    } else {
        openPopup;

        myUserName.value == "";
        myPassword.value == "";

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