/* ============================================================
   CHRONOS — Premium Watch E-Commerce
   Interactive Features & Logic
   ============================================================ */

// ── Product Data ──
const PRODUCTS = [
  {
    id: 1, name: 'Sovereign Automatic', brand: 'Chronos',
    price: 12500, originalPrice: null,
    category: 'luxury', badge: 'bestseller',
    rating: 4.9, reviews: 342,
    image: 'images/watch-hero.png',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'A masterpiece of Swiss engineering featuring a 42mm stainless steel case, midnight blue dial with applied hour markers, and an in-house automatic movement visible through the sapphire exhibition caseback.',
    specs: { Movement: 'Automatic Cal. C-3200', 'Case Size': '42mm', Material: 'Stainless Steel', 'Water Resistance': '100m', 'Power Reserve': '72 hours', Crystal: 'Sapphire' }
  },
  {
    id: 2, name: 'Meridian Chronograph', brand: 'Chronos',
    price: 18750, originalPrice: 21000,
    category: 'sports', badge: 'new',
    rating: 4.8, reviews: 187,
    image: 'images/watch-sport.png',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'A precision chronograph with tri-compax layout, tachymeter bezel, and column-wheel movement. Built for those who demand both performance and elegance.',
    specs: { Movement: 'Automatic Cal. C-5100', 'Case Size': '44mm', Material: 'Titanium', 'Water Resistance': '200m', 'Power Reserve': '60 hours', Crystal: 'Sapphire AR' }
  },
  {
    id: 3, name: 'Aurelian Dress', brand: 'Aurelian',
    price: 8950, originalPrice: null,
    category: 'classic', badge: null,
    rating: 4.7, reviews: 256,
    image: 'images/watch-classic.png',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'Refined elegance in a 38mm rose gold case. The guilloché dial is hand-engraved by master artisans, paired with a hand-stitched alligator strap.',
    specs: { Movement: 'Automatic Cal. A-2800', 'Case Size': '38mm', Material: '18K Rose Gold', 'Water Resistance': '30m', 'Power Reserve': '48 hours', Crystal: 'Sapphire' }
  },
  {
    id: 4, name: 'Vertex Navigator', brand: 'Vertex',
    price: 6400, originalPrice: 7200,
    category: 'sports', badge: null,
    rating: 4.6, reviews: 412,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'A robust pilot watch with GMT function, internal rotating bezel, and luminous Arabic numerals. Built for adventure.',
    specs: { Movement: 'Automatic Cal. V-4400', 'Case Size': '43mm', Material: 'Stainless Steel', 'Water Resistance': '100m', 'Power Reserve': '56 hours', Crystal: 'Sapphire AR' }
  },
  {
    id: 5, name: 'Solaris Perpetual', brand: 'Solaris',
    price: 42500, originalPrice: null,
    category: 'luxury', badge: 'limited',
    rating: 5.0, reviews: 28,
    image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=600&h=600&fit=crop',
    stock: 'low-stock', stockText: 'Only 3 Left',
    desc: 'A haute horlogerie perpetual calendar with moonphase, crafted in platinum. Hand-finished movement with Geneva stripes and beveled edges.',
    specs: { Movement: 'Manual Cal. S-8800', 'Case Size': '40mm', Material: 'Platinum 950', 'Water Resistance': '30m', 'Power Reserve': '96 hours', Crystal: 'Sapphire Box' }
  },
  {
    id: 6, name: 'Zenith Aqua Pro', brand: 'Zenith',
    price: 9800, originalPrice: null,
    category: 'sports', badge: 'bestseller',
    rating: 4.8, reviews: 523,
    image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'A professional dive watch rated to 300m with unidirectional ceramic bezel, helium escape valve, and Super-LumiNova coating.',
    specs: { Movement: 'Automatic Cal. Z-3600', 'Case Size': '42mm', Material: 'Stainless Steel + Ceramic', 'Water Resistance': '300m', 'Power Reserve': '70 hours', Crystal: 'Sapphire' }
  },
  {
    id: 7, name: 'Chronos Heritage 1892', brand: 'Chronos',
    price: 15200, originalPrice: null,
    category: 'classic', badge: 'new',
    rating: 4.9, reviews: 94,
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'A tribute to our founding year. Enamel dial with Breguet numerals, blued steel hands, and an 18K yellow gold case.',
    specs: { Movement: 'Manual Cal. C-1892', 'Case Size': '39mm', Material: '18K Yellow Gold', 'Water Resistance': '30m', 'Power Reserve': '52 hours', Crystal: 'Sapphire Domed' }
  },
  {
    id: 8, name: 'Vertex Pulse', brand: 'Vertex',
    price: 3200, originalPrice: 3800,
    category: 'smart', badge: null,
    rating: 4.5, reviews: 678,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'Premium smartwatch with always-on AMOLED display, health monitoring suite, and a titanium case that bridges technology with luxury.',
    specs: { Display: '1.4" AMOLED', 'Case Size': '46mm', Material: 'Titanium Grade 5', 'Water Resistance': '50m', Battery: '7 days', Sensors: 'HR, SpO2, ECG' }
  },
  {
    id: 9, name: 'Meridian Tourbillon', brand: 'Meridian',
    price: 68000, originalPrice: null,
    category: 'luxury', badge: 'limited',
    rating: 5.0, reviews: 12,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=600&fit=crop',
    stock: 'low-stock', stockText: 'Only 5 Left',
    desc: 'A flying tourbillon with micro-rotor, crafted in 18K rose gold. The skeletonized dial reveals 280 hand-finished components.',
    specs: { Movement: 'Manual Cal. M-9900', 'Case Size': '41mm', Material: '18K Rose Gold', 'Water Resistance': '30m', 'Power Reserve': '108 hours', Crystal: 'Sapphire Box' }
  },
  {
    id: 10, name: 'Aurelian Field', brand: 'Aurelian',
    price: 4800, originalPrice: 5500,
    category: 'classic', badge: null,
    rating: 4.6, reviews: 334,
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'A rugged field watch with 40mm brushed steel case, sandwich dial construction, and cathedral hands for supreme legibility.',
    specs: { Movement: 'Automatic Cal. A-3100', 'Case Size': '40mm', Material: 'Stainless Steel', 'Water Resistance': '100m', 'Power Reserve': '44 hours', Crystal: 'Sapphire' }
  },
  {
    id: 11, name: 'Solaris Luna', brand: 'Solaris',
    price: 22000, originalPrice: null,
    category: 'luxury', badge: 'new',
    rating: 4.9, reviews: 67,
    image: 'https://images.unsplash.com/photo-1455745585813-33a03ccef2b0?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'Moonphase complication with astronomical accuracy of one day in 122 years. Aventurine dial with applied gold stars.',
    specs: { Movement: 'Automatic Cal. S-6600', 'Case Size': '40mm', Material: '18K White Gold', 'Water Resistance': '50m', 'Power Reserve': '80 hours', Crystal: 'Sapphire' }
  },
  {
    id: 12, name: 'Vertex Connect Pro', brand: 'Vertex',
    price: 4500, originalPrice: null,
    category: 'smart', badge: 'bestseller',
    rating: 4.7, reviews: 891,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop',
    stock: 'in-stock', stockText: 'In Stock',
    desc: 'Hybrid luxury smartwatch combining a traditional dial with discreet smart features. Sapphire crystal and ceramic case.',
    specs: { Display: 'Hidden OLED', 'Case Size': '44mm', Material: 'Ceramic + Steel', 'Water Resistance': '50m', Battery: '14 days', Connectivity: 'BT 5.3, NFC' }
  }
];

