// app.js — handles price formatting, price calculator, form submission feedback, and year
(function(){
  // Currency formatter for ZAR
  const formatter = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' });

  // Format static price elements
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('.price').forEach(el => {
      const raw = Number(el.getAttribute('data-price')) || 0;
      el.textContent = formatter.format(raw);
    });

    document.querySelectorAll('.calc-price').forEach(el => {
      const parent = el.closest('label');
      const input = parent.querySelector('input[type="checkbox"]');
      const val = Number(input.value) || 0;
      el.textContent = formatter.format(val);
    });

    // Price calculator logic
    const form = document.getElementById('price-form');
    const totalEl = document.getElementById('calc-total');
    function updateTotal(){
      const checked = Array.from(form.querySelectorAll('input[name="service"]:checked'));
      const total = checked.reduce((s,i)=>s + Number(i.value),0);
      totalEl.textContent = formatter.format(total);
    }
    form.addEventListener('change', updateTotal);
    updateTotal();

    // Contact form submission feedback (works with Formspree or similar that redirects)
    const contactForm = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    contactForm.addEventListener('submit', (e)=>{
      // Let the browser handle POST to Formspree, but show a temporary message
      status.textContent = 'Sending...';
      setTimeout(()=>{
        status.textContent = 'If the form did not navigate away, your message was sent. Thank you.';
      },1200);
    });

  });
})();
