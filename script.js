// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav
function toggleMobile() {
  document.getElementById('mobileNav').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileNav').classList.contains('open') ? 'hidden' : '';
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Waitlist form
function handleWaitlist(e) {
  e.preventDefault();
  document.getElementById('waitlistForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// Contact form
function handleContact(e) {
  e.preventDefault();
  e.target.innerHTML = '<div style="text-align:center;padding:24px;color:var(--grn);font-size:15px;font-weight:500">✓ &nbsp; Message sent. We\'ll get back to you shortly.</div>';
}

// Smooth active link
const sections = ['hero','about','mission','products','story','waitlist','contact'];
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    }
  });
});