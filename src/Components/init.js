import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

// pantalla inicial
export function init(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('init');
  section.innerHTML = `
    <img src='./lib/img/logo.png' class= 'logo'>
    <button class='logIn'>Inicia Sesión</button>
    <button class='register'>Regístrate</button>
    <img src='./lib/img/division.png' class= 'division'>
    <button class='google'>Regístrate con google</button>
  `;
  const logIn = section.querySelector('.logIn');
  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  const register = section.querySelector('.register');
  register.addEventListener('click', () => {
    navigateTo('/register');
  });

  const google = section.querySelector('.google');
  google.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        navigateTo('/mainScreen');
      }).catch((error) => {
        GoogleAuthProvider.credentialFromError(error);
      });
  });
  return section;
}