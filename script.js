let map;

// Display greeting based on the time of day
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greeting =
        hour >= 6 && hour < 12
            ? "Good Morning!"
            : hour >= 12 && hour < 18
            ? "Good Afternoon!"
            : "Good Evening!";
    document.getElementById("greeting").textContent = greeting;
}

// Update the date and time every second
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").textContent = now.toLocaleString();
}

// Show the map section and initialize the map if not already initialized
function showMap() {
    document.getElementById("mainContent").style.display = "none";
    const mapSection = document.getElementById("mapSection");
    mapSection.style.display = "block";

    if (!map) {
        map = L.map("map").setView([34.6937, 135.5023], 13); // Osaka, Japan
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap",
        }).addTo(map);

        L.marker([34.6937, 135.5023])
            .addTo(map)
            .bindPopup("<b>The headquarters of G7</b><br>Osaka, Japan")
            .openPopup();
    }
}

// Show popup
function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("d-none");
    popup.style.display = "flex";
}

// Close popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("d-none");
    popup.style.display = "none";
}

// Handle form submission for the popup
document.getElementById("subscriptionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("subEmail").value;
    alert(`Thank you for subscribing with ${email}!`);
    closePopup();
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}!`);
    }
});

// Theme toggle functionality
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Initialize functions on page load
window.onload = () => {
    displayGreeting();
    updateDateTime();
    setInterval(updateDateTime, 1000);
};
