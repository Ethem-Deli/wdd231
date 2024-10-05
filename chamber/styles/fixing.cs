/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f5f5f5;
}

/* Header Styles */
header {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;
}

header img {
    height: 50px;
}

/* Navigation Menu */
nav ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

/* Main Content Styles */
main {
    padding: 2rem;
}

/* Weather Section Styles */
#weather-section {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
}

/* Spotlight Section Styles */
#spotlight-section {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
}

/* Business Directory Styles */
#business-directory {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
}

.grid-view .business-card {
    background-color: white;
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
}

/* Footer Styles */
footer {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

footer p {
    margin: 0.5rem 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
    #business-directory {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* List View Styles */
.list-view #business-directory {
    grid-template-columns: 1fr;
}
