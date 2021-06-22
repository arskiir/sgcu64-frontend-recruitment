const form = document.getElementById("register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log("🤷‍♂️👍👍👍 | formData", formData);
  const data = {};
  const errorMessages = [];
  getDataFromFormAndValidate(formData, data, errorMessages);

  // error(s) detected
  if (errorMessages.length > 0) {
    showErrorMessages(errorMessages);
  } else {
    alert("Successfully registered! 😊");
    location.reload();
  }

  console.log(data);
  /* USER CODE Begin: What happened next after recieve form data (Optional) */

  /* USER CODE END: What happened next after recieve form data (Optional) */
});

const validateEmail = (email) => {
  return email.includes("@");
};

const arePasswordsMatched = (bothPasswords) => {
  return bothPasswords[0] === bothPasswords[1];
};

const showErrorMessages = (messages) => {
  formattedMessage = "😯😯😯\n" + messages.join("\n");
  alert(formattedMessage);
};

function getDataFromFormAndValidate(formData, data, errorMessages) {
  bothPasswords = [];
  for (const [key, value] of formData.entries()) {
    /* USER CODE Begin: Validate data */
    data[key] = value;

    if ((key === "email" && validateEmail(value)) === false) {
      errorMessages.push("Incorrect email format (must contain '@')");
      continue;
    }

    if (key === "password" || key === "confirmpassword") {
      bothPasswords.push(value);
      if (
        (bothPasswords.length === 2 && arePasswordsMatched(bothPasswords)) ===
        false
      ) {
        errorMessages.push("Passwords do not match.");
      }
    }
    /* USER CODE Begin: Validate data */
  }
}
