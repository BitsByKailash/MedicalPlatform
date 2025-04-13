/*
✅ Assumptions:

Backend endpoint: POST /api/login (expects JSON: { email, password })


*/
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const messageDiv = document.getElementById("message");
    const loginButton = document.getElementById("loginButton");
    // Handle form submission
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form action (page reload)
  
      // Get user input values
      const email = emailInput.value.trim();
      const password = passwordInput.value;
  
      // Clear previous messages
      messageDiv.textContent = "";
      messageDiv.style.color = "red";
  
      // Basic validation
      if (!email || !password) {
        messageDiv.textContent = "Please fill in both email and password.";
        return;
      }
  
      // Optionally, validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        messageDiv.textContent = "Please enter a valid email address.";
        return;
      }
  
      try {
        // Send login request to backend
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        });
  
        const result = await response.json();
  
        if (response.ok) {
          // Login success
          messageDiv.style.color = "green";
          messageDiv.textContent = "Login successful! Redirecting...";
  
          // Example: Save token in localStorage
          //localStorage.setItem("authToken", result.token);
  
          // Redirect to dashboard or home
          setTimeout(() => {
            window.location.href = "/doctor_dashboard";
          }, 1500);
        } else {
          // Login failed (e.g. wrong credentials)
          messageDiv.textContent = result.message || "Login failed. Please try again.";
        }
  
      } catch (error) {
        console.error("Login error:", error);
        messageDiv.textContent = "An error occurred. Please try again later.";
      }
    });
  });
  