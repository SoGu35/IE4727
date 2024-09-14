
function validate_name(){
    //Regex pattern for name validation
    const namecheck = /^[a-zA-Z]+$/;
    var inputName = document.getElementById("name");
    var checkName = namecheck.test(inputName.value).toString();
    if(!namecheck.test(checkName)){
        alert("Invalid name format");
        inputName.value = "";
    }
    else{
        return true
    }
}
function validate_email(){
    //Regex pattern for email validation
    const pattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?(\.[a-zA-Z]{2,3})?$/;
    var inputEmail = document.getElementById("email");
    var checkEmail = pattern.test(inputEmail.value).toString();
    if(!pattern.test(checkEmail)){
        alert("Invalid email format");
        inputEmail.value = "";
    }
    else{
        return true
    }
}
function validate_Date() {
    const dateInput = document.getElementById('date');
    const today = new Date();
    const selectedDate = new Date(dateInput.value);
    if (selectedDate < today) {
        alert("Start date cannot be today or in the past.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
// run functions if submit button is clicked
document.getElementById("submit").addEventListener("click", function(event){
    if(validate_name() && validate_email() && validate_Date()){
        alert("Form Submitted Successfully");
    }
    else{
        event.preventDefault();
    }
});