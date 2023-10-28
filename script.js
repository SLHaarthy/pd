const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Implement login functionality here
  console.log("Login form submitted");
});

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Implement signup functionality here
  console.log("Signup form submitted");
});

const resetPasswordForm = document.getElementById("resetPasswordForm");
const emailInput = document.getElementById("email");
const resetMessage = document.getElementById("resetMessage");

resetPasswordForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const userEmail = emailInput.value;

  // Simulate a password reset process (replace with your actual server-side logic)
  if (userEmail) {
    resetMessage.innerHTML = `Reset link sent to ${userEmail}. Check your email for instructions.`;
    resetMessage.classList.remove("error");
  } else {
    resetMessage.innerHTML = "Please enter a valid email address.";
    resetMessage.classList.add("error");
  }
  resetPasswordForm.reset();
});
