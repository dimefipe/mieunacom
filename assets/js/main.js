// ===== FAQ FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        const answerContent = answer.querySelector('.faq__answer-content');
        
        // Establecer altura inicial para el elemento activo
        if (item.classList.contains('faq__item--active')) {
            const contentHeight = answerContent.scrollHeight;
            const computedStyle = window.getComputedStyle(answerContent);
            const paddingTop = parseInt(computedStyle.paddingTop);
            const paddingBottom = parseInt(computedStyle.paddingBottom);
            const totalHeight = contentHeight + paddingTop + paddingBottom;
            answer.style.maxHeight = totalHeight + 'px';
        }
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('faq__item--active');
            
            // Cerrar todos los otros acordeones con animación suave
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('faq__item--active')) {
                    otherItem.classList.remove('faq__item--active');
                    const otherAnswer = otherItem.querySelector('.faq__answer');
                    otherAnswer.style.maxHeight = '0px';
                    otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle el acordeón actual con animación suave
            if (isActive) {
                item.classList.remove('faq__item--active');
                answer.style.maxHeight = '0px';
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('faq__item--active');
                const contentHeight = answerContent.scrollHeight;
                const computedStyle = window.getComputedStyle(answerContent);
                const paddingTop = parseInt(computedStyle.paddingTop);
                const paddingBottom = parseInt(computedStyle.paddingBottom);
                const totalHeight = contentHeight + paddingTop + paddingBottom;
                answer.style.maxHeight = totalHeight + 'px';
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});

// ===== SMOOTH SCROLLING PARA NAVEGACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar scroll suave si el href es un fragmento válido
            if (href && href !== '#') {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});


// FLOAT BUTTON FUNCTIONALITY ================================
document.addEventListener("DOMContentLoaded", () => {
  const floatBtn = document.querySelector(".cta-float");
  const targets = document.querySelectorAll(".btn.btn-cta-secondary.btn-lg");

  if (!floatBtn || targets.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    // Si al menos uno de los botones está visible, ocultamos el flotante
    const anyVisible = entries.some(entry => entry.isIntersecting);

    if (anyVisible) {
      floatBtn.style.bottom = "-100px"; // se esconde suavemente
    } else {
      floatBtn.style.bottom = "16px"; // vuelve a subir
    }
  }, { threshold: 0.1 });

  // Observa todos los botones
  targets.forEach(target => observer.observe(target));
});

