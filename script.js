// SS Mumbos Trading Pty Ltd — site behavior

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (front-end only — wire this up to your email/CRM backend of choice)
const form = document.getElementById('quote-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();

  if (!name || !phone || !email) {
    status.textContent = 'Please fill in your name, phone, and email so we can reach you.';
    status.style.color = '#F5A623';
    return;
  }

  // Placeholder success state. Replace this block with a real submission
  // (e.g. fetch() to your backend, Formspree, or an email API).
  status.textContent = `Thanks, ${name.split(' ')[0]} — we've got your request and will be in touch shortly.`;
  status.style.color = '#8B96A3';
  form.reset();
});
