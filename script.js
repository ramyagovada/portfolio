// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // DOM Elements
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelector('.nav-links');
    const check = document.getElementById('check');
    const form = document.getElementById('contactForm');

    // Mobile Menu Toggle
    if (menuIcon && closeIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.add('active');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        });

        closeIcon.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                check.checked = false;
            });
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    document.addEventListener("DOMContentLoaded", () => {
        const revealElements = document.querySelectorAll(".reveal");

        function revealOnScroll() {
            revealElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 120) {
                    el.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    });

    // Initial reveal on load
    revealOnScroll();

    // Reveal on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Validation
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');

            // Simple validation
            if (!name.value.trim()) {
                alert('Please enter your name');
                return;
            }

            if (!email.value.trim()) {
                alert('Please enter your email');
                return;
            }

            if (!message.value.trim()) {
                alert('Please enter your message');
                return;
            }

            // If validation passes
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Add active class to current section in navigation
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section, .hero-section');
        const navLinksItems = document.querySelectorAll('.nav-links a');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Add animation to skills progress bars when they come into view
    const skillBars = document.querySelectorAll('.bar span');

    const checkSkillBars = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const barVisible = 150;

            if (barTop < window.innerHeight - barVisible) {
                const width = bar.className;
                if (width) {
                    bar.style.width = getComputedStyle(bar).width;
                }
            }
        });
    };

    window.addEventListener('scroll', checkSkillBars);
    checkSkillBars();

    // Add scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bx bx-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add loading animation to hero section
    const heroElements = document.querySelectorAll('.hero-content .reveal');

    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300 * index);
    });

    // Animate blob shape
    const blob = document.querySelector('.hero-img-container');
    if (blob) {
        setTimeout(() => {
            blob.style.opacity = '1';
            blob.style.transform = 'translateY(0)';
        }, 1000);
    }

});