/* ═══════════════════════════════════════════════════════════════
   FIGURING OUT PODCAST — JAVASCRIPT / INTERACTIVITY
═══════════════════════════════════════════════════════════════ */

/* ─ Navbar Scroll Effect ──────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ─ Hamburger Menu ────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'fixed';
  navLinks.style.inset = '72px 0 0 0';
  navLinks.style.background = 'rgba(10,10,10,0.97)';
  navLinks.style.padding = '40px 32px';
  navLinks.style.gap = '28px';
  navLinks.style.zIndex = '999';
  navLinks.style.backdropFilter = 'blur(20px)';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.style.display = 'none';
  });
});

/* ─ Episode Filter Tabs ───────────────────────────────────── */
const filterTabs = document.querySelectorAll('.filter-tab');
const episodeCards = document.querySelectorAll('.episodes-grid .episode-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    episodeCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ─ Episode Search ────────────────────────────────────────── */
const episodeSearch = document.getElementById('episodeSearch');
if (episodeSearch) {
  episodeSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    episodeCards.forEach(card => {
      const title = card.querySelector('.ep-title').textContent.toLowerCase();
      const desc = card.querySelector('.ep-desc').textContent.toLowerCase();
      const matches = title.includes(query) || desc.includes(query);
      card.classList.toggle('hidden', !matches);
    });
  });
}

/* ─ Guest Search ──────────────────────────────────────────── */
const guestSearch = document.getElementById('guestSearch');
const guestCards = document.querySelectorAll('.guest-card');

if (guestSearch) {
  guestSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    guestCards.forEach(card => {
      const name = card.dataset.name || '';
      const role = card.querySelector('.guest-role').textContent.toLowerCase();
      card.classList.toggle('hidden', !name.includes(query) && !role.includes(query));
    });
  });
}

/* ─ Testimonial Carousel ──────────────────────────────────── */
const testimonials = document.querySelectorAll('.testimonial');
const tDots = document.querySelectorAll('.t-dot');
let currentT = 0;
let tInterval;

function showTestimonial(index) {
  testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
  tDots.forEach((d, i) => d.classList.toggle('active', i === index));
  currentT = index;
}

function startTestimonialAuto() {
  tInterval = setInterval(() => {
    showTestimonial((currentT + 1) % testimonials.length);
  }, 5000);
}

tDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(tInterval);
    showTestimonial(i);
    startTestimonialAuto();
  });
});

startTestimonialAuto();

/* ─ Audio Player Bar ──────────────────────────────────────── */
const audioBar = document.getElementById('audioPlayerBar');
const apPlay = document.getElementById('ap-play');
const apClose = document.getElementById('ap-close');
const progressFill = document.getElementById('progressFill');

let isPlaying = false;
let progressValue = 12;
let progressTimer;

// Show player when a play button is clicked
document.querySelectorAll('.ep-play-btn').forEach((btn, idx) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    audioBar.classList.add('visible');
    startProgress();
  });
});

function startProgress() {
  clearInterval(progressTimer);
  isPlaying = true;
  apPlay.textContent = '⏸';
  progressTimer = setInterval(() => {
    if (progressValue < 100) {
      progressValue += 0.05;
      if (progressFill) progressFill.style.width = progressValue + '%';
    } else {
      clearInterval(progressTimer);
    }
  }, 200);
}

apPlay.addEventListener('click', () => {
  if (isPlaying) {
    clearInterval(progressTimer);
    isPlaying = false;
    apPlay.textContent = '▶';
  } else {
    startProgress();
  }
});

apClose.addEventListener('click', () => {
  audioBar.classList.remove('visible');
  clearInterval(progressTimer);
  isPlaying = false;
  apPlay.textContent = '▶';
});

/* ─ Newsletter Form ───────────────────────────────────────── */
const nlForm = document.getElementById('newsletterForm');
const nlEmail = document.getElementById('nlEmail');
const nlBtn = document.querySelector('.nl-btn');

if (nlForm) {
  nlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = nlEmail.value;
    if (email && email.includes('@')) {
      nlBtn.textContent = '✓ You\'re In!';
      nlBtn.style.background = '#22c55e';
      nlBtn.style.color = '#fff';
      nlEmail.disabled = true;
      nlBtn.disabled = true;
      setTimeout(() => {
        nlBtn.textContent = 'Subscribe Free';
        nlBtn.style.background = '';
        nlBtn.style.color = '';
        nlEmail.disabled = false;
        nlBtn.disabled = false;
        nlEmail.value = '';
      }, 4000);
    }
  });
}

/* ─ Scroll-triggered Reveal Animations ───────────────────── */
const revealElements = document.querySelectorAll(
  '.episode-card, .clip-card, .guest-card, .proof-stat, .player-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.08}s, transform 0.5s ease ${(i % 6) * 0.08}s`;
  revealObserver.observe(el);
});

/* ─ Hero Image Error Fallback ─────────────────────────────── */
const hostImage = document.getElementById('hostImage');
if (hostImage) {
  hostImage.addEventListener('error', () => {
    // Replace with a styled placeholder if image fails
    const wrapper = hostImage.parentElement;
    hostImage.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      color: #F7E200;
    `;
    placeholder.innerHTML = `
      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" style="opacity:0.4">
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
      </svg>
      <span style="font-family:Montserrat;font-weight:900;font-size:14px;letter-spacing:3px;opacity:0.5;color:#888">HOST</span>
    `;
    wrapper.appendChild(placeholder);
  });
}

/* ─ Progress Bar Click ────────────────────────────────────── */
const progressBar = document.getElementById('progressBar');
if (progressBar) {
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    progressValue = (x / rect.width) * 100;
    if (progressFill) progressFill.style.width = progressValue + '%';
  });
}

/* ─ Episode Cards Click to Show Player ───────────────────── */
episodeCards.forEach(card => {
  card.addEventListener('click', () => {
    audioBar.classList.add('visible');
    const title = card.querySelector('.ep-title')?.textContent || 'Episode';
    const apTitle = document.querySelector('.ap-title');
    if (apTitle) apTitle.textContent = title;

    // Reset and start
    progressValue = 0;
    if (progressFill) progressFill.style.width = '0%';
    startProgress();
  });
});

console.log('%c🎙️ SUNNY MONDAL PODCAST', 'font-size:20px;font-weight:bold;color:#F7E200;background:#0A0A0A;padding:10px 20px;border-radius:8px;');
console.log('%c The Blueprint for the Modern Indian Entrepreneur', 'color:#888;font-size:14px;padding:4px 20px;');