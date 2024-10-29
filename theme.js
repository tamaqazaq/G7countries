// Функция переключения темы
function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const accordions = document.querySelectorAll('.accordion');
    const themeToggleButton = document.getElementById('themeToggle');

    // Переключаем класс dark у body
    body.classList.toggle('dark');
    header.classList.toggle('dark');

    sections.forEach(section => section.classList.toggle('dark'));
    accordions.forEach(accordion => accordion.classList.toggle('dark'));

    // Меняем текст кнопки
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = "Light Mode";
        localStorage.setItem('theme', 'dark'); // Сохраняем "dark" в localStorage
    } else {
        themeToggleButton.textContent = "Dark Mode";
        localStorage.setItem('theme', 'light'); // Сохраняем "light" в localStorage
    }
}

// Функция для установки темы при загрузке страницы
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme'); // Получаем сохранённое значение

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('header').classList.add('dark');
        document.querySelectorAll('section').forEach(section => section.classList.add('dark'));
        document.querySelectorAll('.accordion').forEach(accordion => accordion.classList.add('dark'));
        document.getElementById('themeToggle').textContent = "Light Mode";
    } else {
        document.getElementById('themeToggle').textContent = "Dark Mode";
    }
}

// Вызов функции applySavedTheme при загрузке страницы
document.addEventListener('DOMContentLoaded', applySavedTheme);
