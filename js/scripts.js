// NAV TOGGLE
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  siteNav.classList.toggle('expanded');
  siteNav.classList.toggle('collapsed');
});

// FORM VALIDATION
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form) {
   form.addEventListener('submit', (e) => {
   e.preventDefault();
   let valid = true;
   successMsg.textContent = '';

   // helper to validate one field
   function checkField(id, validatorFn, errorText) {
      const field = form[id];
      const msgEl = field.nextElementSibling;
      if (!validatorFn(field.value.trim())) {
         msgEl.textContent = errorText;
         valid = false;
      } else {
         msgEl.textContent = '';
      }
   }

   // Name: non-empty
   checkField('name', val => val.length > 0, 'Please enter your name.');

   // Email: basic pattern
   checkField('email',
      val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      'Please enter a valid email.');

   // Message: at least 10 characters
   checkField('message',
      val => val.length >= 10,
      'Message must be at least 10 characters.');

   if (valid) {
      successMsg.textContent = 'Thanks for your message! (This is a demo — no email is actually sent.)';
      form.reset();
   }
   });
}

// PROJECT CARD EXPAND/COLLAPSE
document.querySelectorAll('.project-card').forEach(card => {
   card.addEventListener('click', () => {
     const isExpanded = card.getAttribute('data-expanded') === 'true';
     card.setAttribute('data-expanded', !isExpanded);
   });
 });
 
