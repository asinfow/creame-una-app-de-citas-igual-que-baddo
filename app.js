// ============================================================
// DateX - Dating App like Badoo
// ============================================================

const PROFILES = [
  {
    id: 1,
    name: 'Valentina',
    age: 24,
    city: 'Madrid',
    distance: '2 km',
    bio: '🌸 Amante del café y los atardeceres. Busco a alguien con quien explorar el mundo y reír sin parar. Profesora de yoga los fines de semana.',
    interests: ['Yoga', 'Viajes', 'Café', 'Fotografía', 'Música'],
    photos: [
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/women/45.jpg',
      'https://randomuser.me/api/portraits/women/46.jpg'
    ],
    online: true,
    verified: true,
    height: '165 cm',
    job: 'Diseñadora Gráfica',
    education: 'Universidad Complutense'
  },
  {
    id: 2,
    name: 'Carlos',
    age: 28,
    city: 'Barcelona',
    distance: '5 km',
    bio: '🎸 Músico de corazón, ingeniero de día. Me encanta cocinar y ver series hasta las 3am. Busco mi cómplice de aventuras.',
    interests: ['Música', 'Cocina', 'Series', 'Senderismo', 'Tecnología'],
    photos: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/men/33.jpg'
    ],
    online: true,
    verified: false,
    height: '180 cm',
    job: 'Ingeniero de Software',
    education: 'UPC Barcelona'
  },
  {
    id: 3,
    name: 'Sofia',
    age: 26,
    city: 'Valencia',
    distance: '1 km',
    bio: '🌊 Surfista apasionada y amante de la naturaleza. Si amas el mar y la aventura, podemos ser perfectos. Vegetariana por convicción.',
    interests: ['Surf', 'Naturaleza', 'Meditación', 'Arte', 'Cocina vegana'],
    photos: [
      'https://randomuser.me/api/portraits/women/22.jpg',
      'https://randomuser.me/api/portraits/women/23.jpg',
      'https://randomuser.me/api/portraits/women/24.jpg'
    ],
    online: false,
    verified: true,
    height: '168 cm',
    job: 'Bióloga Marina',
    education: 'Universidad de Valencia'
  },
  {
    id: 4,
    name: 'Alejandro',
    age: 31,
    city: 'Sevilla',
    distance: '8 km',
    bio: '⚽ Fan del fútbol y los viajes espontáneos. Trabajo en marketing pero mi pasión es la fotografía callejera. Busco conversaciones reales.',
    interests: ['Fútbol', 'Fotografía', 'Marketing', 'Viajes', 'Cine'],
    photos: [
      'https://randomuser.me/api/portraits/men/45.jpg',
      'https://randomuser.me/api/portraits/men/46.jpg'
    ],
    online: true,
    verified: true,
    height: '178 cm',
    job: 'Director de Marketing',
    education: 'Universidad de Sevilla'
  },
  {
    id: 5,
    name: 'Isabella',
    age: 23,
    city: 'Bilbao',
    distance: '3 km',
    bio: '🎨 Artista y soñadora. Pinto, esculpo y a veces hago cerámica. El arte es mi idioma principal. ¿Quieres aprender a hablar conmigo?',
    interests: ['Arte', 'Cerámica', 'Literatura', 'Vino', 'Museos'],
    photos: [
      'https://randomuser.me/api/portraits/women/33.jpg',
      'https://randomuser.me/api/portraits/women/34.jpg',
      'https://randomuser.me/api/portraits/women/35.jpg'
    ],
    online: true,
    verified: false,
    height: '162 cm',
    job: 'Artista Plástica',
    education: 'Escuela de Arte Madrid'
  },
  {
    id: 6,
    name: 'Miguel',
    age: 29,
    city: 'Málaga',
    distance: '12 km',
    bio: '🏋️ Entrenador personal y nutricionista. Me encanta el deporte, pero también sé disfrutar de una buena charla con un café. Directo y sincero.',
    interests: ['Fitness', 'Nutrición', 'Playa', 'Motociclismo', 'Montaña'],
    photos: [
      'https://randomuser.me/api/portraits/men/61.jpg',
      'https://randomuser.me/api/portraits/men/62.jpg'
    ],
    online: false,
    verified: true,
    height: '185 cm',
    job: 'Entrenador Personal',
    education: 'INEF Madrid'
  },
  {
    id: 7,
    name: 'Laura',
    age: 27,
    city: 'Zaragoza',
    distance: '6 km',
    bio: '📚 Bookworm empedernida y viajera de fin de semana. Trabajo como abogada pero escapo leyendo novelas. Busco a alguien que no le importe el silencio cómodo.',
    interests: ['Lectura', 'Viajes', 'Derecho', 'Películas indie', 'Running'],
    photos: [
      'https://randomuser.me/api/portraits/women/55.jpg',
      'https://randomuser.me/api/portraits/women/56.jpg'
    ],
    online: true,
    verified: true,
    height: '170 cm',
    job: 'Abogada',
    education: 'Universidad de Zaragoza'
  },
  {
    id: 8,
    name: 'Rodrigo',
    age: 33,
    city: 'Madrid',
    distance: '4 km',
    bio: '🍕 Chef profesional enamorado de la gastronomía italiana. Cocino, viajo y me pierdo por mercados locales. Prometo cocinarte la mejor pasta de tu vida.',
    interests: ['Cocina', 'Gastronomía', 'Vinos', 'Viajes', 'Fotografía culinaria'],
    photos: [
      'https://randomuser.me/api/portraits/men/77.jpg',
      'https://randomuser.me/api/portraits/men/78.jpg',
      'https://randomuser.me/api/portraits/men/79.jpg'
    ],
    online: true,
    verified: false,
    height: '182 cm',
    job: 'Chef Ejecutivo',
    education: 'Escuela de Cocina Le Cordon Bleu'
  },
  {
    id: 9,
    name: 'Andrea',
    age: 25,
    city: 'Granada',
    distance: '7 km',
    bio: '🎵 Cantautora y melómana. La música es mi refugio y las letras son mis mejores amigas. Busco a alguien que ame los conciertos tanto como yo.',
    interests: ['Música', 'Guitarra', 'Conciertos', 'Poesía', 'Baile'],
    photos: [
      'https://randomuser.me/api/portraits/women/66.jpg',
      'https://randomuser.me/api/portraits/women/67.jpg'
    ],
    online: false,
    verified: true,
    height: '163 cm',
    job: 'Músico y Profesora',
    education: 'Conservatorio Superior de Música'
  },
  {
    id: 10,
    name: 'Pablo',
    age: 30,
    city: 'Alicante',
    distance: '9 km',
    bio: '🏄 Amante del mar y la adrenalina. Trabaja en tecnología pero vive para el deporte acuático. Buscando a alguien que no le tema a mojarse.',
    interests: ['Surf', 'Kitesurf', 'Tecnología', 'Fotografía', 'Senderismo'],
    photos: [
      'https://randomuser.me/api/portraits/men/88.jpg',
      'https://randomuser.me/api/portraits/men/89.jpg'
    ],
    online: true,
    verified: true,
    height: '176 cm',
    job: 'Desarrollador Web',
    education: 'Universidad de Alicante'
  }
];

const MESSAGES_TEMPLATES = [
  '¡Hola! Me encantó tu perfil 😊',
  '¿Cómo estás? Vi que también te gusta viajar',
  'Hola guapo/a! ¿Qué tal tu día?',
  'Me parece genial que te guste la fotografía',
  '¡Tenemos mucho en común! ¿Quedamos para un café?',
  'Tu sonrisa es increíble 😍',
  'Hola! ¿De dónde eres originalmente?',
  '¿Cuál es tu lugar favorito de la ciudad?',
  'Me gusta tu estilo! ¿Qué música escuchas?',
  'Oye, tengo una pregunta importante: ¿pizza o sushi? 🍕🍣'
];

