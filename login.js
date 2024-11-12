document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = 'profile.html'; // Redirect to profile page
    } else {
        alert('Please fill in all fields.');
    }
});
