const form = document.getElementById("register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log("🤷‍♂️👍👍👍 | formData", formData);
  const data = {};
  const messages = [];
  getDataFromFormAndValidate(formData, data, messages);

  // error(s) detected
  if (messages.length > 0) {
    showMessage(messages);
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

const arePasswordsMatched = (pw, cfpw) => {
  return pw === cfpw;
};

const showMessage = (messages) => {
  formattedMessage = "😯😯😯\n" + messages.join("\n");
  alert(formattedMessage);
};

function getDataFromFormAndValidate(formData, data, messages) {
  for (const [key, value] of formData.entries()) {
    /* USER CODE Begin: Validate data */
    data[key] = value;
    /* USER CODE Begin: Validate data */
  }
}
