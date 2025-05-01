
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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

// Carousel Arrows
document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const left = container.querySelector('.carousel-arrow.left');
  const right = container.querySelector('.carousel-arrow.right');

  left.addEventListener('click', () => {
    track.scrollBy({ left: -200, behavior: 'smooth' });
  });

  right.addEventListener('click', () => {
    track.scrollBy({ left: 200, behavior: 'smooth' });
  });
});
