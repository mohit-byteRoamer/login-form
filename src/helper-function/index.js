const emailValidationHandler = (userEmail) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(userEmail);
};
const passwordValidationHandler = (password) => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

export { emailValidationHandler, passwordValidationHandler };
