// Dynamically update the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically update the last modified date
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

// Courses Array
const courses = [
    { code: "CSE 110", name: "Introduction to Programming", completed: true, credits: 3 },
    { code: "CSE 111", name: "Advanced Programming", completed: false, credits: 3 },
    { code: "CSE 210", name: "Data Structures", completed: true, credits: 3 },
    { code: "WDD 130", name: "Web Development", completed: true, credits: 3 },
    { code: "WDD 131", name: "Advanced Web Development", completed: false, credits: 3 },
    { code: "WDD 231", name: "Responsive Design", completed: false, credits: 3 },
];

// Filter Buttons
const filterButtons = {
    all: document.getElementById("filter-all"),
    cse: document.getElementById("filter-cse"),
    wdd: document.getElementById("filter-wdd")
};

const coursesContainer = document.querySelector(".courses");

// Function to display courses
function displayCourses(filter = "all") {
    coursesContainer.innerHTML = ""; // Clear the container

    const filteredCourses = courses.filter(course => {
        if (filter === "all") return true;
        if (filter === "CSE") return course.code.includes("CSE");
        if (filter === "WDD") return course.code.includes("WDD");
    });

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

// Event Listeners for filtering courses
filterButtons.all.addEventListener("click", () => displayCourses("all"));
filterButtons.cse.addEventListener("click", () => displayCourses("CSE"));
filterButtons.wdd.addEventListener("click", () => displayCourses("WDD"));

// Initial load of all courses
displayCourses();

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("mobile-menu");
});
