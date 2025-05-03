// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .project-section');

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
      element.classList.add('visible');
    }
  });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
}

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add scroll event listener
window.addEventListener('scroll', toggleBackToTop);

// Initial check
toggleBackToTop();

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
  // Add float animation to hero image
  const heroImage = document.querySelector('.image-wrapper img:first-child');
  if (heroImage) {
    heroImage.classList.add('animate-float');
  }

  // Add fade-in animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('animate-fadeInUp');
    card.style.animationDelay = `${index * 0.2}s`;
  });

  // Add slide-in animations to skills
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.classList.add(index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight');
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Add glow animation to contact links
  const contactLinks = document.querySelectorAll('.contact a');
  contactLinks.forEach(link => {
    link.classList.add('animate-glow');
  });
});

// Event Listeners
window.addEventListener('scroll', () => {
  revealOnScroll();
  toggleBackToTop();
});

// Initial call to check visible elements
revealOnScroll();
toggleBackToTop();

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
}

// Mouse Move Effect for Project Cards
const projectCardsMouse = document.querySelectorAll('.project-card');
projectCardsMouse.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update button styles
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Fade out all tabs first
    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    const tabId = button.getAttribute('data-tab');
    const selectedContent = document.getElementById(tabId);

    // Delay fade-in to create smooth transition
    setTimeout(() => {
      selectedContent.classList.add('active');
    }, 100);
  });
});

// Main tab toggle
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// Sub-tab toggle
document.querySelectorAll('.sub-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const subtab = btn.dataset.subtab;

    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(subtab).classList.add('active');
  });
});

// Project carousel functionality
const projectsWrapper = document.querySelector('.index-projects-wrapper');
const indexProjectCards = document.querySelectorAll('.index-project-card');

// Initialize the carousel
projectsWrapper.style.transform = 'translateX(0)';

// Skills slider infinite loop
document.addEventListener('DOMContentLoaded', function() {
  const skillsGrid = document.querySelector('.skills-grid');
  const skillItems = document.querySelectorAll('.skill-item');
  
  // Clone the skill items for seamless looping
  skillItems.forEach(item => {
    const clone = item.cloneNode(true);
    skillsGrid.appendChild(clone);
  });

  // Reset animation when it reaches the end
  skillsGrid.addEventListener('animationiteration', () => {
    skillsGrid.style.animation = 'none';
    skillsGrid.offsetHeight; // Trigger reflow
    skillsGrid.style.animation = 'scrollLeft 20s linear infinite';
  });
});
