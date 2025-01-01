document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize skill bars
    const skillBars = document.querySelectorAll('.bar');
    skillBars.forEach(bar => {
        const width = bar.style.getPropertyValue('--bar-width') || '0%';
        bar.style.setProperty('width', width);
    });

    // Add hover effect on project images
    const projectImages = document.querySelectorAll('.project-item img');
    projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});