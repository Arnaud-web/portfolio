// Animations au défilement
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .method-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state for animated elements
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .method-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    // Trigger on load
    animateOnScroll();
    
    // Trigger on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Floating animation for tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('floating');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('tech-particles');
    const techLogos = [
        'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
        'https://cdn.worldvectorlogo.com/logos/php-1.svg',
        'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
        'https://cdn.worldvectorlogo.com/logos/symfony.svg',
        'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
        'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'https://cdn.worldvectorlogo.com/logos/doctrine.svg',
        'https://cdn.worldvectorlogo.com/logos/twig-1.svg',
        'https://cdn.worldvectorlogo.com/logos/html-1.svg',
        'https://cdn.worldvectorlogo.com/logos/css-3.svg'
    ];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        
        // Choisir un logo aléatoire
        const randomLogo = techLogos[Math.floor(Math.random() * techLogos.length)];
        particle.style.backgroundImage = `url('${randomLogo}')`;
        
        // Position aléatoire
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation différente pour chaque particule
        const duration = 10 + Math.random() * 20;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
        
        // Supprimer après l'animation pour éviter la surcharge
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
    
    // Créer des particules régulièrement (moitié moins fréquemment)
    setInterval(createParticle, 1000);
    
    // Créer moins de particules au démarrage
    for (let i = 0; i < 10; i++) {
        setTimeout(createParticle, i * 600);
    }
    
    function connectParticles() {
        // Supprimer les anciennes lignes
        document.querySelectorAll('.particle-line').forEach(line => line.remove());
        
        const particles = Array.from(document.querySelectorAll('.tech-particle'));
        
        // Créer des connexions seulement entre particules proches
        particles.forEach((p1, i) => {
            particles.slice(i+1).forEach(p2 => {
                const rect1 = p1.getBoundingClientRect();
                const rect2 = p2.getBoundingClientRect();
                
                const x1 = rect1.left + rect1.width/2;
                const y1 = rect1.top + rect1.height/2;
                const x2 = rect2.left + rect2.width/2;
                const y2 = rect2.top + rect2.height/2;
                
                const dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
                
                if (dist < 150) { // Seuil de distance
                    const line = document.createElement('div');
                    line.className = 'particle-line';
                    
                    // Position au centre entre les deux particules
                    line.style.left = `${(x1 + x2)/2}px`;
                    line.style.top = `${(y1 + y2)/2}px`;
                    
                    // Longueur et rotation
                    const angle = Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;
                    line.style.width = `${dist}px`;
                    line.style.transform = `rotate(${angle}deg)`;
                    line.style.transformOrigin = 'left center';
                    
                    // Opacité variable
                    line.style.opacity = (1 - dist/150).toFixed(2);
                    
                    particlesContainer.appendChild(line);
                }
            });
        });
    }
    
    // Mettre à jour les connexions à chaque frame
    function animate() {
        connectParticles();
        requestAnimationFrame(animate);
    }
    
    animate();
});

// Animation sur chaque mot pour .animated-words
function animateWords() {
    document.querySelectorAll('.animated-words').forEach(element => {
        const words = element.textContent.split(' ');
        element.innerHTML = words.map((word, i) => `<span class="word-anim" style="opacity:0; display:inline-block; transform:translateY(20px); transition:all 0.6s cubic-bezier(.77,0,.18,1) ${i*0.12}s">${word}</span>`).join(' ');
        setTimeout(() => {
            element.querySelectorAll('.word-anim').forEach(span => {
                span.style.opacity = 1;
                span.style.transform = 'translateY(0)';
            });
        }, 100);
    });
}
document.addEventListener('DOMContentLoaded', animateWords);
