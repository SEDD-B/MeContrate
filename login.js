(function(){
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  const storage = {
    get(k){ return JSON.parse(localStorage.getItem(k)||'[]'); },
    set(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
  };

  showRegister?.addEventListener('click',e=>{
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });

  showLogin?.addEventListener('click',e=>{
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  registerForm?.addEventListener('submit',e=>{
    e.preventDefault();
    const users = storage.get('users');
    users.push({
      name: document.getElementById('regName').value,
      email: document.getElementById('regEmail').value,
      pass: document.getElementById('regPass').value,
      type: document.getElementById('regType').value,
      availability: document.getElementById('regAvailability').value
    });
    storage.set('users',users);
    alert('Conta criada!');
    registerForm.reset();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  loginForm?.addEventListener('submit',e=>{
    e.preventDefault();
    const users = storage.get('users');
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    const user = users.find(u=>u.email===email && u.pass===pass);
    if(user){
      localStorage.setItem('loggedUser', JSON.stringify(user));
      window.location.href='home.html';
    }else alert('E-mail ou senha incorretos!');
  });
})();
