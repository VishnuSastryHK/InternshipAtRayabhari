function printError(elemId, hintMsg) 
{
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate1()
{ 

  var name,email,pwd,cpwd;
  var boolNameErr = boolEmailErr = boolPassErr = boolCPassErr = boolMobileErr = true;
  
  name = document.getElementsById("NAME").value;
  email = document.getElementById("email").value;
  pwd = document.getElementsByName("pwd").value;
  cpwd = document.getElementsByName("cpwd").value;


// Validate name
if(name=="") 
{
    //document.getElementById("nameErr").innerHTML="jnjk";
    printError("nameErr", "Please enter your name");
} 
else 
{
    var nameRegex = /^[a-zA-Z\s]+$/;                
    if(nameRegex.test(name)==false) 
    {
        printError("nameErrID", "Please enter a valid name");
    } 
    else 
    {
        printError("nameErr", "");
        boolNameErr = false;
    }
}
  // Regular expression for basic email validation
/*  var emailRegex=/^\S+@\S+\.\S+$/;
  
  if(email == "") 
  {

    printError("emailErr", "Please enter your email address");
} 
else 
{
    
    if(emailRegex.test(email) == false) 
    {    printError("emailErr", "Please enter your email address");

            } 
    else
    {
        printError("emailErr", "");
        emailErr = false;
    }
}

if(pwd=="")
{
    printError("passErr", "Please enter your password");
}
else
    {
        printError("passErr", "");
        passErr = false;
    }

    if(cpwd=="")
    {
        printError("cpassErr", "Please Re-enter your password");
    }
    else
        {
            printError("cpassErr", "");
            passErr = false;
        }

        
        
if(pwd!=cpwd)
{
    printError("cpassErr", "Passwords do not match");

}
else
    {
        printError("cpassErr", "");
        cpassErr = false;
    }
*/


/*   // Prevent the form from being submitted if there are any errors
if((nameErr || emailErr ||  passErr||cpassErr||mobileErr ) == true) 
{
    validate();
    return false;
} 
else 
{
     // Creating a string from input data for preview
     var dataPreview = "You've entered the following details: \n" +
                       "Full Name: " + name + "\n" +
                       "Email Address: " + email + "\n" +
     // Display input data in a dialog box before submitting the form
     alert(dataPreview);
 }*/
 
}


