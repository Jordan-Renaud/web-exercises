function checkEmail() {
    const emailInput = document.getElementById("email-input").value;

    let regex = /[\s\S]*@gmail\.com|@live\.com|@yahoo\.co\.uk/

    if (emailInput == "") {
        alert("Please enter email");
    } else if ((regex.test(emailInput))){
        alert("Success")
    } else {
        alert("failure")
    }
    
    
}

const goButton = document.getElementById("go-button");
goButton.addEventListener("click", checkEmail)

let emailInput = document.getElementById("email-input");