// ── State ──
let cart = [];
let wishlist = [];
let compareList = [];
let recentlyViewed = [];
let currentFilter = 'all';
let currentMaxPrice = 100000;
let currentSort = 'featured';
let currentCurrency = 'USD';

const currencyRates = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, INR: 83.2 };
const currencySymbols = { USD: '$', EUR: '\u20AC', GBP: '\u00A3', JPY: '\u00A5', INR: '\u20B9' };

// ── SVG Templates ──
const STAR_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
const HEART_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>';
const COMPARE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>';

// ── Helpers ──
function formatPrice(amount) {
  const converted = amount * currencyRates[currentCurrency];
  const sym = currencySymbols[currentCurrency];
  if (currentCurrency === 'JPY') return `${sym}${Math.round(converted).toLocaleString()}`;
  return `${sym}${converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function generateStars(rating) {
  const full = Math.floor(rating);
  let html = '';
  for (let i = 0; i < full; i++) html += STAR_SVG;
  return html;
}

// ── Product Card Renderer ──
function renderProductCard(product) {
  const isWishlisted = wishlist.includes(product.id);
  const isCompared = compareList.includes(product.id);

  let badgeHTML = '';
  if (product.badge === 'new') badgeHTML = '<span class="product-badge badge-new">New</span>';
  else if (product.badge === 'limited') badgeHTML = '<span class="product-badge badge-limited">Limited</span>';
  else if (product.badge === 'bestseller') badgeHTML = '<span class="product-badge badge-bestseller">Best Seller</span>';

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
      ${badgeHTML}
      <div class="product-actions-top">
        <button class="product-icon-btn wishlist-btn ${isWishlisted ? 'wishlisted' : ''}" data-id="${product.id}" aria-label="Add to wishlist" title="Wishlist">
          ${HEART_SVG}
        </button>
        <button class="product-icon-btn compare-btn ${isCompared ? 'wishlisted' : ''}" data-id="${product.id}" aria-label="Compare" title="Compare">
          ${COMPARE_SVG}
        </button>
      </div>
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-quick-view">
          <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <span class="rating-count">${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="stock-indicator">
          <span class="stock-dot ${product.stock}"></span>
          <span class="stock-text ${product.stock}">${product.stockText}</span>
        </div>
      </div>
    </div>
  `;
}

