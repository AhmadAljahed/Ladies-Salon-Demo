/* =============================================
   LUMIÈRE LADIES SALON — main.js
   ============================================= */

// --- NAV SCROLL ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// --- MOBILE BURGER ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- REVEAL ON SCROLL ---
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// Trigger hero reveals immediately
document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 200 + i * 180);
});

// --- SMOOTH ACTIVE NAV LINK ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// --- BOOKING FORM SUBMIT ---
const bookBtn = document.querySelector('.booking__form .btn--gold');
if (bookBtn) {
  bookBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.booking__form .form-input');
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#D4A0A0';
        valid = false;
        setTimeout(() => input.style.borderColor = '', 2000);
      }
    });
    if (valid) {
      bookBtn.textContent = '✓ Request Sent!';
      bookBtn.style.background = '#7aaf7a';
      setTimeout(() => {
        bookBtn.textContent = 'Request Appointment';
        bookBtn.style.background = '';
        inputs.forEach(input => input.value = '');
      }, 3000);
    }
  });
}
