// Toggle between forms
document.getElementById("loginTab").addEventListener("click", () => {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
});
document.getElementById("signupTab").addEventListener("click", () => {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
});

// Stars animation (floating + fading)
function showStars() {
  let stars = document.getElementById("stars");
  stars.textContent = "✨✨✨";
  stars.classList.remove("hidden");
  stars.style.animation = "floatStars 4s ease-out forwards";
  setTimeout(() => {
    stars.classList.add("hidden");
    stars.style.animation = ""; // reset for next time
  }, 4000);
}

// Login validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  if (email && password) {
    alert("Login successful!");
    showStars();
  } else {
    alert("Please fill in all fields.");
  }
  document.getElementById("loginTab").addEventListener("click", () => {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
});
document.getElementById("signupTab").addEventListener("click", () => {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
});

});

// Signup validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPassword").value;
  let confirm = document.getElementById("confirmPassword").value;
  if (email && pass && confirm) {
    if (pass === confirm) {
      alert("Signup successful!");
      showStars();
    } else {
      alert("Passwords do not match.");
    }
  } else {
    alert("Please fill in all fields.");
  }
  document.getElementById("loginTab").addEventListener("click", () => {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
});
document.getElementById("signupTab").addEventListener("click", () => {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
});

});


// Forgot password functionality    
document.getElementById("forgotPassword").addEventListener("click", function(e) {
  e.preventDefault();
  let email = prompt("Enter your email to reset password:");
  if (email) {
    alert("A password reset link has been sent to " + email);
    showStars(); // trigger animation
  } else {
    alert("Please enter a valid email.");
  }
});

