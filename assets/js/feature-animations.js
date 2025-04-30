document.addEventListener('DOMContentLoaded', animateFeatures);
window.addEventListener('focus', animateFeatures);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => animateFeatures(card));
});

function animateFeatures(scope) {
    // scope: undefined (all), or a specific .project-card
    let featuresBlocks;
    if (scope && scope.querySelectorAll) {
        featuresBlocks = scope.querySelectorAll('.project-features');
    } else {
        featuresBlocks = document.querySelectorAll('.project-features');
    }
    featuresBlocks.forEach(features => {
        const items = Array.from(features.querySelectorAll('.feature-item'));
        items.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(30px)';
        });
        items.forEach((item, idx) => {
            setTimeout(() => {
                item.style.transition = 'opacity 0.9s cubic-bezier(.5,1.5,.5,1), transform 0.9s cubic-bezier(.5,1.5,.5,1)';
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, 400 * idx);
        });
    });
}
