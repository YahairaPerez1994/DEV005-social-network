function home() {
  const postForm = document.createElement('section');
  postForm.classList.add('home');
  postForm.innerHTML = `
    <img src='./lib/img/logoHome.png' class= 'logoHome'>
    <form>
    <textarea class="postForm" placeholder= "Comparte tu negocio..."></textarea>
    <button type= "submit" class= "post" > Publicar </button>
    </form>
    <button type= "submit" class= "goOut" > Salir </button>`;
  return postForm;
}

export { home };