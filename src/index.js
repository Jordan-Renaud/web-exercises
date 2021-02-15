function checkEmail() {
    const emailInput = document.getElementById("email-input").value;
    console.log(emailInput)

    if (emailInput == "") {
        alert("Please enter email");
    } else if (emailInput.endsWith("gmail.com")){
        alert("Success")
    } else {
        alert("failure")
    }
    
}

const goButton = document.getElementById("go-button");
goButton.addEventListener("click", checkEmail)

let emailInput = document.getElementById("email-input");