// ── Render Product Grids ──
function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }

  filtered = filtered.filter(p => p.price <= currentMaxPrice);

  switch (currentSort) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    case 'newest': filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0)); break;
    default: break;
  }

  return filtered;
}

function renderBestSellers() {
  const grid = document.getElementById('productsGrid');
  const products = getFilteredProducts().slice(0, 8);
  grid.innerHTML = products.length ? products.map(renderProductCard).join('') : '<p style="grid-column:1/-1;text-align:center;color:var(--text-tertiary);padding:var(--space-3xl);">No watches found matching your criteria.</p>';
  attachProductListeners(grid);
}

function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  const arrivals = PRODUCTS.filter(p => p.badge === 'new');
  grid.innerHTML = arrivals.map(renderProductCard).join('');
  attachProductListeners(grid);
}

function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  const trending = PRODUCTS.filter(p => p.badge === 'bestseller' || p.rating >= 4.8).slice(0, 4);
  grid.innerHTML = trending.map(p => {
    const card = renderProductCard(p);
    return card;
  }).join('');
  attachProductListeners(grid);
}

function renderRecentlyViewed() {
  const section = document.getElementById('recentlyViewed');
  const scroll = document.getElementById('recentlyViewedScroll');
  if (recentlyViewed.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';
  scroll.innerHTML = recentlyViewed.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    if (!p) return '';
    return `
      <div class="recent-card" data-id="${p.id}">
        <div class="recent-card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="recent-card-body">
          <h4>${p.name}</h4>
          <p>${formatPrice(p.price)}</p>
        </div>
      </div>
    `;
  }).join('');

  scroll.querySelectorAll('.recent-card').forEach(card => {
    card.addEventListener('click', () => openQuickView(parseInt(card.dataset.id)));
  });
}

// ── Attach Product Event Listeners ──
function attachProductListeners(container) {
  container.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(parseInt(btn.dataset.id));
    });
  });

  container.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  container.querySelectorAll('.compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCompare(parseInt(btn.dataset.id));
    });
  });
}

// ── Quick View Modal ──
function openQuickView(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  // Track recently viewed
  recentlyViewed = recentlyViewed.filter(rId => rId !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 8) recentlyViewed.pop();
  renderRecentlyViewed();

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalBrand').textContent = product.brand;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = formatPrice(product.price);
  document.getElementById('modalDesc').textContent = product.desc;

  const specsHTML = Object.entries(product.specs).map(([key, val]) => `
    <div class="spec-item">
      <div class="spec-label">${key}</div>
      <div class="spec-value">${val}</div>
    </div>
  `).join('');
  document.getElementById('modalSpecs').innerHTML = specsHTML;

  document.getElementById('modalAddToCart').onclick = () => {
    addToCart(product.id);
    document.getElementById('quickViewModal').classList.remove('active');
  };

  document.getElementById('modalWishlist').onclick = () => {
    toggleWishlist(product.id);
  };

  document.getElementById('quickViewModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Cart ──
function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  updateCartUI();
  showToast('Added to cart');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const emptyEl = document.getElementById('cartEmpty');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  countEl.textContent = totalItems;

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    emptyEl.style.display = 'block';
    totalEl.textContent = formatPrice(0);
    return;
  }

  emptyEl.style.display = 'none';

  let total = 0;
  itemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-brand">${p.brand}</div>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty(${p.id},-1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${p.id},1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `;
  }).join('');

  totalEl.textContent = formatPrice(total);
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Wishlist ──
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist');
  }
  refreshAllGrids();
}

