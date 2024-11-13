let submitButton = document.getElementById("message-button");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    //set js object, stringify, save to json
    let userEmail = {
        Name: userName.value,
        Email: email.value,
        Message: message.value
    };
    let jsonData = JSON.stringify(userEmail, null, 2);

    //TODO: write to JSON using express???

    //reset fields
    let confirmation = window.confirm("Thank you for your message. I'll be in touch");

    if (confirmation) {
        userName.value = "";
        email.value = "";
        message.value = "";
    }
});