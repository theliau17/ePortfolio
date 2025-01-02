document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Hide all sections and show only the target section
            sections.forEach(section => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'flex'; // Ensures proper centering
        });
    });

    // Ensure the first section is visible on load
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'flex' : 'none';
        });
    });

    // Initialize skill bars when the "Skills" section is visible
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = document.querySelectorAll('.bar');
                skillBars.forEach(bar => {
                    const width = bar.style.getPropertyValue('--bar-width');
                    bar.style.width = width;
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

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
     // Lightbox functionality for interests section
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const closeButton = document.createElement('span');
    closeButton.classList.add('lightbox-close');
    closeButton.innerHTML = '&times;';
    lightbox.appendChild(closeButton);

    const content = document.createElement('div');
    lightbox.appendChild(content);

    const interestItems = document.querySelectorAll('.interest-item img, .interest-item video');
    interestItems.forEach(item => {
        item.addEventListener('click', () => {
            content.innerHTML = ''; // Clear previous content
            const clone = item.cloneNode(true);
            content.appendChild(clone);
            lightbox.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});

