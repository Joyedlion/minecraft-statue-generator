// small interactive bits: mobile menu and news placeholder
document.getElementById('year').textContent = new Date().getFullYear();

const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');
mobileToggle.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '8px';
    nav.style.background = 'rgba(5,10,15,0.9)';
    nav.style.padding = '12px';
    nav.style.position = 'absolute';
    nav.style.right = '16px';
    nav.style.top = '64px';
    nav.style.borderRadius = '8px';
  }
});

// Sample news (replace with real news feed or CMS)
const news = [
  { title: "Patch 1.2.0: New Dungeon — The Sunken Aerie", date: "Sep 10, 2025", excerpt: "A new endgame dungeon drops rare sigils and a new crafting material."},
  { title: "Player Market Update", date: "Aug 22, 2025", excerpt: "Market fees adjusted. See the economy page for more details."},
  { title: "Summer Fest Winners & Prizes", date: "Jul 31, 2025", excerpt: "Congratulations to the guild 'Skyward' for winning Summer Fest!"}
];

const newsList = document.getElementById('newsList');
news.forEach(n => {
  const el = document.createElement('article');
  el.className = 'news-item card';
  el.innerHTML = `<h4>${n.title}</h4><small style="color:var(--muted)">${n.date}</small><p style="margin-top:8px;color:var(--muted)}">${n.excerpt}</p>`;
  newsList.appendChild(el);
});