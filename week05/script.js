const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const contactForm = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

openBtn.addEventListener('click', () => {
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  const focusableEls = modal.querySelectorAll(focusableSelectors);
  focusableEls[0].focus();

  document.addEventListener('keydown', trapTab);
  document.addEventListener('keydown', closeOnEscape);
});

closeBtn.addEventListener('click', closeModal);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  closeModal();
  statusMessage.textContent = 'Your message was submitted successfully.';
});

function closeModal() {
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  openBtn.focus();
  document.removeEventListener('keydown', trapTab);
  document.removeEventListener('keydown', closeOnEscape);
}

function closeOnEscape(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function trapTab(e) {
  const focusableEls = modal.querySelectorAll(focusableSelectors);
  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault();
      lastEl.focus();
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault();
      firstEl.focus();
    }
  }
}
