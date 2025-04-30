// Utilitaire pour détecter si un élément est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function sequentialReveal(containerSelector, itemSelector, delay = 400, duration = 0.9) {
    document.querySelectorAll(containerSelector).forEach(container => {
        const items = Array.from(container.querySelectorAll(itemSelector));
        items.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(30px)';
        });
        items.forEach((item, idx) => {
            setTimeout(() => {
                item.style.transition = `opacity ${duration}s cubic-bezier(.5,1.5,.5,1), transform ${duration}s cubic-bezier(.5,1.5,.5,1)`;
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, delay * idx);
        });
    });
}

function revealOnVisible() {
    // Project cards
    document.querySelectorAll('.project-card').forEach(card => {
        if (isElementInViewport(card) && !card.classList.contains('revealed')) {
            card.classList.add('revealed');
            sequentialReveal('.project-card.revealed', ':scope > *', 200, 0.8);
        }
    });
    // Skill categories
    document.querySelectorAll('.skill-category').forEach(cat => {
        if (isElementInViewport(cat) && !cat.classList.contains('revealed')) {
            cat.classList.add('revealed');
            sequentialReveal('.skill-category.revealed', ':scope > *', 200, 0.8);
        }
    });
    // Method cards
    document.querySelectorAll('.method-card').forEach(card => {
        if (isElementInViewport(card) && !card.classList.contains('revealed')) {
            card.classList.add('revealed');
            sequentialReveal('.method-card.revealed', ':scope > *', 200, 0.8);
        }
    });
}

window.addEventListener('scroll', revealOnVisible);
window.addEventListener('resize', revealOnVisible);
document.addEventListener('DOMContentLoaded', revealOnVisible);