// ============================================================
// STATE
// ============================================================
let state = {
  currentView: 'discover',
  currentUser: null,
  profiles: [...PROFILES],
  currentProfileIndex: 0,
  matches: [],
  conversations: {},
  likes: [],
  superLikes: [],
  passes: [],
  filters: {
    minAge: 18,
    maxAge: 45,
    maxDistance: 50,
    gender: 'all'
  },
  activeChat: null,
  showMatch: false,
  lastMatch: null,
  photoIndex: 0,
  showFilters: false,
  showProfile: null,
  isAuthenticated: false
};

// ============================================================
// STORAGE
// ============================================================
function saveState() {
  localStorage.setItem('datex_state', JSON.stringify({
    currentUser: state.currentUser,
    matches: state.matches,
    conversations: state.conversations,
    likes: state.likes,
    passes: state.passes,
    filters: state.filters,
    isAuthenticated: state.isAuthenticated
  }));
}

function loadState() {
  const saved = localStorage.getItem('datex_state');
  if (saved) {
    const data = JSON.parse(saved);
    state.currentUser = data.currentUser;
    state.matches = data.matches || [];
    state.conversations = data.conversations || {};
    state.likes = data.likes || [];
    state.passes = data.passes || [];
    state.filters = data.filters || state.filters;
    state.isAuthenticated = data.isAuthenticated || false;
  }
}

// ============================================================
// INIT
// ============================================================
function init() {
  loadState();
  if (!state.isAuthenticated) {
    renderLogin();
  } else {
    renderApp();
  }
}

// ============================================================
// LOGIN / REGISTER
// ============================================================
function renderLogin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
      <div class="w-full max-w-md">
        <div class="text-center mb-10">
          <div class="text-5xl font-black mb-2" style="background: linear-gradient(135deg, #FF4B6E, #FF8C42); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            💖 DateX
          </div>
          <p class="text-gray-400 text-lg">Encuentra a tu persona especial</p>
        </div>
        
        <div class="bg-gray-900 rounded-3xl p-8 shadow-2xl">
          <div class="flex mb-6 bg-gray-800 rounded-2xl p-1">
            <button onclick="showTab('login')" id="tab-login" class="flex-1 py-2 rounded-xl font-semibold text-sm transition-all tab-active" style="color: #FF4B6E; border-bottom: 2px solid #FF4B6E;">Iniciar Sesión</button>
            <button onclick="showTab('register')" id="tab-register" class="flex-1 py-2 rounded-xl font-semibold text-sm text-gray-400 transition-all">Registrarse</button>
          </div>
          
          <div id="login-form">
            <div class="space-y-4">
              <input type="email" id="login-email" placeholder="Email" class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500" value="demo@datex.com">
              <input type="password" id="login-pass" placeholder="Contraseña" class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500" value="demo123">
              <button onclick="handleLogin()" class="gradient-btn w-full py-4 rounded-2xl font-bold text-white text-lg">Entrar 💕</button>
            </div>
            <div class="mt-4 text-center">
              <p class="text-gray-500 text-sm">Demo: demo@datex.com / demo123</p>
            </div>
          </div>
          
          <div id="register-form" class="hidden">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <input type="text" id="reg-name" placeholder="Nombre" class="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500">
                <input type="number" id="reg-age" placeholder="Edad" class="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500">
              </div>
              <input type="email" id="reg-email" placeholder="Email" class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500">
              <input type="password" id="reg-pass" placeholder="Contraseña" class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500">
              <select id="reg-gender" class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-pink-500">
                <option value="">Selecciona género</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
                <option value="other">Otro</option>
              </select>
              <input type="text" id="reg-city" placeholder="Ciudad" class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500">
              <button onclick="handleRegister()" class="gradient-btn w-full py-4 rounded-2xl font-bold text-white text-lg">Crear Cuenta 🎉</button>
            </div>
          </div>
        </div>
        
        <div class="mt-6 text-center">
          <p class="text-gray-600 text-xs">Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad</p>
        </div>
      </div>
    </div>
  `;
}

function showTab(tab) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginTab = document.getElementById('tab-login');
  const registerTab = document.getElementById('tab-register');
  
  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginTab.style.color = '#FF4B6E';
    loginTab.style.borderBottom = '2px solid #FF4B6E';
    registerTab.style.color = '#9ca3af';
    registerTab.style.borderBottom = 'none';
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    registerTab.style.color = '#FF4B6E';
    registerTab.style.borderBottom = '2px solid #FF4B6E';
    loginTab.style.color = '#9ca3af';
    loginTab.style.borderBottom = 'none';
  }
}

function handleLogin() {
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  
  if (!email || !pass) {
    showToast('Por favor completa todos los campos', 'error');
    return;
  }
  
  state.currentUser = {
    id: 'me',
    name: 'Tú',
    age: 25,
    email: email,
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    city: 'Madrid',
    bio: 'Buscando conexiones reales ✨',
    interests: ['Música', 'Viajes', 'Tecnología']
  };
  state.isAuthenticated = true;
  saveState();
  renderApp();
}

function handleRegister() {
  const name = document.getElementById('reg-name').value;
  const age = document.getElementById('reg-age').value;
  const email = document.getElementById('reg-email').value;
  const pass = document.getElementById('reg-pass').value;
  const gender = document.getElementById('reg-gender').value;
  const city = document.getElementById('reg-city').value;
  
  if (!name || !age || !email || !pass || !gender || !city) {
    showToast('Por favor completa todos los campos', 'error');
    return;
  }
  
  state.currentUser = {
    id: 'me',
    name: name,
    age: parseInt(age),
    email: email,
    photo: gender === 'female' ? 'https://randomuser.me/api/portraits/women/1.jpg' : 'https://randomuser.me/api/portraits/men/1.jpg',
    city: city,
    bio: '¡Nuevo en DateX! 🎉',
    interests: [],
    gender: gender
  };
  state.isAuthenticated = true;
  saveState();
  renderApp();
}

// ============================================================
// MAIN APP
// ============================================================
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="flex flex-col min-h-screen max-w-md mx-auto relative" style="background: #0f0f1a;">
      <!-- Header -->
      <div id="app-header"></div>
      
      <!-- Main Content -->
      <div id="main-content" class="flex-1 overflow-y-auto scroll-hide"></div>
      
      <!-- Bottom Nav -->
      <div id="bottom-nav" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50"></div>
      
      <!-- Match Overlay -->
      <div id="match-overlay" class="hidden"></div>
      
      <!-- Toast -->
      <div id="toast" class="hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-2xl text-white font-semibold text-sm shadow-lg"></div>
    </div>
  `;
  
  renderNav();
  navigateTo('discover');
}

