document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimations();
    
    addInteractiveElements();
    
    addProfileImageEffects();
});

function addScrollAnimations() {
    const revealElements = document.querySelectorAll('.team-member, .section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function addInteractiveElements() {
    const skillBars = document.querySelectorAll('.progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
    
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        const icon = link.querySelector('i');
        const iconClass = icon.className;
        let platform = '';
        
        if (iconClass.includes('github')) platform = 'GitHub';
        else if (iconClass.includes('linkedin')) platform = 'LinkedIn';
        else if (iconClass.includes('dribbble')) platform = 'Dribbble';
        else if (iconClass.includes('behance')) platform = 'Behance';
        else if (iconClass.includes('twitter')) platform = 'Twitter';
        else if (iconClass.includes('stack-overflow')) platform = 'Stack Overflow';
        else if (iconClass.includes('medium')) platform = 'Medium';
        else if (iconClass.includes('instagram')) platform = 'Instagram';
        
        link.setAttribute('title', platform);
    });
}

function addProfileImageEffects() {
    const profileImages = document.querySelectorAll('.profile-image');
    
    profileImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1)';
        });
        
        image.addEventListener('mousemove', (e) => {
            const img = image.querySelector('img');
            const rect = image.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            img.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
        });
    });
}