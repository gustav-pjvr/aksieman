// AKSIEMAN — scroll reveals, route-rail scrollspy, mobile nav
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- footer year ----
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // ---- mobile nav ----
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  }

  // ---- scrollspy: route rail + nav links ----
  const sections = [
    ['hero', document.querySelector('.hero')],
    ['story', document.getElementById('story')],
    ['possibilities', document.getElementById('possibilities')],
    ['projects', document.getElementById('projects')],
    ['adventures', document.getElementById('adventures')],
    ['lessons', document.getElementById('lessons')],
    ['gallery', document.getElementById('gallery')],
    ['contact', document.getElementById('contact')],
  ].filter(([, el]) => el);

  const stops = document.querySelectorAll('.route-stop');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const setActive = (id) => {
    stops.forEach((s) => s.classList.toggle('active', s.dataset.stop === id));
    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  };

  if ('IntersectionObserver' in window) {
    const spyObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find(([, el]) => el === entry.target);
            if (match) setActive(match[0]);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(([, el]) => spyObs.observe(el));
  }

  setActive('hero');
})();
