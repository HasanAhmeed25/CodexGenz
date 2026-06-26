/*=========================================
  CodexGenz Navbar
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

/* ==========================
   Mobile Menu
========================== */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("ri-menu-3-line");
        icon.classList.add("ri-close-line");

    } else {

        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");

    }

});

/* ==========================
   Close Menu On Click
========================== */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");

    });

});

/* ==========================
   Sticky Navbar
========================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(238,242,249,0.9)";
        header.style.backdropFilter = "blur(15px)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================
   Smooth Scroll
========================== */

navItems.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});