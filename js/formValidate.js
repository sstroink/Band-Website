/*
    Author: Sophie Stroink
    Date: January 12 2018
    
    filename: formValidate.js
    
    Required files: contact.html
    
    Based off tutorial from: https://www.w3schools.com/js/js_validation.asp 


*/

//Form Validation to check for valid name input and message input
//The email is checked using regular expressions in the html file so it is not included here
//Sends a thankyou message once the form is successfully completed

function validate() {
    var name = document.forms["formContact"]["name"].value;
    var message = document.forms["formContact"]["message"].value;
    
    //Message input should be at least 15 characters
    if(message.length < 15) {
		  alert("Your message should be at least 15 characters");
		  return false;
    }
    //Name input must be equal to 3 characters
    if(name.length < 3) {
        alert("First and Last Name must be at least 3 characters in length");
        return false;
    }
    
    alert("Thanks for getting in touch!");
             
  
}
            