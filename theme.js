/*=========================================
  CodexGenz Theme Toggle
=========================================*/

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

/* ==========================
   Load Saved Theme
========================== */

const savedTheme = localStorage.getItem("codexgenz-theme");

if (savedTheme === "dark") {

    body.classList.add("dark");

    themeIcon.classList.remove("ri-moon-fill");
    themeIcon.classList.add("ri-sun-fill");

}

/* ==========================
   Toggle Theme
========================== */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("codexgenz-theme", "dark");

        themeIcon.classList.remove("ri-moon-fill");
        themeIcon.classList.add("ri-sun-fill");

    } else {

        localStorage.setItem("codexgenz-theme", "light");

        themeIcon.classList.remove("ri-sun-fill");
        themeIcon.classList.add("ri-moon-fill");

    }

});

/* ==========================
   Smooth Theme Transition
========================== */

window.addEventListener("load", () => {

    document.body.style.transition = "background .4s ease, color .4s ease";

});