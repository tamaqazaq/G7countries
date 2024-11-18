// Переключение между формами входа и регистрации
document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

// Регистрация
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (!username || !password) {
        alert('Заполните все поля.');
        return;
    }

    // Проверка на существование пользователя
    if (localStorage.getItem(username)) {
        alert('Пользователь с таким именем уже существует.');
        return;
    }

    // Сохранение пользователя в localStorage
    localStorage.setItem(username, JSON.stringify({ password }));

    // Сохранение текущего пользователя
    localStorage.setItem('loggedInUser', username);

    // Перенаправление на страницу профиля
    window.location.href = 'profile.html';
});

// Логин
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!username || !password) {
        alert('Заполните все поля.');
        return;
    }

    // Проверка пользователя
    const userData = localStorage.getItem(username);
    if (!userData) {
        alert('Такого пользователя не существует. Зарегистрируйтесь.');
        return;
    }

    const user = JSON.parse(userData);
    if (user.password !== password) {
        alert('Неверный пароль. Попробуйте снова.');
        return;
    }

    // Сохранение текущего пользователя
    localStorage.setItem('loggedInUser', username);

    // Перенаправление на страницу профиля
    window.location.href = 'profile.html';
});
