const gallery = document.getElementById('gallery');

function buildGallery(images) {
  const markup = images
    .map(image => `<li><img src=${image} width='200' alt=${image}/></li>`)
    .join(' ');
  gallery.innerHTML = markup;
}
export default buildGallery;
