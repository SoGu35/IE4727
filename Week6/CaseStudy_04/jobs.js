
function validateName() {
    var name = document.forms["loginForm"]["name"].value;
    var namePattern = /^[A-Za-z\s]+$/;
    // Check if the name field is empty or does not match the pattern
    if (name == "") {
        alert("Name is required.");
        return false;
    } else if (!namePattern.test(name)) {
        alert("Name can only contain alphabets and spaces.");
        return false;
    }
    return true;
}
function validateEmail() {
    var email = document.forms["loginForm"]["email"].value;
    var emailPattern = /^[\w.-]+@([\w-]+\.){1,3}[\w]{2,3}$/;
    // Check if the email field is empty or does not match the pattern
    if (email == "") {
        alert("Email is required.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}
function validateDate(){
    //check if date is before today and return false if it is
    var date = document.forms["loginForm"]["date"].value;
    var today = new Date();
    var date = new Date(date);
    if(date < today){
        alert("Date must be after today");
        return false;
    }
    else
        return true;
    }


function handleSubmit() {
    if(validateName() && validateEmail() && validateDate()) {
    }
    else {
    //stop form from refreshing
    event.preventDefault();
    }
}