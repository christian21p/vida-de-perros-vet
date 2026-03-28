document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
            navbar.style.padding = '1rem 0';
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // We will just create a simple toggle for mobile (requires small CSS injection or class toggle)
    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            if (isVisible) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#fff';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // 3. Contact Form to WhatsApp Interceptor
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const pet = document.getElementById('pet').value;
            const message = document.getElementById('message').value;
            
            // Build WhatsApp Message
            const waNumber = '5493513674538';
            const text = `Hola Vida de Perros! Soy ${name}, dueño/a de ${pet}.%0A%0A${message}`;
            const waLink = `https://wa.me/${waNumber}?text=${text}`;
            
            // Redirect to WhatsApp
            window.open(waLink, '_blank');
        });
    }

});
