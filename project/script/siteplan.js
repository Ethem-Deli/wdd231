// scripts.js

// Update the year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Update the last modified date dynamically
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("liveChatButton").addEventListener("click", () => {
    const currentHour = new Date().getHours();
    const workingHours = currentHour >= 9 && currentHour <= 17;
    if (workingHours) {
        alert("Live chat is available!");
        // Open live chat window here
    } else {
        alert("Live chat is currently not available. Please check back during our working hours (9 AM to 5 PM).");
    }
});

// Implement FAQ toggle functionality
const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const faqContent = item.nextElementSibling;
        faqContent.style.display = faqContent.style.display === "none" ? "block" : "none";
    });
});

// Live Chat button functionality
document.getElementById("liveChatButton").addEventListener("click", () => {
    alert("Live chat is currently not available. Please check back during our working hours.");
});
