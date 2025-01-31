// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    // Smooth scrolling for anchor links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dynamic project list (can be modified easily)
    const projects = [
        { title: "Portfolio Website", description: "A personal website showcasing my skills and projects." },
        { title: "To-Do List App", description: "A simple task manager built with JavaScript." }
    ];

    const projectContainer = document.querySelector(".projects");
    projects.forEach(proj => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
        projectContainer.appendChild(projectElement);
    });
});
