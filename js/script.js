document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuIcon.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuIcon) {
                menuIcon.querySelector('i').classList.replace('ph-x', 'ph-list');
            }
        });
    });

    // Quiz Logic (if on mentoria.html)
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        let answers = { objetivo: '', experiencia: '', dias: '' };

        window.selectOption = (field, value, nextStepId) => {
            answers[field] = value;
            goToStep(nextStepId);
        };

        window.goToStep = (stepNumber) => {
            document.querySelectorAll('.quiz-step').forEach(step => step.classList.remove('active'));
            document.getElementById('step' + stepNumber).classList.add('active');
            const progress = (stepNumber - 1) * 33;
            document.getElementById('progressBar').style.width = progress + '%';
        };

        window.prevStep = (stepNumber) => goToStep(stepNumber);

        window.finishQuiz = () => {
            const name = document.getElementById('clientName').value;
            const age = document.getElementById('clientAge').value;

            if (name.length < 3 || !age) {
                alert("Por favor, preencha seu nome e sua idade.");
                return;
            }

            const phone = "5500000000000"; // Substituir pelo número real
            const text = `*Olá Professor!*%0A%0AAcabei de preencher a análise de perfil no site:%0A%0A👤 *Nome:* ${name}%0A🎂 *Idade:* ${age} anos%0A🎯 *Objetivo:* ${answers.objetivo}%0A🏋️ *Experiência:* ${answers.experiencia}%0A📅 *Disponibilidade:* ${answers.dias}%0A%0AGostaria de saber como funciona a mentoria!`;
            
            window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
        };
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            contactForm.reset();
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.card, .step, .pricing-card, .testimonial-card, .stat-item');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
