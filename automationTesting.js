describe("Go to Registration page ", function(){
   browser.ignoreSynchronization=true;
   
  it("Go to Registration page ", function(){
    browser.get("https://www.cermati.com/gabung/"); // go to registration page
    console.log("Registration page opened successfully") // message for opening registration page successfully

    var email = element(by.css("#email")); // set variable email for action
    email.value = "test123@gmail.com"; // assign value to email field

    var password = element(by.css("#password")); // set variable password for action
    password.value = "sqatesting456"; // assign value to password field

    var firstName = element(by.css("#first-name")); // set variable first name for action
    firstName.value = "SQA"; // assign value to first name field

    var lastName = element(by.css("#last-name")); // set variable last name for action
    lastName.value = "Testing"; // assign value to last name field

    var mobilePhone = element(by.css("#mobile-phone")); // set variable mobile phone for action
    mobilePhone.value = "089952995299"; // assign value to mobile phone field

    var residenceCity = element(by.css("#residence-city")); // set variable residence city for action
    residenceCity.value = "Jakarta"; // assign value to residence city field

    var submitButton = element(by.css("#submit-join")); // set variable submit button for action
    submitButton.click(); // click on button to submit the filled form
  });

});
