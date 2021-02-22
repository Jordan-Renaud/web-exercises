function checkEmail() {
    const emailInput = document.getElementById("email-input").value;
    let regex = /[\s\S]+@gmail\.com|[\s\S]+@live\.com|[\s\S]+@yahoo\.co\.uk/;

    if (emailInput == "") {
        alert("Please enter email");
    } else if ((regex.test(emailInput))){
        alert("Success")
    } else {
        alert("failure")
    } 
}

//button functionality
const goButton = document.getElementById("go-button");
goButton.addEventListener("click", checkEmail)

let emailInput = document.getElementById("email-input");
emailInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        goButton.click();

    }
})

