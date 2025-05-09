        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.');
            contactForm.reset();
        });

        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Animasi Scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.project-card, .about-content, .contact-form');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state
        document.querySelectorAll('.project-card, .about-content, .contact-form').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.5s ease';
        });

        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
