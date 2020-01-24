function printError(elementId, hintMsg)
{
  document.getElementById(elementId).innerHTML = hintMsg ;
}

function Validate()
{   
    var boolNameErr=boolEmailErr=boolPassErr=boolCPassErr=true;


  var email=document.getElementById("EMAIL").value;
  var pass=document.getElementById("PASS").value;

  if(email=="")
  {
      //alert("Name must be filled out");
      printError("emailErrID","Enter your Email ID");
      //return false;
  }
  else
  { 
    var emailRegex=/^\S+@\S+\.\S+$/;
    if(emailRegex.test(email)==false)
    {
        printError("emailErrID","Enter a valid email ID")
    }
    else
    {
        printError("emailErrID","");
        boolEmailErr=false;
    }
  }

  if(pass=="")
  {
      printError("passErrID","Enter your password");
      //return false;
  }
  else
  { 

    printError("passErrID","");
    boolPassErr=false;
  }

  if(boolEmailErr==true||boolPassErr==true)
  {
      loginValidate();
    
  }
  else 
  {
       // Creating a string from input data for preview
       var dataPreview = "You've entered the following details: \n" +
                         "Full Name: " + name + "\n" +
                         "Email Address: " + email + "\n" +
       // Display input data in a dialog box before submitting the form
       alert(dataPreview);
   }
}