function renderNav() {
  const nav = document.getElementById('bottom-nav');
  nav.innerHTML = `
    <div class="bg-gray-900 border-t border-gray-800 flex items-center justify-around px-4 py-3 pb-6">
      <button onclick="navigateTo('discover')" class="nav-btn flex flex-col items-center gap-1 ${state.currentView === 'discover' ? 'text-pink-500' : 'text-gray-500'}" id="nav-discover">
        <svg class="w-7 h-7" fill="${state.currentView === 'discover' ? '#FF4B6E' : 'none'}" stroke="${state.currentView === 'discover' ? '#FF4B6E' : '#6b7280'}" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        <span class="text-xs font-medium">Descubrir</span>
      </button>
      
      <button onclick="navigateTo('search')" class="nav-btn flex flex-col items-center gap-1 ${state.currentView === 'search' ? 'text-pink-500' : 'text-gray-500'}" id="nav-search">
        <svg class="w-7 h-7" fill="none" stroke="${state.currentView === 'search' ? '#FF4B6E' : '#6b7280'}" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <span class="text-xs font-medium">Buscar</span>
      </button>
      
      <button onclick="navigateTo('matches')" class="nav-btn flex flex-col items-center gap-1 relative ${state.currentView === 'matches' ? 'text-pink-500' : 'text-gray-500'}" id="nav-matches">
        <div class="relative">
          <svg class="w-7 h-7" fill="none" stroke="${state.currentView === 'matches' ? '#FF4B6E' : '#6b7280'}" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          ${state.matches.length > 0 ? `<div class="notification-badge">${state.matches.length > 9 ? '9+' : state.matches.length}</div>` : ''}
        </div>
        <span class="text-xs font-medium">Matches</span>
      </button>
      
      <button onclick="navigateTo('likes')" class="nav-btn flex flex-col items-center gap-1 ${state.currentView === 'likes' ? 'text-pink-500' : 'text-gray-500'}" id="nav-likes">
        <svg class="w-7 h-7" fill="none" stroke="${state.currentView === 'likes' ? '#FF4B6E' : '#6b7280'}" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
        <span class="text-xs font-medium">Gustos</span>
      </button>
      
      <button onclick="navigateTo('profile')" class="nav-btn flex flex-col items-center gap-1 ${state.currentView === 'profile' ? 'text-pink-500' : 'text-gray-500'}" id="nav-profile">
        <div class="relative">
          <img src="${state.currentUser ? state.currentUser.photo : 'https://randomuser.me/api/portraits/men/1.jpg'}" class="w-7 h-7 rounded-full object-cover border-2 ${state.currentView === 'profile' ? 'border-pink-500' : 'border-gray-600'}">
        </div>
        <span class="text-xs font-medium">Perfil</span>
      </button>
    </div>
  `;
}

function navigateTo(view) {
  state.currentView = view;
  renderNav();
  
  const header = document.getElementById('app-header');
  const content = document.getElementById('main-content');
  
  switch(view) {
    case 'discover':
      renderDiscover(header, content);
      break;
    case 'search':
      renderSearch(header, content);
      break;
    case 'matches':
      renderMatches(header, content);
      break;
    case 'likes':
      renderLikes(header, content);
      break;
    case 'profile':
      renderProfile(header, content);
      break;
    case 'chat':
      renderChat(header, content);
      break;
  }
}

// ============================================================
// DISCOVER VIEW
// ============================================================
function renderDiscover(header, content) {
  const availableProfiles = state.profiles.filter(p => 
    !state.passes.includes(p.id) && !state.likes.includes(p.id)
  );
  
  header.innerHTML = `
    <div class="flex items-center justify-between px-5 py-4 bg-gray-900 border-b border-gray-800">
      <div class="text-2xl font-black" style="background: linear-gradient(135deg, #FF4B6E, #FF8C42); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">💖 DateX</div>
      <div class="flex gap-3">
        <button onclick="showFiltersModal()" class="relative bg-gray-800 p-2 rounded-xl hover:bg-gray-700 transition-colors">
          <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
          </svg>
        </button>
        <button onclick="showBoostModal()" class="boost-btn p-2 rounded-xl">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  if (availableProfiles.length === 0) {
    content.innerHTML = `
      <div class="flex flex-col items-center justify-center h-96 px-8 text-center">
        <div class="text-8xl mb-6">💔</div>
        <h2 class="text-2xl font-bold text-white mb-3">Sin más perfiles</h2>
        <p class="text-gray-400 mb-6">Has visto todos los perfiles disponibles. ¡Vuelve más tarde o ajusta tus filtros!</p>
        <button onclick="resetProfiles()" class="gradient-btn px-8 py-3 rounded-2xl font-bold text-white">Empezar de nuevo 🔄</button>
      </div>
    `;
    return;
  }
  
  const profile = availableProfiles[0];
  const nextProfile = availableProfiles[1];
  
  content.innerHTML = `
    <div class="relative flex flex-col items-center px-4 pt-4 pb-24">
      <!-- Card Stack -->
      <div class="relative w-full" style="height: 560px; max-width: 380px; margin: 0 auto;">
        ${nextProfile ? `
          <div class="swipe-card" style="z-index: 1; transform: scale(0.95) translateY(10px); background: #1a1a2e;">
            <img src="${nextProfile.photos[0]}" class="w-full h-full object-cover">
          </div>
        ` : ''}
        
        <div class="swipe-card" id="current-card" style="z-index: 2;" 
             data-profile-id="${profile.id}"
             onmousedown="startDrag(event)"
             ontouchstart="startDragTouch(event)">
          
          <div class="like-indicator" id="like-indicator">❤️ LIKE</div>
          <div class="nope-indicator" id="nope-indicator">✕ NOPE</div>
          
          <img src="${profile.photos[state.photoIndex % profile.photos.length]}" class="w-full h-full object-cover" id="card-photo">
          
          <!-- Photo dots -->
          <div class="absolute top-3 left-3 right-3 flex gap-1">
            ${profile.photos.map((_, i) => `
              <div class="flex-1 h-1 rounded-full ${i === (state.photoIndex % profile.photos.length) ? 'bg-white' : 'bg-white bg-opacity-40'}"></div>
            `).join('')}
          </div>
          
          <!-- Tap zones -->
          <div class="absolute inset-0 flex">
            <div class="flex-1" onclick="prevPhoto(${JSON.stringify(profile.photos).replace(/"/g, '&quot;')})"></div>
            <div class="flex-1" onclick="nextPhoto(${JSON.stringify(profile.photos).replace(/"/g, '&quot;')})"></div>
          </div>
          
          <div class="card-gradient absolute inset-0"></div>
          
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <div class="flex items-end justify-between mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <h2 class="text-3xl font-bold text-white">${profile.name}</h2>
                  <span class="text-2xl font-light text-white">${profile.age}</span>
                  ${profile.verified ? '<span class="text-blue-400 text-lg">✓</span>' : ''}
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-2 h-2 rounded-full ${profile.online ? 'bg-green-400' : 'bg-gray-500'}"></div>
                  <span class="text-sm ${profile.online ? 'text-green-400' : 'text-gray-400'}">${profile.online ? 'En línea' : 'Hace 1 hora'}</span>
                  <span class="text-gray-400 text-sm">• ${profile.distance}</span>
                </div>
              </div>
              <button onclick="showProfileDetail(${profile.id})" class="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </button>
            </div>
            
            <p class="text-gray-200 text-sm mb-3 line-clamp-2">${profile.bio}</p>
            
            <div class="flex flex-wrap gap-2">
              ${profile.interests.slice(0, 3).map(i => `
                <span class="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">${i}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex items-center justify-center gap-5 mt-6">
        <button onclick="passProfile()" class="action-btn w-14 h-14 bg-gray-800 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg">
          <svg class="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <button onclick="superLikeProfile()" class="action-btn w-12 h-12 superlike-btn rounded-full flex items-center justify-center shadow-lg">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg>
        </button>
        
        <button onclick="likeProfile()" class="action-btn w-14 h-14 bg-gray-800 border-2 rounded-full flex items-center justify-center shadow-lg" style="border-color: #FF4B6E;">
          <svg class="w-7 h-7" fill="#FF4B6E" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
      
      <div class="flex items-center justify-center mt-3 gap-4 text-xs text-gray-600">
        <span>❌ Pasar</span>
        <span>⭐ Super Like</span>
        <span>❤️ Like</span>
      </div>
    </div>
  `;
  
  initDrag();
}

// ============================================================
// DRAG / SWIPE
// ============================================================
let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;

function initDrag() {
  const card = document.getElementById('current-card');
  if (!card) return;
  
  card.addEventListener('mousemove', onDrag);
  card.addEventListener('mouseup', endDrag);
  card.addEventListener('mouseleave', endDrag);
  card.addEventListener('touchmove', onDragTouch, { passive: false });
  card.addEventListener('touchend', endDragTouch);
}

function startDrag(e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  currentX = 0;
}

function startDragTouch(e) {
  isDragging = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  currentX = 0;
}

function onDrag(e) {
  if (!isDragging) return;
  e.preventDefault();
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  currentX = dx;
  updateCardPosition(dx, dy);
}

function onDragTouch(e) {
  if (!isDragging) return;
  e.preventDefault();
  const dx = e.touches[0].clientX - startX;
  const dy = e.touches[0].clientY - startY;
  currentX = dx;
  updateCardPosition(dx, dy);
}

function updateCardPosition(dx, dy) {
  const card = document.getElementById('current-card');
  if (!card) return;
  
  const rotation = dx * 0.1;
  card.style.transform = `translate(${dx}px, ${dy * 0.3}px) rotate(${rotation}deg)`;
  
  const likeIndicator = document.getElementById('like-indicator');
  const nopeIndicator = document.getElementById('nope-indicator');
  
  if (dx > 40) {
    likeIndicator.style.opacity = Math.min(dx / 100, 1);
    nopeIndicator.style.opacity = 0;
  } else if (dx < -40) {
    nopeIndicator.style.opacity = Math.min(-dx / 100, 1);
    likeIndicator.style.opacity = 0;
  } else {
    likeIndicator.style.opacity = 0;
    nopeIndicator.style.opacity = 0;
  }
}

function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;
  
  const card = document.getElementById('current-card');
  if (!card) return;
  
  if (currentX > 80) {
    swipeRight();
  } else if (currentX < -80) {
    swipeLeft();
  } else {
    card.style.transform = '';
    document.getElementById('like-indicator').style.opacity = 0;
    document.getElementById('nope-indicator').style.opacity = 0;
  }
}

