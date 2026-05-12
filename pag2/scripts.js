document.getElementById('fecha-actual').textContent = new Date().toLocaleDateString('es-ES');

document.getElementById('descarga-btn').addEventListener('click', function(e) {
  e.preventDefault();
  var t = document.getElementById('contador-container');
  t.style.display = 'block';
  var r = t.getBoundingClientRect(),
      o = window.pageYOffset || document.documentElement.scrollTop,
      n = r.top + o - window.innerHeight / 2 + r.height / 2 - 40;
  window.scrollTo({ top: n, behavior: 'smooth' });
  this.style.display = 'none';
  var i = Date.now(),
      a = document.getElementById('contador-texto'),
      d = document.getElementById('espiral-progreso'),
      c = 314,
      u = setInterval(function() {
        var e = Date.now() - i,
            r = Math.min(e / 15000, 1),
            o = Math.ceil((15000 - e) / 1000),
            n = c * (1 - r);
        d.style.strokeDashoffset = n;
        a.textContent = o;
        if (r >= 1) {
          clearInterval(u);
          t.style.display = 'none';
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
