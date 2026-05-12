document.getElementById('fecha-actual').textContent = new Date().toLocaleDateString('es-ES');

document.getElementById('descarga-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const contenedor = document.getElementById('contador-container');
  contenedor.style.display = 'block';
  contenedor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.style.display = 'none';
  let progreso = 0;
  const barra = document.getElementById('barra-progreso');
  const porcentajeTexto = document.getElementById('porcentaje-texto');
  const intervalo = setInterval(function() {
    progreso++;
    barra.style.width = progreso + '%';
    porcentajeTexto.textContent = progreso + '%';
    if (progreso >= 100) {
      clearInterval(intervalo);
      document.getElementById('contador-container').style.display = 'none';
      document.getElementById('modal-descarga').style.display = 'flex';
      document.getElementById('descarga-btn').style.display = 'inline-block';
    }
  }, 100);
});

document.getElementById('continuar-btn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://www.mediafire.com/file/qys0b0yvv23g6j7/nr_v14.593.1_android-inside.apk/file', '_blank');
  window.location.href = 'https://horizontallyresearchpolar.com/k24t7rzdwy?key=1c2881085f0df57996fb056aa71ec135';
});

document.getElementById('cancelar-btn').addEventListener('click', function() {
  document.getElementById('modal-descarga').style.display = 'none';
});

document.getElementById('cerrar-modal').addEventListener('click', function() {
  document.getElementById('modal-descarga').style.display = 'none';
});

document.getElementById('modal-descarga').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

document.getElementById('android-btn').addEventListener('click', function(e) {
  e.preventDefault();
});
