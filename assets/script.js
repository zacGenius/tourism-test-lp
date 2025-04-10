// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Carousel
const heroSlides = document.querySelectorAll('.hero-slide');
let currentHeroSlide = 0;

function changeHeroSlide() {
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');
}

setInterval(changeHeroSlide, 6000);

// Destination Carousel
const destinationTrack = document.querySelector('.destination-track');
const destinationCards = document.querySelectorAll('.destination-card');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

function updateDestinationCarousel() {
    const cardWidth = destinationCards[0].offsetWidth;
    destinationTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateDestinationCarousel();
    });
});

// Auto slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % (destinationCards.length - 2);
    updateDestinationCarousel();
}, 5000);

// Testimonial Carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let currentTestimonial = 0;

function changeTestimonial() {
    testimonialSlides[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    testimonialSlides[currentTestimonial].classList.add('active');
}

setInterval(changeTestimonial, 7000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input');
    if (emailInput.value.trim() !== '') {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
});