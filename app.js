/*=========================================
  CodexGenz Main JavaScript
=========================================*/

/* -----------------------------
   DOM Elements
------------------------------ */

const loader = document.querySelector(".loader");
const progressBar = document.getElementById("progress-bar");
const backToTop = document.getElementById("backToTop");
const faqItems = document.querySelectorAll(".faq-item");
const counters = document.querySelectorAll(".stat-card h3");

/* -----------------------------
   Loader
------------------------------ */

window.addEventListener("load", () => {

    const header = document.querySelector("header");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        header.classList.add("show");

    }, 1200);

});

/* -----------------------------
   Scroll Progress Bar
------------------------------ */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* -----------------------------
   Back To Top Button
------------------------------ */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* -----------------------------
   FAQ Accordion
------------------------------ */

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* -----------------------------
   Counter Animation
------------------------------ */

const animateCounter = (counter) => {

    const target = counter.innerText;

    const numericTarget = parseInt(target.replace(/\D/g, ""));

    const suffix = target.replace(/[0-9]/g, "");

    let current = 0;

    const increment = Math.ceil(numericTarget / 80);

    const update = () => {

        current += increment;

        if (current >= numericTarget) {

            counter.innerText = numericTarget + suffix;

            return;

        }

        counter.innerText = current + suffix;

        requestAnimationFrame(update);

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* -----------------------------
   Scroll Reveal Animation
------------------------------ */

const revealElements = document.querySelectorAll(

    ".feature-card, .service-card, .course-card, .price-card, .testimonial-card, .stat-card, .about-card"

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".7s ease";

});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => {

    revealObserver.observe(el);

});

/* -----------------------------
   Ripple Button Effect
------------------------------ */

document.querySelectorAll(

    ".btn, .primary-btn, .secondary-btn"

).forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left =

            e.clientX -

            this.getBoundingClientRect().left -

            radius + "px";

        circle.style.top =

            e.clientY -

            this.getBoundingClientRect().top -

            radius + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/* -----------------------------
   Floating Hero Card
------------------------------ */

const floatingCard = document.querySelector(".floating-card");

window.addEventListener("mousemove",(e)=>{

    if(!floatingCard) return;

    const x =

        (window.innerWidth/2 - e.clientX) / 40;

    const y =

        (window.innerHeight/2 - e.clientY) / 40;

    floatingCard.style.transform =

        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

/* -----------------------------
   Navbar Shadow
------------------------------ */

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>20){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="none";

    }

});

console.log("🚀 CodexGenz Loaded Successfully");
/* Contact Form */
const contactForm = document.getElementById("contactForm");
const popup = document.querySelector(".success-popup");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const btn = contactForm.querySelector("button");

        btn.disabled = true;
        btn.innerHTML = "Sending...";

        setTimeout(()=>{

            btn.innerHTML = "✓ Message Sent";
            btn.style.background = "#22c55e";

            popup.classList.add("show");

            contactForm.reset();

            setTimeout(()=>{

                popup.classList.remove("show");

                btn.innerHTML = "Send Message";
                btn.style.background = "";
                btn.disabled = false;

            },3000);

        },2000);

    });

}