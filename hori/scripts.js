// Tabla de contenido
document.querySelector('.toc-title').addEventListener('click', function() {
  const content = document.getElementById('toc-content');
  const icon = document.getElementById('toc-icon');
  if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.style.maxHeight = '0px';
    icon.style.transform = 'rotate(0deg)';
  }
});

// Ajuste de desplazamiento para que la barra sticky no tape los títulos
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href').substring(1);
  const target = document.getElementById(targetId);
  if (target) {
    e.preventDefault();
    const headerHeight = 100; // altura de la barra sticky en píxeles
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
});

// Lightbox para capturas
document.addEventListener('click', function(e) {
  if (e.target.closest('.screenshot-thumbnail')) {
    e.preventDefault();
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = e.target.closest('.screenshot-thumbnail').href;
    document.body.style.overflow = 'hidden';
  }
});

document.getElementById('lightbox').addEventListener('click', function() {
  this.style.display = 'none';
  document.body.style.overflow = '';
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
  }
});

// FAQ toggle
function toggleFAQ(id) {
  const el = document.getElementById(id);
  const icon = document.getElementById(id + '-icon');
  if (el.style.display === 'none' || !el.style.display) {
    el.style.display = 'block';
    icon.style.transform = 'rotate(180deg)';
  } else {
    el.style.display = 'none';
    icon.style.transform = 'rotate(0deg)';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById('faq' + i).style.display = 'none';
  }
});
