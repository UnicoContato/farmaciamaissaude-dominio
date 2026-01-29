// Header Show/Hide Logic
let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-content').forEach(el => {
    observer.observe(el);
});

// Modal Logic
function toggleModal(show) {
    const modal = document.getElementById('privacy-modal');
    if (show) {
        modal.classList.remove('hidden');
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.transition = 'opacity 0.3s ease';
            modal.style.opacity = 1;
        }, 10);
    } else {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}