function endDragTouch(e) {
  endDrag(e);
}

function swipeRight() {
  const card = document.getElementById('current-card');
  if (!card) return;
  card.classList.add('swiping-right');
  setTimeout(() => likeProfile(), 300);
}

function swipeLeft() {
  const card = document.getElementById('current-card');
  if (!card) return;
  card.classList.add('swiping-left');
  setTimeout(() => passProfile(), 300);
}

function nextPhoto(photos) {
  state.photoIndex = (state.photoIndex + 1) % photos.length;
  const cardPhoto = document.getElementById('card-photo');
  if (cardPhoto) {
    cardPhoto.src = photos[state.photoIndex];
  }
}

function prevPhoto(photos) {
  state.photoIndex = (state.photoIndex - 1 + photos.length) % photos.length;
  const cardPhoto = document.getElementById('card-photo');
  if (cardPhoto) {
    cardPhoto.src = photos[state.photoIndex];
  }
}

// ============================================================
// PROFILE ACTIONS
// ============================================================
function likeProfile() {
  const availableProfiles = state.profiles.filter(p => 
    !state.passes.includes(p.id) && !state.likes.includes(p.id)
  );
  
  if (availableProfiles.length === 0) return;
  
  const profile = availableProfiles[0];
  state.likes.push(profile.id);
  state.photoIndex = 0;
  
  // 60% chance of match
  const isMatch = Math.random() > 0.4;
  if (isMatch) {
    createMatch(profile);
  } else {
    showToast('❤️ Like enviado!', 'success');
  }
  
  saveState();
  navigateTo('discover');
}

function passProfile() {
  const availableProfiles = state.profiles.filter(p => 
    !state.passes.includes(p.id) && !state.likes.includes(p.id)
  );
  
  if (availableProfiles.length === 0) return;
  
  const profile = availableProfiles[0];
  state.passes.push(profile.id);
  state.photoIndex = 0;
  saveState();
  navigateTo('discover');
}

function superLikeProfile() {
  const availableProfiles = state.profiles.filter(p => 
    !state.passes.includes(p.id) && !state.likes.includes(p.id)
  );
  
  if (availableProfiles.length === 0) return;
  
  const profile = availableProfiles[0];
  state.likes.push(profile.id);
  state.superLikes.push(profile.id);
  state.photoIndex = 0;
  
  createMatch(profile);
  saveState();
  navigateTo('discover');
}

function createMatch(profile) {
  const existingMatch = state.matches.find(m => m.id === profile.id);
  if (existingMatch) return;
  
  state.matches.push(profile);
  
  // Initialize conversation
  if (!state.conversations[profile.id]) {
    state.conversations[profile.id] = {
      messages: [
        {
          id: Date.now(),
          sender: profile.id,
          text: MESSAGES_TEMPLATES[Math.floor(Math.random() * MESSAGES_TEMPLATES.length)],
          time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
          timestamp: Date.now() - 60000
        }
      ]
    };
  }
  
  state.lastMatch = profile;
  state.showMatch = true;
  showMatchOverlay(profile);
  saveState();
}

function showMatchOverlay(profile) {
  const overlay = document.getElementById('match-overlay');
  overlay.classList.remove('hidden');
  overlay.innerHTML = `
    <div class="match-overlay">
      <div class="text-center px-8">
        <div class="mb-6">
          <div class="text-6xl font-black match-title mb-2">¡Es un Match! 🎉</div>
          <p class="text-gray-300 text-lg">Tú y ${profile.name} se gustaron mutuamente</p>
        </div>
        
        <div class="flex items-center justify-center gap-6 mb-10">
          <div class="relative">
            <img src="${state.currentUser.photo}" class="profile-avatar">
          </div>
          <div class="text-4xl animate-pulse">💕</div>
          <div class="relative">
            <img src="${profile.photos[0]}" class="profile-avatar">
          </div>
        </div>
        
        <div class="space-y-4">
          <button onclick="openChatFromMatch(${profile.id}); closeMatchOverlay()" class="gradient-btn w-full py-4 rounded-2xl font-bold text-white text-lg">
            💬 Enviar mensaje
          </button>
          <button onclick="closeMatchOverlay()" class="w-full py-4 rounded-2xl font-bold text-gray-400 border border-gray-700 text-lg">
            Seguir explorando
          </button>
        </div>
      </div>
    </div>
  `;
}

function closeMatchOverlay() {
  const overlay = document.getElementById('match-overlay');
  overlay.classList.add('hidden');
  overlay.innerHTML = '';
  state.showMatch = false;
}

function openChatFromMatch(profileId) {
  const profile = state.matches.find(m => m.id === profileId);
  if (profile) {
    state.activeChat = profile;
    navigateTo('chat');
  }
}

function resetProfiles() {
  state.passes = [];
  state.likes = [];
  state.photoIndex = 0;
  saveState();
  navigateTo('discover');
}

