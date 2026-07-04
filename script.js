// ===========================
// Smooth Navbar Shadow
// ===========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});


// ===========================
// Animasi Card Saat Muncul
// ===========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.7s";

    observer.observe(card);

});


// ===========================
// Detail Tipe Rumah
// ===========================

const detailButtons = document.querySelectorAll(".detail-button");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

detailButtons.forEach(button => {
    button.addEventListener("click", function() {
        modalTitle.textContent = this.dataset.title;
        modalPrice.textContent = this.dataset.price;
        modalDescription.textContent = this.dataset.description;
    });
});