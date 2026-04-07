// Component Loader - loads nav, contact, and footer on every page
async function loadComponents() {
  try {
    // Load nav
    const navResponse = await fetch('components/nav.html');
    const navHTML = await navResponse.text();
    const navPlaceholder = document.getElementById('nav-component');
    if (navPlaceholder) {
      navPlaceholder.innerHTML = navHTML;
      initHamburger();
    }

    // Load contact
    const contactResponse = await fetch('components/contact.html');
    const contactHTML = await contactResponse.text();
    const contactPlaceholder = document.getElementById('contact-component');
    if (contactPlaceholder) {
      contactPlaceholder.innerHTML = contactHTML;
      // Trigger reveal animation if loaded after DOM
      setTimeout(() => {
        const reveals = document.querySelectorAll('.reveal');
        const obs = new IntersectionObserver(
          entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
          { threshold: 0.1 }
        );
        reveals.forEach(el => obs.observe(el));
      }, 100);
    }

    // Load footer
    const footerResponse = await fetch('components/footer.html');
    const footerHTML = await footerResponse.text();
    const footerPlaceholder = document.getElementById('footer-component');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = footerHTML;
      console.log('Footer loaded successfully');
    } else {
      console.warn('Footer placeholder not found');
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }
}

// Initialize hamburger menu
function initHamburger() {
  const ham = document.getElementById('ham');
  const navLinks = document.getElementById('navLinks');
  if (ham && navLinks) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        navLinks.classList.remove('open');
      })
    );
  }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);