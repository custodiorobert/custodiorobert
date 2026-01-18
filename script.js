const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-msg');

// Example credentials (for portfolio demo only)
const user = {
  username: 'admin',
  password: 'admin'
};

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Basic validation
  if(username === user.username && password === user.password) {
    alert('Login successful! Welcome to the portfolio.');

    // Redirect to another page
      window.location.href = 'aichatbot.html';

    // window.location.href = 'dashboard.html';
  } else {
    errorMsg.textContent = 'Invalid username or password.';
  }
});
