// const buildGallery = require('./gallery');

const navbar = document.getElementById('navbar');
const gallery = document.getElementById('gallery');

function buildGallery(images) {
  const markup = images
    .map(image => `<li><img src=${image} width='200' alt=${image}/></li>`)
    .join(' ');
  gallery.innerHTML = markup;
}

function getImages(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.search.value;
  if (!query.trim()) return;
  fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
    .then(r => r.json())
    .then(r => buildGallery(r.message));
}

export function buildNavBar() {
  const markup = `
  <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search" id='form'>
      <input name='search' class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
`;
  navbar.innerHTML = markup;
  document.querySelector('#form').addEventListener('submit', getImages);
}

buildNavBar();