// ── Compare ──
function toggleCompare(id) {
  const idx = compareList.indexOf(id);
  if (idx > -1) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 4) {
      showToast('Maximum 4 watches can be compared');
      return;
    }
    compareList.push(id);
    showToast('Added to compare');
  }
  updateCompareBar();
  refreshAllGrids();
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  const itemsEl = document.getElementById('compareItems');
  const countEl = document.getElementById('compareCount');

  if (compareList.length === 0) {
    bar.classList.remove('visible');
    return;
  }

  bar.classList.add('visible');
  countEl.textContent = `${compareList.length} watch${compareList.length > 1 ? 'es' : ''} selected`;

  itemsEl.innerHTML = compareList.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    if (!p) return '';
    return `
      <div class="compare-thumb">
        <img src="${p.image}" alt="${p.name}">
        <span class="remove-compare" onclick="toggleCompare(${p.id})">x</span>
      </div>
    `;
  }).join('');
}

function openCompareModal() {
  if (compareList.length < 2) {
    showToast('Select at least 2 watches to compare');
    return;
  }

  const products = compareList.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const allSpecKeys = new Set();
  products.forEach(p => Object.keys(p.specs).forEach(k => allSpecKeys.add(k)));

  let rows = `
    <tr>
      <th></th>
      ${products.map(p => `<td><img src="${p.image}" alt="${p.name}" style="margin-bottom:var(--space-sm)"><div class="product-name">${p.name}</div><div style="color:var(--accent-gold);font-size:var(--fs-sm)">${p.brand}</div></td>`).join('')}
    </tr>
    <tr>
      <th>Price</th>
      ${products.map(p => `<td style="font-weight:600;color:var(--accent-gold)">${formatPrice(p.price)}</td>`).join('')}
    </tr>
    <tr>
      <th>Rating</th>
      ${products.map(p => `<td>${p.rating} / 5.0 (${p.reviews} reviews)</td>`).join('')}
    </tr>
  `;

  allSpecKeys.forEach(key => {
    rows += `<tr><th>${key}</th>${products.map(p => `<td>${p.specs[key] || '—'}</td>`).join('')}</tr>`;
  });

  document.getElementById('compareTableBody').innerHTML = rows;
  document.getElementById('compareModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
  document.getElementById('compareModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Refresh All Grids ──
function refreshAllGrids() {
  renderBestSellers();
  renderNewArrivals();
  renderTrending();
}

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {

  // Render initial products
  renderBestSellers();
  renderNewArrivals();
  renderTrending();

  // ── Navbar Scroll ──
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;

    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);

    navbar.classList.toggle('scrolled', scrollY > 50);
    backToTop.classList.toggle('visible', scrollY > 600);
  });

  // ── Back to Top ──
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Theme Toggle ──
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') !== 'light';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeIcon.innerHTML = isDark
      ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
      : '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>';
  });

  // ── Search ──
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 200);
    document.body.style.overflow = 'hidden';
  });

  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
  });

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ── Cart ──
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartBackdrop').addEventListener('click', closeCart);

  // ── Quick View Modal ──
  document.getElementById('modalClose').addEventListener('click', closeQuickView);
  document.getElementById('quickViewModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('quickViewModal')) closeQuickView();
  });

  // ── Filter Tabs ──
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderBestSellers();
    });
  });

  // ── Price Slider ──
  const priceSlider = document.getElementById('priceSlider');
  const priceValue = document.getElementById('priceValue');

  priceSlider.addEventListener('input', () => {
    currentMaxPrice = parseInt(priceSlider.value);
    priceValue.textContent = formatPrice(currentMaxPrice);
    renderBestSellers();
  });

  // ── Sort ──
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderBestSellers();
  });

  // ── Currency ──
  document.getElementById('currencySelect').addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    refreshAllGrids();
    renderRecentlyViewed();
    updateCartUI();
    priceValue.textContent = formatPrice(currentMaxPrice);
  });

  // ── FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(fi => {
        fi.classList.remove('open');
        fi.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ── Compare Bar Actions ──
  document.getElementById('compareNowBtn').addEventListener('click', openCompareModal);
  document.getElementById('clearCompareBtn').addEventListener('click', () => {
    compareList = [];
    updateCompareBar();
    refreshAllGrids();
  });
  document.getElementById('compareModalClose').addEventListener('click', closeCompareModal);
  document.getElementById('compareModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('compareModal')) closeCompareModal();
  });

  // ── Mobile Menu ──
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Newsletter ──
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing');
    e.target.reset();
  });

  // ── Contact Form ──
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully');
    e.target.reset();
  });

  // ── Keyboard Shortcuts ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeCart();
      closeCompareModal();
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    // Ctrl+K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput.focus(), 200);
    }
  });

  // ── Wishlist Button (navbar) — show count ──
  document.getElementById('wishlistBtn').addEventListener('click', () => {
    if (wishlist.length === 0) {
      showToast('Your wishlist is empty');
    } else {
      showToast(`${wishlist.length} item${wishlist.length > 1 ? 's' : ''} in your wishlist`);
    }
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
