let signup = document.getElementById("signupInput");
signup.addEventListener("submit", (e) => {
    e.preventDefault();


    // Form Submission

    let myName = document.getElementById("name");
    let myEmail = document.getElementById("email");
    let myNumber = document.getElementById("number");
    let myPassword = document.getElementById("password");

    if (myName.value == "" || myEmail.value == "" || myNumber.value == "" || myPassword.value == "") {
        alert("Please fillin your information in the form field!!!");
    } else if (myName.value == "" && myEmail.value == "" && myNumber.value == "" && myPassword.value == "") {
        alert("You cannot submit an empty form, please input your username and password!!!");
    } else {
        openPopup;

        myName.value == "";
        myEmail.value == "";
        myPassword.value == "";
        myPassword.value == "";

    }
})


// Modal popup

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}