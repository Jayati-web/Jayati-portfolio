document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // 1. *Smooth Scrolling for Sections*
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // 2. *Login Handling*
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username === "yourUsername" && password === "yourPassword") {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to home
            } else {
                alert("Invalid credentials, try again.");
            }
        });
    }

    // 3. *Dynamic Content Loading (Optional)*
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById("content").innerHTML = data;
            })
            .catch(error => console.error("Error loading page:", error));
    }

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const page = this.getAttribute("data-page");
            loadContent(page);
        });
    });
});