// ============================================================
// SEARCH VIEW
// ============================================================
function renderSearch(header, content) {
  header.innerHTML = `
    <div class="px-5 py-4 bg-gray-900 border-b border-gray-800">
      <h1 class="text-xl font-bold text-white mb-3">🔍 Buscar personas</h1>
      <div class="relative">
        <input type="text" id="search-input" placeholder="Buscar por nombre, ciudad o interés..." 
               class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
               oninput="performSearch(this.value)">
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
    </div>
  `;
  
  content.innerHTML = `
    <div class="px-4 py-4">
      <!-- Online Now -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">En línea ahora</h3>
        <div class="flex gap-3 overflow-x-auto scroll-hide pb-2">
          ${state.profiles.filter(p => p.online).map(p => `
            <button onclick="showProfileDetail(${p.id})" class="flex-shrink-0 flex flex-col items-center gap-1">
              <div class="relative">
                <img src="${p.photos[0]}" class="w-16 h-16 rounded-full object-cover border-2 border-green-400">
                <div class="online-dot"></div>
              </div>
              <span class="text-xs text-gray-300 w-16 text-center truncate">${p.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
      
      <!-- All Profiles -->
      <div id="search-results">
        <h3 class="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Cerca de ti</h3>
        <div class="grid grid-cols-2 gap-3" id="profiles-grid">
          ${state.profiles.map(p => renderProfileCard(p)).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderProfileCard(profile) {
  return `
    <button onclick="showProfileDetail(${profile.id})" class="relative rounded-2xl overflow-hidden bg-gray-800 text-left" style="height: 200px;">
      <img src="${profile.photos[0]}" class="w-full h-full object-cover">
      <div class="card-gradient absolute inset-0"></div>
      ${profile.online ? '<div class="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>' : ''}
      <div class="absolute bottom-0 left-0 right-0 p-3">
        <div class="text-white font-bold text-sm">${profile.name}, ${profile.age}</div>
        <div class="text-gray-300 text-xs">${profile.distance}</div>
      </div>
    </button>
  `;
}

function performSearch(query) {
  const grid = document.getElementById('profiles-grid');
  if (!grid) return;
  
  const q = query.toLowerCase();
  const filtered = state.profiles.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.city.toLowerCase().includes(q) ||
    p.interests.some(i => i.toLowerCase().includes(q)) ||
    p.bio.toLowerCase().includes(q)
  );
  
  grid.innerHTML = filtered.length > 0 
    ? filtered.map(p => renderProfileCard(p)).join('')
    : '<div class="col-span-2 text-center py-10 text-gray-500">No se encontraron perfiles</div>';
}

// ============================================================
// MATCHES VIEW
// ============================================================
function renderMatches(header, content) {
  header.innerHTML = `
    <div class="px-5 py-4 bg-gray-900 border-b border-gray-800">
      <h1 class="text-xl font-bold text-white">💬 Matches y Mensajes</h1>
    </div>
  `;
  
  if (state.matches.length === 0) {
    content.innerHTML = `
      <div class="flex flex-col items-center justify-center h-96 px-8 text-center">
        <div class="text-8xl mb-6">💌</div>
        <h2 class="text-2xl font-bold text-white mb-3">Sin matches aún</h2>
        <p class="text-gray-400 mb-6">Empieza a explorar perfiles y dale like a quien te guste. ¡Los matches aparecerán aquí!</p>
        <button onclick="navigateTo('discover')" class="gradient-btn px-8 py-3 rounded-2xl font-bold text-white">Explorar ahora 💕</button>
      </div>
    `;
    return;
  }
  
  content.innerHTML = `
    <div class="px-4 py-4">
      <!-- Matches row -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Nuevos Matches (${state.matches.length})</h3>
        <div class="flex gap-4 overflow-x-auto scroll-hide pb-2">
          ${state.matches.map(m => `
            <button onclick="openChat(${m.id})" class="flex-shrink-0 flex flex-col items-center gap-1">
              <div class="relative">
                <img src="${m.photos[0]}" class="w-16 h-16 rounded-full object-cover border-2" style="border-color: #FF4B6E;">
                ${m.online ? '<div class="online-dot"></div>' : ''}
              </div>
              <span class="text-xs text-gray-300 w-16 text-center truncate">${m.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
      
      <!-- Conversations -->
      <div>
        <h3 class="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Conversaciones</h3>
        <div class="space-y-2">
          ${state.matches.map(m => {
            const conv = state.conversations[m.id];
            const lastMsg = conv && conv.messages.length > 0 ? conv.messages[conv.messages.length - 1] : null;
            return `
              <button onclick="openChat(${m.id})" class="w-full flex items-center gap-4 p-3 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-colors">
                <div class="relative flex-shrink-0">
                  <img src="${m.photos[0]}" class="w-14 h-14 rounded-full object-cover">
                  ${m.online ? '<div class="online-dot"></div>' : ''}
                </div>
                <div class="flex-1 text-left min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-white">${m.name}</span>
                    <span class="text-xs text-gray-500">${lastMsg ? lastMsg.time : ''}</span>
                  </div>
                  <p class="text-sm text-gray-400 truncate">${lastMsg ? lastMsg.text : 'Dí hola! 👋'}</p>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function openChat(profileId) {
  const profile = state.matches.find(m => m.id === profileId) || state.profiles.find(p => p.id === profileId);
  if (profile) {
    state.activeChat = profile;
    navigateTo('chat');
  }
}

// ============================================================
// CHAT VIEW
// ============================================================
function renderChat(header, content) {
  const profile = state.activeChat;
  if (!profile) { navigateTo('matches'); return; }
  
  const conv = state.conversations[profile.id] || { messages: [] };
  
  header.innerHTML = `
    <div class="flex items-center gap-3 px-4 py-3 bg-gray-900 border-b border-gray-800">
      <button onclick="navigateTo('matches')" class="text-gray-400 hover:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button onclick="showProfileDetail(${profile.id})" class="flex items-center gap-3 flex-1">
        <div class="relative">
          <img src="${profile.photos[0]}" class="w-10 h-10 rounded-full object-cover">
          ${profile.online ? '<div class="online-dot" style="width:10px;height:10px;"></div>' : ''}
        </div>
        <div class="text-left">
          <div class="font-bold text-white">${profile.name}</div>
          <div class="text-xs ${profile.online ? 'text-green-400' : 'text-gray-500'}">${profile.online ? '● En línea' : 'Última vez hace 1h'}</div>
        </div>
      </button>
      <button onclick="showChatOptions(${profile.id})" class="text-gray-400 hover:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>
      </button>
    </div>
  `;
  
  content.innerHTML = `
    <div class="flex flex-col" style="height: calc(100vh - 140px);">
      <div class="flex-1 overflow-y-auto scroll-hide px-4 py-4" id="messages-container">
        <div class="flex flex-col gap-3" id="messages-list">
          ${conv.messages.map(msg => renderMessage(msg, profile)).join('')}
        </div>
        
        ${profile.online ? `
          <div class="flex items-center gap-2 mt-3 px-4">
            <img src="${profile.photos[0]}" class="w-6 h-6 rounded-full object-cover">
            <div class="typing-indicator flex gap-1 items-center bg-gray-800 px-3 py-2 rounded-full">
              <span></span><span></span><span></span>
            </div>
          </div>
        ` : ''}
      </div>
      
      <div class="px-4 py-3 bg-gray-900 border-t border-gray-800" style="padding-bottom: 90px;">
        <div class="flex items-center gap-3">
          <button onclick="sendGif()" class="text-gray-500 hover:text-pink-400 flex-shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </button>
          <div class="flex-1 relative">
            <input type="text" id="message-input" placeholder="Escribe un mensaje..." 
                   class="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 pr-10"
                   onkeydown="if(event.key==='Enter') sendMessage()">
            <button onclick="sendEmoji()" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              😊
            </button>
          </div>
          <button onclick="sendMessage()" class="gradient-btn p-3 rounded-full flex-shrink-0">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
  
  scrollToBottom();
}

function renderMessage(msg, profile) {
  const isMe = msg.sender === 'me';
  return `
    <div class="flex ${isMe ? 'justify-end' : 'justify-start'} items-end gap-2">
      ${!isMe ? `<img src="${profile.photos[0]}" class="w-7 h-7 rounded-full object-cover flex-shrink-0 mb-1">` : ''}
      <div class="${isMe ? 'chat-bubble-me' : 'chat-bubble-them'} px-4 py-3">
        <p class="text-white text-sm">${msg.text}</p>
        <p class="text-xs ${isMe ? 'text-pink-200' : 'text-gray-500'} mt-1 text-right">${msg.time}</p>
      </div>
    </div>
  `;
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const text = input.value.trim();
  if (!text) return;
  
  const profile = state.activeChat;
  if (!profile) return;
  
  if (!state.conversations[profile.id]) {
    state.conversations[profile.id] = { messages: [] };
  }
  
  const msg = {
    id: Date.now(),
    sender: 'me',
    text: text,
    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now()
  };
  
  state.conversations[profile.id].messages.push(msg);
  input.value = '';
  saveState();
  
  const list = document.getElementById('messages-list');
  if (list) {
    const div = document.createElement('div');
    div.innerHTML = renderMessage(msg, profile);
    list.appendChild(div.firstElementChild);
    scrollToBottom();
  }
  
  // Auto reply after 1.5-3 seconds
  if (profile.online) {
    setTimeout(() => {
      const replyMsg = {
        id: Date.now(),
        sender: profile.id,
        text: MESSAGES_TEMPLATES[Math.floor(Math.random() * MESSAGES_TEMPLATES.length)],
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        timestamp: Date.now()
      };
      state.conversations[profile.id].messages.push(replyMsg);
      saveState();
      
      const listEl = document.getElementById('messages-list');
      if (listEl) {
        const div2 = document.createElement('div');
        div2.innerHTML = renderMessage(replyMsg, profile);
        listEl.appendChild(div2.firstElementChild);
        
        // Remove typing indicator if exists
        const typing = document.querySelector('.typing-indicator')?.parentElement?.parentElement;
        if (typing) typing.remove();
        
        scrollToBottom();
      }
    }, 1500 + Math.random() * 1500);
  }
}

function sendEmoji() {
  const input = document.getElementById('message-input');
  const emojis = ['😍', '❤️', '🔥', '😂', '🤔', '😊', '💕', '✨', '😎', '🥰'];
  input.value += emojis[Math.floor(Math.random() * emojis.length)];
  input.focus();
}

function sendGif() {
  const profile = state.activeChat;
  if (!profile) return;
  
  const gifs = ['¡jaja!', '¡Qué divertido!', '¡Buenísimo!', '😂😂😂', '¡Me encanta!'];
  const msg = {
    id: Date.now(),
    sender: 'me',
    text: '📸 [Foto enviada] ' + gifs[Math.floor(Math.random() * gifs.length)],
    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now()
  };
  
  if (!state.conversations[profile.id]) state.conversations[profile.id] = { messages: [] };
  state.conversations[profile.id].messages.push(msg);
  saveState();
  
  const list = document.getElementById('messages-list');
  if (list) {
    const div = document.createElement('div');
    div.innerHTML = renderMessage(msg, profile);
    list.appendChild(div.firstElementChild);
    scrollToBottom();
  }
}

function scrollToBottom() {
  const container = document.getElementById('messages-container');
  if (container) {
    setTimeout(() => container.scrollTop = container.scrollHeight, 50);
  }
}

function showChatOptions(profileId) {
  showToast('Opciones disponibles próximamente', 'info');
}

// ============================================================
// LIKES VIEW
// ============================================================
function renderLikes(header, content) {
  header.innerHTML = `
    <div class="px-5 py-4 bg-gray-900 border-b border-gray-800">
      <h1 class="text-xl font-bold text-white">⭐ A quienes gustaste</h1>
    </div>
  `;
  
  const likedProfiles = state.profiles.filter(p => state.likes.includes(p.id));
  
  if (likedProfiles.length === 0) {
    content.innerHTML = `
      <div class="flex flex-col items-center justify-center h-96 px-8 text-center">
        <div class="text-8xl mb-6">💫</div>
        <h2 class="text-2xl font-bold text-white mb-3">Sin likes aún</h2>
        <p class="text-gray-400 mb-6">Los perfiles que hayas likeado aparecerán aquí</p>
        <button onclick="navigateTo('discover')" class="gradient-btn px-8 py-3 rounded-2xl font-bold text-white">Explorar perfiles 💕</button>
      </div>
    `;
    return;
  }
  
  content.innerHTML = `
    <div class="px-4 py-4">
      <p class="text-gray-400 text-sm mb-4">Has dado like a ${likedProfiles.length} perfil${likedProfiles.length > 1 ? 'es' : ''}</p>
      
      <div class="grid grid-cols-2 gap-3 pb-24">
        ${likedProfiles.map(p => `
          <div class="relative rounded-2xl overflow-hidden" style="height: 220px;">
            <img src="${p.photos[0]}" class="w-full h-full object-cover">
            <div class="card-gradient absolute inset-0"></div>
            ${state.matches.find(m => m.id === p.id) ? `
              <div class="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">Match 💕</div>
            ` : `
              <div class="absolute top-2 right-2 bg-gray-800 bg-opacity-80 rounded-full p-1">
                <div class="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-xs">❤</div>
              </div>
            `}
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <div class="text-white font-bold text-sm">${p.name}, ${p.age}</div>
              <div class="text-gray-300 text-xs">${p.city}</div>
            </div>
            <button onclick="showProfileDetail(${p.id})" class="absolute inset-0"></button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// PROFILE VIEW
// ============================================================
function renderProfile(header, content) {
  const user = state.currentUser;
  
  header.innerHTML = `
    <div class="flex items-center justify-between px-5 py-4 bg-gray-900 border-b border-gray-800">
      <h1 class="text-xl font-bold text-white">Mi Perfil</h1>
      <button onclick="handleLogout()" class="text-gray-400 hover:text-white text-sm">
        Salir
      </button>
    </div>
  `;
  
  content.innerHTML = `
    <div class="pb-24">
      <!-- Cover & Avatar -->
      <div class="relative h-40 bg-gradient-to-r from-pink-600 to-orange-500">
        <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div class="relative">
            <img src="${user.photo}" class="w-24 h-24 rounded-full object-cover border-4 border-gray-900">
            <button class="absolute bottom-0 right-0 gradient-btn w-7 h-7 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-16 px-5 text-center">
        <h2 class="text-2xl font-bold text-white">${user.name}, ${user.age}</h2>
        <p class="text-gray-400">📍 ${user.city}</p>
        <p class="text-gray-300 mt-2 text-sm">${user.bio}</p>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-3 gap-3 px-5 mt-6">
        <div class="bg-gray-900 rounded-2xl p-4 text-center">
          <div class="text-2xl font-bold text-white">${state.likes.length}</div>
          <div class="text-gray-400 text-xs mt-1">Likes dados</div>
        </div>
        <div class="bg-gray-900 rounded-2xl p-4 text-center">
          <div class="text-2xl font-bold" style="color: #FF4B6E;">${state.matches.length}</div>
          <div class="text-gray-400 text-xs mt-1">Matches</div>
        </div>
        <div class="bg-gray-900 rounded-2xl p-4 text-center">
          <div class="text-2xl font-bold text-white">${Object.values(state.conversations).reduce((acc, c) => acc + c.messages.filter(m => m.sender === 'me').length, 0)}</div>
          <div class="text-gray-400 text-xs mt-1">Mensajes</div>
        </div>
      </div>
      
      <!-- Edit Profile -->
      <div class="px-5 mt-6">
        <button onclick="showEditProfile()" class="gradient-btn w-full py-4 rounded-2xl font-bold text-white text-lg">✏️ Editar Perfil</button>
      </div>
      
      <!-- Settings -->
      <div class="px-5 mt-4 space-y-3">
        <h3 class="text-gray-400 text-sm font-semibold uppercase tracking-wider">Configuración</h3>
        
        <div class="bg-gray-900 rounded-2xl overflow-hidden">
          <button onclick="showFiltersModal()" class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800 transition-colors">
            <div class="flex items-center gap-3">
              <span class="text-xl">🎛</span>
              <span class="text-white">Filtros de búsqueda</span>
            </div>
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <div class="border-t border-gray-800"></div>
          <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800 transition-colors">
            <div class="flex items-center gap-3">
              <span class="text-xl">🔔</span>
              <span class="text-white">Notificaciones</span>
            </div>
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <div class="border-t border-gray-800"></div>
          <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800 transition-colors">
            <div class="flex items-center gap-3">
              <span class="text-xl">🔒</span>
              <span class="text-white">Privacidad</span>
            </div>
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        
        <!-- Premium Banner -->
        <div class="rounded-2xl p-5" style="background: linear-gradient(135deg, #1a1a2e, #2d1b4e);">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">👑</span>
            <div>
              <div class="text-white font-bold">DateX Premium</div>
              <div class="text-gray-400 text-sm">Ver quién te ha dado like</div>
            </div>
          </div>
          <button onclick="showPremiumModal()" class="boost-btn w-full py-3 rounded-xl font-bold text-white">Obtener Premium</button>
        </div>
      </div>
    </div>
  `;
}

function showEditProfile() {
  const user = state.currentUser;
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.id = 'edit-modal';
  backdrop.innerHTML = `
    <div class="modal-content">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-white">Editar Perfil</h3>
        <button onclick="closeModal('edit-modal')" class="text-gray-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="text-gray-400 text-sm mb-1 block">Nombre</label>
          <input type="text" id="edit-name" value="${user.name}" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500">
        </div>
        <div>
          <label class="text-gray-400 text-sm mb-1 block">Edad</label>
          <input type="number" id="edit-age" value="${user.age}" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500">
        </div>
        <div>
          <label class="text-gray-400 text-sm mb-1 block">Ciudad</label>
          <input type="text" id="edit-city" value="${user.city}" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500">
        </div>
        <div>
          <label class="text-gray-400 text-sm mb-1 block">Bio</label>
          <textarea id="edit-bio" rows="3" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 resize-none">${user.bio}</textarea>
        </div>
        <button onclick="saveEditProfile()" class="gradient-btn w-full py-4 rounded-2xl font-bold text-white">Guardar cambios</button>
      </div>
    </div>
  `;
  document.getElementById('app').appendChild(backdrop);
}

function saveEditProfile() {
  state.currentUser.name = document.getElementById('edit-name').value;
  state.currentUser.age = parseInt(document.getElementById('edit-age').value);
  state.currentUser.city = document.getElementById('edit-city').value;
  state.currentUser.bio = document.getElementById('edit-bio').value;
  saveState();
  closeModal('edit-modal');
  navigateTo('profile');
  showToast('Perfil actualizado ✅', 'success');
}

// ============================================================
// PROFILE DETAIL VIEW
// ============================================================
function showProfileDetail(profileId) {
  const profile = state.profiles.find(p => p.id === profileId);
  if (!profile) return;
  
  const backdrop = document.createElement('div');
  backdrop.id = 'profile-detail-modal';
  backdrop.style.cssText = 'position:fixed;inset:0;background:#0f0f1a;z-index:300;overflow-y:auto;';
  backdrop.innerHTML = `
    <div class="max-w-md mx-auto">
      <!-- Photos -->
      <div class="relative" style="height: 480px;">
        <img src="${profile.photos[0]}" class="w-full h-full object-cover" id="detail-photo">
        <div class="card-gradient absolute inset-0"></div>
        
        <!-- Photo nav dots -->
        <div class="absolute top-4 left-4 right-4 flex gap-2">
          ${profile.photos.map((_, i) => `
            <div class="flex-1 h-1 rounded-full ${i === 0 ? 'bg-white' : 'bg-white bg-opacity-40'}" id="detail-dot-${i}"></div>
          `).join('')}
        </div>
        
        <button onclick="closeDetailModal()" class="absolute top-6 left-4 bg-black bg-opacity-40 rounded-full p-2">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <div class="flex items-end justify-between">
            <div>
              <h2 class="text-3xl font-bold text-white">${profile.name}, ${profile.age}</h2>
              <div class="flex items-center gap-2 mt-1">
                <div class="w-2 h-2 rounded-full ${profile.online ? 'bg-green-400' : 'bg-gray-500'}"></div>
                <span class="text-sm ${profile.online ? 'text-green-400' : 'text-gray-300'}">${profile.online ? 'En línea' : 'Offline'}</span>
                <span class="text-gray-300 text-sm">• ${profile.distance}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Photo swipe -->
        <div class="absolute inset-0 flex" style="top: 50px; bottom: 100px;">
          <div class="flex-1 cursor-pointer" onclick="changeDetailPhoto(${JSON.stringify(profile.photos).replace(/"/g, '&quot;')}, -1)"></div>
          <div class="flex-1 cursor-pointer" onclick="changeDetailPhoto(${JSON.stringify(profile.photos).replace(/"/g, '&quot;')}, 1)"></div>
        </div>
      </div>
      
      <!-- Info -->
      <div class="px-5 py-6 space-y-5">
        <!-- Basic Info -->
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-gray-900 rounded-2xl p-3 text-center">
            <div class="text-gray-400 text-xs mb-1">Trabajo</div>
            <div class="text-white text-xs font-medium">${profile.job}</div>
          </div>
          <div class="bg-gray-900 rounded-2xl p-3 text-center">
            <div class="text-gray-400 text-xs mb-1">Altura</div>
            <div class="text-white text-xs font-medium">${profile.height}</div>
          </div>
          <div class="bg-gray-900 rounded-2xl p-3 text-center">
            <div class="text-gray-400 text-xs mb-1">Ciudad</div>
            <div class="text-white text-xs font-medium">${profile.city}</div>
          </div>
        </div>
        
        <!-- Bio -->
        <div class="bg-gray-900 rounded-2xl p-4">
          <h3 class="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Sobre mí</h3>
          <p class="text-white text-sm leading-relaxed">${profile.bio}</p>
        </div>
        
        <!-- Education -->
        <div class="bg-gray-900 rounded-2xl p-4">
          <h3 class="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Educación</h3>
          <p class="text-white text-sm">🎓 ${profile.education}</p>
        </div>
        
        <!-- Interests -->
        <div class="bg-gray-900 rounded-2xl p-4">
          <h3 class="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">Intereses</h3>
          <div class="flex flex-wrap gap-2">
            ${profile.interests.map(i => `
              <span class="bg-gray-800 border border-gray-700 text-white text-sm px-3 py-1 rounded-full">${i}</span>
            `).join('')}
          </div>
        </div>
        
        <!-- Photos Grid -->
        ${profile.photos.length > 1 ? `
          <div class="bg-gray-900 rounded-2xl p-4">
            <h3 class="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">Fotos</h3>
            <div class="grid grid-cols-3 gap-2 photo-grid">
              ${profile.photos.map(photo => `<img src="${photo}" class="w-full rounded-xl object-cover" style="height:90px;">`).join('')}
            </div>
          </div>
        ` : ''}
        
        <!-- Action Buttons -->
        <div class="flex gap-4 pb-8">
          <button onclick="passFromDetail(${profile.id})" class="flex-1 bg-gray-800 border-2 border-red-400 py-4 rounded-2xl font-bold text-red-400 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            Pasar
          </button>
          <button onclick="likeFromDetail(${profile.id})" class="flex-1 gradient-btn py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2">
            ❤️ Like
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('app').appendChild(backdrop);
}

let detailPhotoIndex = 0;

function changeDetailPhoto(photos, direction) {
  detailPhotoIndex = (detailPhotoIndex + direction + photos.length) % photos.length;
  const photo = document.getElementById('detail-photo');
  if (photo) photo.src = photos[detailPhotoIndex];
  
  photos.forEach((_, i) => {
    const dot = document.getElementById(`detail-dot-${i}`);
    if (dot) {
      dot.style.opacity = i === detailPhotoIndex ? '1' : '0.4';
    }
  });
}

function closeDetailModal() {
  const modal = document.getElementById('profile-detail-modal');
  if (modal) modal.remove();
  detailPhotoIndex = 0;
}

function likeFromDetail(profileId) {
  const profile = state.profiles.find(p => p.id === profileId);
  if (!profile || state.likes.includes(profileId)) {
    closeDetailModal();
    return;
  }
  
  state.likes.push(profileId);
  closeDetailModal();
  
  const isMatch = Math.random() > 0.4;
  if (isMatch) createMatch(profile);
  else showToast('❤️ Like enviado!', 'success');
  
  saveState();
  if (state.currentView === 'discover') navigateTo('discover');
}

function passFromDetail(profileId) {
  if (!state.passes.includes(profileId)) {
    state.passes.push(profileId);
    saveState();
  }
  closeDetailModal();
  if (state.currentView === 'discover') navigateTo('discover');
}

// ============================================================
// FILTERS MODAL
// ============================================================
function showFiltersModal() {
  const existing = document.getElementById('filters-modal');
  if (existing) existing.remove();
  
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.id = 'filters-modal';
  backdrop.onclick = function(e) { if (e.target === backdrop) closeModal('filters-modal'); };
  backdrop.innerHTML = `
    <div class="modal-content" style="max-height: 85vh; overflow-y: auto;">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-white">🎛 Filtros</h3>
        <button onclick="closeModal('filters-modal')" class="text-gray-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="space-y-6">
        <!-- Age Range -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <label class="text-white font-semibold">Rango de edad</label>
            <span class="text-pink-400 font-semibold" id="age-display">${state.filters.minAge} - ${state.filters.maxAge} años</span>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="text-gray-400 text-sm w-8">Min</span>
              <input type="range" min="18" max="60" value="${state.filters.minAge}" 
                     class="range-slider flex-1"
                     oninput="updateAgeFilter('min', this.value)">
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-400 text-sm w-8">Max</span>
              <input type="range" min="18" max="60" value="${state.filters.maxAge}" 
                     class="range-slider flex-1"
                     oninput="updateAgeFilter('max', this.value)">
            </div>
          </div>
        </div>
        
        <!-- Distance -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <label class="text-white font-semibold">Distancia máxima</label>
            <span class="text-pink-400 font-semibold" id="dist-display">${state.filters.maxDistance} km</span>
          </div>
          <input type="range" min="1" max="100" value="${state.filters.maxDistance}" 
                 class="range-slider w-full"
                 oninput="updateDistFilter(this.value)">
        </div>
        
        <!-- Gender -->
        <div>
          <label class="text-white font-semibold block mb-3">Mostrar</label>
          <div class="grid grid-cols-3 gap-2">
            ${[{v:'all',l:'Todos'},{v:'female',l:'Mujeres'},{v:'male',l:'Hombres'}].map(opt => `
              <button onclick="updateGenderFilter('${opt.v}')" 
                      class="py-3 rounded-xl font-semibold text-sm transition-all ${state.filters.gender === opt.v ? 'gradient-btn text-white' : 'bg-gray-800 text-gray-400'}"
                      id="gender-${opt.v}">${opt.l}</button>
            `).join('')}
          </div>
        </div>
        
        <button onclick="applyFilters()" class="gradient-btn w-full py-4 rounded-2xl font-bold text-white">Aplicar filtros ✓</button>
      </div>
    </div>
  `;
  
  document.getElementById('app').appendChild(backdrop);
}

function updateAgeFilter(type, value) {
  if (type === 'min') state.filters.minAge = parseInt(value);
  else state.filters.maxAge = parseInt(value);
  const display = document.getElementById('age-display');
  if (display) display.textContent = `${state.filters.minAge} - ${state.filters.maxAge} años`;
}

function updateDistFilter(value) {
  state.filters.maxDistance = parseInt(value);
  const display = document.getElementById('dist-display');
  if (display) display.textContent = `${value} km`;
}

function updateGenderFilter(gender) {
  state.filters.gender = gender;
  ['all', 'female', 'male'].forEach(g => {
    const btn = document.getElementById(`gender-${g}`);
    if (btn) {
      if (g === gender) {
        btn.style.background = 'linear-gradient(135deg, #FF4B6E, #FF8C42)';
        btn.style.color = 'white';
      } else {
        btn.style.background = '#1f2937';
        btn.style.color = '#9ca3af';
      }
    }
  });
}

function applyFilters() {
  saveState();
  closeModal('filters-modal');
  showToast('Filtros aplicados ✓', 'success');
  if (state.currentView === 'discover') navigateTo('discover');
}

// ============================================================
// PREMIUM MODAL
// ============================================================
function showPremiumModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.id = 'premium-modal';
  backdrop.onclick = function(e) { if (e.target === backdrop) closeModal('premium-modal'); };
  backdrop.innerHTML = `
    <div class="modal-content" style="background: linear-gradient(180deg, #1a0a2e, #1a1a2e);">
      <div class="text-center mb-6">
        <div class="text-5xl mb-3">👑</div>
        <h3 class="text-2xl font-black text-white mb-1">DateX Premium</h3>
        <p class="text-gray-400">Desbloquea todas las funciones</p>
      </div>
      
      <div class="space-y-3 mb-6">
        ${[
          ['👀', 'Ve quién te ha dado Like'],
          ['⭐', 'Super Likes ilimitados'],
          ['🔄', 'Retrocede el último perfil'],
          ['🚀', 'Boost semanal incluido'],
          ['💬', 'Mensajes sin límites'],
          ['🌍', 'Cambiar ubicación'],
        ].map(([icon, text]) => `
          <div class="flex items-center gap-3">
            <span class="text-2xl">${icon}</span>
            <span class="text-white">${text}</span>
          </div>
        `).join('')}
      </div>
      
      <div class="space-y-3">
        <button onclick="closeModal('premium-modal'); showToast('¡Suscripción activada! 👑', \'success\')" 
                class="boost-btn w-full py-4 rounded-2xl font-bold text-white text-lg">1 mes • €9.99</button>
        <button onclick="closeModal('premium-modal'); showToast('¡Mejor oferta! 🎉', \'success\')"  
                class="gradient-btn w-full py-4 rounded-2xl font-bold text-white text-lg">3 meses • €19.99 <span class="text-sm font-normal opacity-80">(Ahorra 33%)</span></button>
        <button onclick="closeModal('premium-modal')" class="w-full py-3 text-gray-500 text-sm">No gracias</button>
      </div>
    </div>
  `;
  document.getElementById('app').appendChild(backdrop);
}

// ============================================================
// BOOST MODAL
// ============================================================
function showBoostModal() {
  showToast('🚀 ¡Boost activado! Tu perfil será visto 3x más durante 30 min', 'success');
}

// ============================================================
// UTILITY
// ============================================================
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.remove();
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  
  if (type === 'success') toast.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  else if (type === 'error') toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
  else toast.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
  
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function handleLogout() {
  if (confirm('¿Seguro que quieres cerrar sesión?')) {
    state.isAuthenticated = false;
    state.currentUser = null;
    saveState();
    renderLogin();
  }
}

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded', init);
init();