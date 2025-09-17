(function(){
  const userGreeting = document.getElementById('userGreeting');
  const userRole = document.getElementById('userRole');
  const profileType = document.getElementById('profileType');
  const profileAvailability = document.getElementById('profileAvailability');
  const appliedCount = document.getElementById('appliedCount');
  const createVacancyBtn = document.getElementById('btnCreateVacancy');
  const recentFeed = document.getElementById('recentFeed');

  const tabHome = document.getElementById('tabHome');
  const tabAnuncios = document.getElementById('tabAnuncios');
  const homeTab = document.getElementById('homeTab');
  const anunciosTab = document.getElementById('anunciosTab');
  const btnLogout = document.getElementById('btnLogout');
  const vacancyFeed = document.getElementById('vacancyFeed');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const storage = {
    get(k){ return JSON.parse(localStorage.getItem(k)||'[]'); },
    set(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
  };

  // Usuário logado
  const user = JSON.parse(localStorage.getItem('loggedUser')||'null');
  if(!user) window.location.href='index.html';
  userGreeting.innerText = user.name;
  userRole.innerText = `${user.type} • ${user.email}`;
  profileType.innerText = user.type;
  profileAvailability.innerText = user.availability || 'Não definida';

  // Mostrar botão "Criar Anúncio" apenas para empregador
  if(user.type === 'employer'){
    createVacancyBtn.classList.remove('hidden');
  }

  // Contagem de vagas aplicadas (simulado)
  const applied = storage.get('applications').filter(a=>a.userEmail===user.email);
  appliedCount.innerText = applied.length;

  // === TABS ===
  tabHome.addEventListener('click',()=>{
    homeTab.classList.remove('hidden');
    anunciosTab.classList.add('hidden');
    tabHome.classList.add('active');
    tabAnuncios.classList.remove('active');
    renderRecentVacancies();
  });
  tabAnuncios.addEventListener('click',()=>{
    homeTab.classList.add('hidden');
    anunciosTab.classList.remove('hidden');
    tabAnuncios.classList.add('active');
    tabHome.classList.remove('active');
    renderVacancies();
  });

  btnLogout.addEventListener('click',()=>{
    localStorage.removeItem('loggedUser');
    window.location.href='/index.html';
  });

  modalClose?.addEventListener('click',()=> modal.classList.add('hidden'));

  // Renderiza feed de anúncios
  function renderVacancies(){
    const vacancies = storage.get('vacancies');
    vacancyFeed.innerHTML = '';
    vacancies.slice().reverse().forEach(v=>{
      const div = document.createElement('div');
      div.className = 'feed-card';
      div.innerHTML = `
        <h3>${v.title}</h3>
        <p>${v.description}</p>
        <small>${v.location} • ${v.date}</small>
        <button class="primary">Candidatar-se</button>
      `;
      vacancyFeed.appendChild(div);
    });
  }

  // Feed recente na home
  function renderRecentVacancies(){
    const vacancies = storage.get('vacancies');
    recentFeed.innerHTML = '';
    vacancies.slice(-5).reverse().forEach(v=>{
      const div = document.createElement('div');
      div.className = 'feed-card';
      div.innerHTML = `
        <h3>${v.title}</h3>
        <p>${v.description}</p>
        <small>${v.location} • ${v.date}</small>
        <button class="primary">Candidatar-se</button>
      `;
      recentFeed.appendChild(div);
    });
  }

})();

// === CARROSSEL DE DESTAQUES ===
const track = document.getElementById('carouselTrack');
document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => {
  track.scrollBy({ left: -260, behavior: 'smooth' });
});
document.querySelector('.carousel-btn.next')?.addEventListener('click', () => {
  track.scrollBy({ left: 260, behavior: 'smooth' });
});
