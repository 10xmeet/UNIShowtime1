
// Concert-themed scroll animations for Student Dashboard
// Creates floating musical notes and sweeping spotlights behind the header

(function() {
  const bg = document.getElementById('concert-bg');
  if (!bg) return;

  const width = bg.clientWidth || window.innerWidth;
  const height = bg.clientHeight || 400;
  const eventsCount = Number(bg.getAttribute('data-events') || '0');
  const bgVideo = document.getElementById('bg-video');

  // Create sweeping spotlights
  const spotlightLeft = document.createElement('div');
  spotlightLeft.className = 'spotlight';
  spotlightLeft.style.left = '10%';
  spotlightLeft.style.top = '10%';
  bg.appendChild(spotlightLeft);

  const spotlightRight = document.createElement('div');
  spotlightRight.className = 'spotlight';
  spotlightRight.style.right = '10%';
  spotlightRight.style.top = '12%';
  bg.appendChild(spotlightRight);

  if (window.anime) {
    // Sweep animations for spotlights
    anime({
      targets: spotlightLeft,
      rotate: [ -10, 10, -10 ],
      translateX: [ -40, 0, 40, 0, -40 ],
      duration: 6000,
      easing: 'easeInOutSine',
      loop: true
    });

    anime({
      targets: spotlightRight,
      rotate: [ 12, -12, 12 ],
      translateX: [ 40, 0, -40, 0, 40 ],
      duration: 6500,
      easing: 'easeInOutSine',
      loop: true
    });
  }

  // Musical note glyphs (simple SVG paths)
  const noteSVG = function(fill) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M9 3v12.26A3.5 3.5 0 1 0 11 19V8h7V3H9z');
    path.setAttribute('fill', fill || '#c7d2fe');
    svg.appendChild(path);
    return svg;
  };

  const colors = ['#c7d2fe','#a5b4fc','#93c5fd','#f0abfc'];
  const noteCount = 24;

  for (let i = 0; i < noteCount; i++) {
    const note = document.createElement('div');
    note.className = 'note';
    const color = colors[i % colors.length];
    note.appendChild(noteSVG(color));
    const x = Math.random() * width;
    const y = height + Math.random() * 120;
    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.opacity = String(0.6 + Math.random() * 0.4);
    bg.appendChild(note);

    if (window.anime) {
      const driftX = (Math.random() - 0.5) * 60;
      const duration = 4000 + Math.random() * 4000;
      const delay = Math.random() * 1200;
      anime({
        targets: note,
        translateY: [0, -height - 200],
        translateX: [0, driftX],
        rotate: [ -10, 10 ],
        duration,
        delay,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
      });
    }
  }

  // Subtle parallax on scroll
  const parallax = () => {
    const s = window.scrollY || document.documentElement.scrollTop;
    bg.style.transform = `translateY(${s * 0.04}px)`;
    spotlightLeft.style.opacity = String(0.45 + Math.min(s / 1200, 0.2));
    spotlightRight.style.opacity = String(0.45 + Math.min(s / 1200, 0.2));
    if (bgVideo) {
      bgVideo.style.transform = `translateY(${s * 0.06}px)`;
      const fade = Math.max(0.35, 0.6 - Math.min(s / 1600, 0.25));
      bgVideo.style.opacity = String(fade);
  }
};

window.addEventListener('scroll', parallax, { passive: true });
parallax();
  window.addEventListener('scroll', parallax, { passive: true });
  parallax();

  // Equalizer bars based on events intensity
  const eq = document.createElement('div');
  eq.className = 'eq-container';
  bg.appendChild(eq);
  const baseBars = 24;
  const bars = Math.min(baseBars + eventsCount * 2, 48);
  const eqBars = [];
  for (let i = 0; i < bars; i++) {
    const b = document.createElement('div');
    b.className = 'eq-bar';
    eq.appendChild(b);
    eqBars.push(b);
  }

  if (window.anime) {
    eqBars.forEach((bar, i) => {
      const variance = 0.6 + Math.random() * 0.8 + (eventsCount ? Math.min(eventsCount / 10, 0.8) : 0);
      anime({
        targets: bar,
        scaleY: [0.6, variance, 0.7, variance * 0.9, 0.6],
        duration: 1200 + (i % 6) * 120,
        easing: 'easeInOutSine',
        loop: true,
        delay: (i % 8) * 40
      });
    });

    // Scroll influences EQ brightness subtly
    const eqScroll = () => {
      const s = window.scrollY || document.documentElement.scrollTop;
      const boost = Math.min(s / 800, 0.5);
      eq.style.opacity = String(0.45 + boost);
    };
    window.addEventListener('scroll', eqScroll, { passive: true });
    eqScroll();
  }
})();