/*=========================================
        CodexGenz Premium Navbar
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

let lastScroll = 0;

/*==========================
  Mobile Menu
==========================*/

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

/*==========================
  Close Menu On Link Click
==========================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");

    });

});

/*==========================
  Close Menu Outside Click
==========================*/

document.addEventListener("click", (e) => {

    if (

        !menuBtn.contains(e.target) &&
        !navLinks.contains(e.target)

    ) {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");

    }

});

/*==========================
  Sticky Navbar
==========================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        if (document.body.classList.contains("dark")) {

            header.style.background = "rgba(15,23,42,.92)";

        } else {

            header.style.background = "rgba(255,255,255,.92)";

        }

        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

/*==========================
  Hide Navbar On Scroll Down
==========================*/

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (

        currentScroll > lastScroll &&
        currentScroll > 150

    ) {

        header.style.transform = "translateY(-120%)";

    } else {

        header.style.transform = "translateY(0)";

    }

    lastScroll = currentScroll;

});

/*==========================
  Active Navigation
==========================*/

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

/*==========================
  Smooth Scroll
==========================*/

navItems.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});