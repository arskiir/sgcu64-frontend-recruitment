export const isEmailValid = (email) => {
  return email.includes("@");
};

export const doPasswordsMatch = (bothPasswords) => {
  return bothPasswords[0] === bothPasswords[1];
};
