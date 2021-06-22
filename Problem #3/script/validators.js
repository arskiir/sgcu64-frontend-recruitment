export const isEmailValid = (email) => {
  return email.includes("@");
};

export const arePasswordsMatched = (bothPasswords) => {
  return bothPasswords[0] === bothPasswords[1];
};
