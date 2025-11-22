// Simple JS for menu toggle, smooth scrolling, and small reveal animations
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.querySelector('.nav nav');

  menuBtn && menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile menu
      if (window.innerWidth < 900 && nav) nav.style.display = '';
    })
  });

  // simple fade-in on scroll
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.section, .project-card, .hero-inner').forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 600ms ease, transform 600ms ease';
    observer.observe(el);
  });
});
