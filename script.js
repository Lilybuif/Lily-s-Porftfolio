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

  initDesignProcess();
  initFinalSolution();
  initProjectOverview();
  initProjectsSection();
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

// Design Process Animations
function initDesignProcess() {
  const processPhases = document.querySelectorAll('.process-phase');
  const mediaItems = document.querySelectorAll('.media-item');
  const metrics = document.querySelectorAll('.metric');
  const userQuotes = document.querySelectorAll('.user-quote');

  // Phase hover animations
  processPhases.forEach(phase => {
    phase.addEventListener('mouseenter', () => {
      phase.style.transform = 'translateY(-5px)';
      phase.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });

    phase.addEventListener('mouseleave', () => {
      phase.style.transform = 'translateY(0)';
      phase.style.boxShadow = 'none';
    });
  });

  // Media gallery animations
  mediaItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.media-caption');
      
      img.style.transform = 'scale(1.1)';
      caption.style.transform = 'translateY(0)';
    });

    item.addEventListener('mouseleave', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.media-caption');
      
      img.style.transform = 'scale(1)';
      caption.style.transform = 'translateY(100%)';
    });
  });

  // Metrics animations
  metrics.forEach(metric => {
    metric.addEventListener('mouseenter', () => {
      const value = metric.querySelector('.metric-value');
      value.style.transform = 'scale(1.1)';
      value.style.color = '#ff6b6b';
    });

    metric.addEventListener('mouseleave', () => {
      const value = metric.querySelector('.metric-value');
      value.style.transform = 'scale(1)';
      value.style.color = 'var(--accent-color)';
    });
  });

  // User quotes animations
  userQuotes.forEach(quote => {
    quote.addEventListener('mouseenter', () => {
      quote.style.transform = 'translateY(-5px) rotate(1deg)';
      quote.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    quote.addEventListener('mouseleave', () => {
      quote.style.transform = 'translateY(0) rotate(0)';
      quote.style.boxShadow = 'none';
    });
  });

  // Scroll reveal animation for process phases
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  processPhases.forEach((phase, index) => {
    phase.style.opacity = '0';
    phase.style.transform = `translateX(${index % 2 === 0 ? '-' : ''}50px)`;
    phase.style.transition = 'all 0.6s ease-out';
    observer.observe(phase);
  });
}

function initFinalSolution() {
  const features = document.querySelectorAll('.feature');
  const impactMetrics = document.querySelectorAll('.impact-metrics li');
  const solutionOverview = document.querySelector('.solution-overview');

  // Feature card animations
  features.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = `all 0.6s ease-out ${index * 0.2}s`;

    feature.addEventListener('mouseenter', () => {
      const img = feature.querySelector('.feature-img');
      if (img) {
        img.style.transform = 'scale(1.1)';
      }
    });

    feature.addEventListener('mouseleave', () => {
      const img = feature.querySelector('.feature-img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });

  // Impact metrics animations
  impactMetrics.forEach((metric, index) => {
    metric.style.opacity = '0';
    metric.style.transform = 'translateY(20px)';
    metric.style.transition = `all 0.6s ease-out ${index * 0.2}s`;

    metric.addEventListener('mouseenter', () => {
      metric.style.transform = 'translateY(-5px)';
      metric.style.background = 'rgba(173, 69, 153, 0.2)';
    });

    metric.addEventListener('mouseleave', () => {
      metric.style.transform = 'translateY(0)';
      metric.style.background = 'rgba(173, 69, 153, 0.1)';
    });
  });

  // Solution overview animation
  if (solutionOverview) {
    solutionOverview.style.opacity = '0';
    solutionOverview.style.transform = 'translateY(20px)';
    solutionOverview.style.transition = 'all 0.6s ease-out';
  }

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  features.forEach(feature => observer.observe(feature));
  impactMetrics.forEach(metric => observer.observe(metric));
  if (solutionOverview) observer.observe(solutionOverview);
}

function initProjectOverview() {
  const metaItems = document.querySelectorAll('.meta-item');
  const overviewContent = document.querySelector('.overview-content');
  const projectOverview = document.querySelector('.project-overview');

  // Meta items animations
  metaItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;

    item.addEventListener('mouseenter', () => {
      const title = item.querySelector('h3');
      if (title) {
        title.style.color = '#ff6b6b';
      }
    });

    item.addEventListener('mouseleave', () => {
      const title = item.querySelector('h3');
      if (title) {
        title.style.color = 'var(--accent-color)';
      }
    });
  });

  // Overview content animation
  if (overviewContent) {
    overviewContent.style.opacity = '0';
    overviewContent.style.transform = 'translateY(20px)';
    overviewContent.style.transition = 'all 0.6s ease-out 0.3s';
  }

  // Project overview section animation
  if (projectOverview) {
    const heading = projectOverview.querySelector('h2');
    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      heading.style.transition = 'all 0.6s ease-out';
    }
  }

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  metaItems.forEach(item => observer.observe(item));
  if (overviewContent) observer.observe(overviewContent);
  if (projectOverview) {
    const heading = projectOverview.querySelector('h2');
    if (heading) observer.observe(heading);
  }
}

// Project Navigation Enhancement
document.addEventListener('DOMContentLoaded', function() {
  const projectLinks = document.querySelectorAll('.project-navigation a');
  
  projectLinks.forEach(link => {
    // Click animation
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
        window.location.href = targetUrl;
      }, 150);
    });

    // Hover animation
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

// Projects Section Animation
function initProjectsSection() {
  const projectCards = document.querySelectorAll('.index-project-card');
  
  // Initial styles
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    // Alternate the initial transform direction based on card position
    const translateX = index % 2 === 0 ? '-50px' : '50px';
    card.style.transform = `translateX(${translateX})`;
  });

  // Intersection Observer for reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'all 0.6s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.1 });

  projectCards.forEach(card => observer.observe(card));

  // Add hover effect for project images
  projectCards.forEach(card => {
    const image = card.querySelector('.index-project-image img');
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
}

// About Page Animations
document.addEventListener('DOMContentLoaded', () => {
  // Add delay to habit cards
  const habitCards = document.querySelectorAll('.habit-card');
  habitCards.forEach((card, index) => {
    card.style.setProperty('--delay', index);
  });

  // Parallax effect for about photo
  const aboutPhoto = document.querySelector('.about-photo');
  if (aboutPhoto) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      aboutPhoto.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.about-text, .about-photo, .favorites h3, .habit-card, .contact').forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll for back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Add hover effect to habit cards
  habitCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 20px 40px rgba(173, 69, 153, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });

  // Add typing effect to about text
  const aboutText = document.querySelector('.about-text p');
  if (aboutText) {
    const text = aboutText.textContent;
    aboutText.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        aboutText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    }
    
    // Start typing effect when element is in view
    const textObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeWriter();
        textObserver.unobserve(aboutText);
      }
    }, { threshold: 0.5 });
    
    textObserver.observe(aboutText);
  }

  // Add particle effect to background
  const container = document.querySelector('.about-container');
  if (container) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(particle);
    }
  }
});
