import { doPasswordsMatch, isEmailValid } from "./validators.js";

const form = document.getElementById("register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const { data, errorMessages } = getDataFromFormAndValidate(formData);

  // error(s) detected
  if (errorMessages.length > 0) {
    showErrorMessages(errorMessages);
    return;
  }

  /* USER CODE Begin: What happened next after receive form data (Optional) */
  alert(
    "Successfully registered! 😊\nWith the following data:\n\n" +
      formatData(data)
  );
  location.reload(); // signifies that registration was successful
  /* USER CODE END: What happened next after receive form data (Optional) */
});

const formatData = (data) => {
  let formattedData = "";
  for (const entry of Object.values(data)) {
    formattedData += entry + "\n";
  }
  return formattedData;
};

const showErrorMessages = (messages) => {
  const formattedMessage = "😯😯😯\n" + messages.join("\n");
  alert(formattedMessage);
};

const getDataFromFormAndValidate = (formData) => {
  const bothPasswords = [];
  const data = {};
  const errorMessages = [];
  let isBlankDetected = false;

  for (const [key, value] of formData.entries()) {
    /* USER CODE Begin: Validate data */
    data[key] = value;

    if (value === "") {
      if (isBlankDetected) continue; // Shows below message only once
      errorMessages.splice(0, 0, "Form(s) cannot be blank."); // inserts at the 0th index
      isBlankDetected = true;
    }

    if (key === "email") {
      if (isEmailValid(value)) continue;
      errorMessages.push("Incorrect email format (must contain '@')");
      continue;
    }

    if (key === "password" || key === "confirmpassword") {
      bothPasswords.push(value);
      if (bothPasswords.length !== 2) continue;
      if (doPasswordsMatch(bothPasswords)) continue;
      errorMessages.push("Passwords do not match.");
      continue;
    }
    /* USER CODE Begin: Validate data */
  }

  return { data, errorMessages };
};
