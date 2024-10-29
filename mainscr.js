// Объект для хранения информации о G7 странах
function logout() {
    // Здесь можно добавить код для очистки сессии или удаления данных пользователя, если необходимо
    window.location.href = "login.html"; // Перенаправление на страницу входа
}

const g7Countries = [
    {
        name: "Canada",
        capital: "Ottawa",
        flag: "🇨🇦"
    },
    {
        name: "France",
        capital: "Paris",
        flag: "🇫🇷"
    },
    {
        name: "Germany",
        capital: "Berlin",
        flag: "🇩🇪"
    },
    {
        name: "Italy",
        capital: "Rome",
        flag: "🇮🇹"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        flag: "🇯🇵"
    },
    {
        name: "United Kingdom",
        capital: "London",
        flag: "🇬🇧"
    },
    {
        name: "United States",
        capital: "Washington, D.C.",
        flag: "🇺🇸"
    }
];

// Метод для отображения стран на странице
function displayCountries() {
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = ""; // Очистить предыдущий список
    g7Countries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = `${country.flag} ${country.name} - Capital: ${country.capital}`;
        countryList.appendChild(listItem);
    });
}

// Вызов метода для отображения стран
displayCountries();

// Высшая функция для фильтрации стран по букве
function filterCountries(letter) {
    return g7Countries.filter(country => country.name.includes(letter));
}

// Пример использования фильтрации
const filteredCountries = filterCountries("a");
console.log(filteredCountries); // Выводит страны, содержащие букву "a"
