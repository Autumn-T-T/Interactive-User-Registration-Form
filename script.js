const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  username.value = savedUsername;
}

function showError(span, message) {
  span.textContent = message;
}

function clearError(span) {
  span.textContent = "";
}

function validateUsername() {
  if (username.validity.valueMissing) {
    showError(usernameError, "Username is required.");
    return false;
  }
  if (username.validity.tooShort) {
    showError(usernameError, "Username must be at least 3 characters.");
    return false;
  }
  clearError(usernameError);
  return true;
}

function validateEmail() {
  if (email.validity.valueMissing) {
    showError(emailError, "Email is required.");
    return false;
  }
  if (email.validity.typeMismatch) {
    showError(emailError, "Please enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}

function validatePassword() {
  if (password.validity.valueMissing) {
    showError(passwordError, "Password is required.");
    return false;
  }
  if (password.validity.tooShort) {
    showError(passwordError, "Password must be at least 8 characters.");
    return false;
  }
  if (password.validity.patternMismatch) {
    showError(passwordError, "Include uppercase, lowercase, and a number.");
    return false;
  }
  clearError(passwordError);
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    showError(confirmPasswordError, "Please confirm your password.");
    return false;
  }
  if (confirmPassword.value !== password.value) {
    showError(confirmPasswordError, "Passwords do not match.");
    return false;
  }
  clearError(confirmPasswordError);
  return true;
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const validUsername = validateUsername();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validConfirm = validateConfirmPassword();

  if (validUsername && validEmail && validPassword && validConfirm) {
    localStorage.setItem("username", username.value);
    alert("Registration successful! Username saved.");
    form.reset();
    username.value = localStorage.getItem("username");
  }
});
