// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var fname = document.getElementById("fname").value;
	var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var pas = document.getElementById("password").value;
    
	// Defining error variables with a default value
    var fnameErr = mobileErr = emailErr = passwordErr = false;
    
    // Validate name
    if(fname == "") {
        document.getElementById("fnameErr").innerHTML = "Please enter your name";
    } else {
        var regex = /^[a-zA-Z]+$/;                
        if(regex.test(fname) === false) {
            document.getElementById("fnameErr").innerHTML = "Please enter valid name";
        } else {
            document.getElementById("fnameErr").innerHTML = "";
            fnameErr = true;
        }
    }
	
	// Validate mobile number
    if(mobile == "") {
        document.getElementById("mobileErr").innerHTML = "Please enter your mobile number";
    } else {
        var regex = /^[0-9]/;
        if(regex.test(mobile) === false) {
            document.getElementById("mobileErr").innerHTML = "Please enter digit mobile number";
        } else{
            document.getElementById("mobileErr").innerHTML = "";
            mobileErr = true;
        }
    }
    
    // Validate email address
    if(email == "") {
        document.getElementById("emailErr").innerHTML = "Please enter your email address";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            document.getElementById("emailErr").innerHTML = "Please enter a valid email address";
        } else{
            document.getElementById("emailErr").innerHTML = "";
            emailErr = true;
        }
    }
    
    // Validate password
    if(pas == "") {
        document.getElementById("passwordErr").innerHTML = "Please enter your password";
    } else {
        var regex = /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[!@#$%^&*]{1,})(?!.*\s).{6}$/;
        if(regex.test(pas) === false) {
            document.getElementById("passwordErr").innerHTML = "Please enter a valid password";
        } else{
            document.getElementById("passwordErr").innerHTML = "";
            passwordErr = true;
        }
    }
}