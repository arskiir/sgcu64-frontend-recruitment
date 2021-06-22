import { arePasswordsMatched, isEmailValid } from "./validators";

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
    "Successfully registered! 😊\nWith the following data:\n" + formatData(data)
  );
  location.reload(); // signifies that registration was successful
  /* USER CODE END: What happened next after receive form data (Optional) */
});

const formatData = (data) => {
  formattedData = "";
  for (const key in data) {
    formattedData += data[key] + "\n";
  }
  return formattedData;
};

const showErrorMessages = (messages) => {
  formattedMessage = "😯😯😯\n" + messages.join("\n");
  alert(formattedMessage);
};

const getDataFromFormAndValidate = (formData) => {
  bothPasswords = [];
  data = {};
  errorMessages = [];

  for (const [key, value] of formData.entries()) {
    /* USER CODE Begin: Validate data */
    data[key] = value;

    if ((key === "email" && isEmailValid(value)) === false) {
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

  return { data, errorMessages };
};
