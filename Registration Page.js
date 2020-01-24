function printError(elementId, hintMsg) {
    document.getElementById(elementId).innerHTML = hintMsg;
}

function validation()
{

    var name, email, pwd, cpwd;
    var boolNameErr = boolEmailErr = boolPassErr = boolCPassErr = boolMobileErr = true;

    name = document.getElementById("NAME").value;
    email = document.getElementById("EMAIL").value;
    pwd = document.getElementById("PWD").value;
    cpwd = document.getElementById("CPWD").value;


    // Validate name
    if (name == "") 
    {
        //document.getElementById("nameErr").innerHTML="jnjk";
        printError("nameErrID", "* Please enter your name");
    }
    else 
    {
        var nameRegex = /^[a-zA-Z\s]+$/;
        if (nameRegex.test(name) == false) 
        {
            printError("nameErrID", "* Please enter a valid name");
        }
        else 
        {

            printError("nameErrID", "");
            boolNameErr = false;
        }
    }

    // Regular expression for basic email validation
    var emailRegex = /^\S+@\S+\.\S+$/;

    if (email == "") 
    {
        printError("emailErrID", "* Please enter your email address");
    }
    else 
    {

        if (emailRegex.test(email) == false) 
        {
            printError("emailErrID", "* Please enter a valid email address");
        }
        else 
        {
            printError("emailErrID", "");
            boolEmailErr = false;
        }
    }

    if (pwd == "") 
    {
        printError("passErrID", "* Please enter your password");
    }
    else 
    {
        printError("passErrID", "");
        boolPassErr = false;
    }

    if (cpwd == "") 
    {
        printError("cpErrID","* Please Re-Enter your password");
    }
    else 
    {
        printError("cpErrID", "");
        boolCPpassErr = false;
    }


    if (pwd != cpwd) 
    {
        printError("cpErrID", "* Passwords do not match");
    }
    



    // Prevent the form from being submitted if there are any errors
    if ((boolNameErr || boolEmailErr || boolPassErr || boolCPassErr || boolMobileErr) == false) 
    {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            // Display input data in a dialog box before submitting the form
            alert(dataPreview);
    }

}
