// Получаем кнопку переключения темы и body
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохранённую тему в localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggleButton.textContent = 'Light Theme'; // Изменяем текст кнопки для тёмной темы
}

// Обработчик клика по кнопке переключения темы
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme'); // Переключаем класс dark-theme

  // Сохраняем текущую тему в localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeToggleButton.textContent = 'Light Theme';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleButton.textContent = 'Dark Theme';
  }
});
