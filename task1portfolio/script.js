// Navbar active link on scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Fade animation on page load

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// Scroll to top button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";
scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});