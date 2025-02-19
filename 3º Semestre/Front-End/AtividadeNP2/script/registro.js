document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const saveButton = document.getElementById('save-btn');
    const messageDiv = document.getElementById('message');
  
    form.addEventListener('input', function() {
      const usernameValid = usernameInput.value.length >= 4;
      const passwordValid = passwordInput.value.length >= 6;
      const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
  
      saveButton.disabled = !(usernameValid && passwordValid && passwordsMatch);
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = usernameInput.value;
      messageDiv.textContent = "Usuário " + username + " cadastrado com sucesso!";
    
      
      window.location.href = "login.html";
    });
    
  });