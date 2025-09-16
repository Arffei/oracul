const featuredGames = [
  {
    id: 'starlight-odyssey',
    title: 'Starlight Odyssey',
    price: '1 499 ₽',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'neon-runner',
    title: 'Neon Runner',
    price: '899 ₽',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'forgotten-realms',
    title: 'Forgotten Realms',
    price: '2 199 ₽',
    cover: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'mech-arena',
    title: 'Mech Arena',
    price: 'Бесплатно',
    cover: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
];

function createFeaturedCard(game) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-thumb" style="background-image:url('${game.cover}')"></div>
    <div class="card-body">
      <div class="card-title">${game.title}</div>
      <div class="card-meta">
        <span>${game.price}</span>
        <a href="#buy-${game.id}" class="btn btn-secondary" aria-label="Купить ${game.title}">Купить</a>
      </div>
    </div>
  `;
  return card;
}

function renderFeatured() {
  const container = document.getElementById('featured-grid');
  if (!container) return;
  featuredGames.forEach((g) => container.appendChild(createFeaturedCard(g)));
}

document.addEventListener('DOMContentLoaded', renderFeatured);
