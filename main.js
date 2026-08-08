const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.project-media img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add('show');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('show');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
