document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === '123456') {
        
        window.location.href = 'index.html';
    } else {
        
        document.getElementById('error-message').textContent = 'Wrong login or password.';
    }
});  