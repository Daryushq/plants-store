const heroLogo = document.querySelector('.hero-logo');
const cards = document.querySelectorAll('.card');

setTimeout(() => {
    heroLogo.style.opacity = 1
}, 1000)

const options = {
    threshold: 0.3,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('card-show')
        } else {
            entry.target.classList.remove('card-show')
        }
    })
}, options)

cards.forEach((card) => observer.observe(card))