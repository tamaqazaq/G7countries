var map;


function displayGreeting() {
    let now = new Date();
    let hour = now.getHours();
    let greeting = '';

    if (hour >= 6 && hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    document.getElementById('greeting').textContent = greeting;
}

window.onload = function() {
    displayGreeting(); 
    updateDateTime(); 
    setInterval(updateDateTime, 1000); 
};

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTime").innerText = dateTimeString;
}

document.getElementById("changeColorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});


function showMap() {
    document.getElementById('mainContent').style.display = 'none';
    const mapSection = document.getElementById('mapSection');
    mapSection.style.display = 'block';
    mapSection.style.opacity = 0;
    setTimeout(() => {
        mapSection.style.transition = 'opacity 2s ease';
        mapSection.style.opacity = 1;
    }, 10);

    if (!map) {
        map = L.map('map').setView([34.6937, 135.5023], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        var g7Marker = L.marker([34.6937, 135.5023]).addTo(map);
        g7Marker.bindPopup('<b>The headquarters of G7</b><br>Osaka, Japan').openPopup();
    }
}

const accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

document.getElementById("faq").textContent = "FAQ";

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
    }
});

document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const subEmail = document.getElementById("subEmail").value;
    alert("Thank you for subscribing with " + subEmail + "!");
    closePopup();
});
