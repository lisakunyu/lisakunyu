document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  document.querySelector('.header').appendChild(hamburger);
  
  const sidebar = document.getElementById('sidebar');
  
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });
});

// Saldo selection
function selectSaldo(amount) {
  const options = document.querySelectorAll('.saldo-option');
  options.forEach(option => {
    option.classList.remove('selected');
    if (parseInt(option.textContent) === amount) {
      option.classList.add('selected');
    }
  });
  document.getElementById('selectedSaldo').value = amount;
}

// WhatsApp message formatter
function formatWhatsAppMessage(form) {
  const nama = form.nama.value;
  const alamat = form.alamat.value;
  const whatsapp = form.whatsapp.value;
  const saldo = form.saldo.value;
  
  const message = `Halo, saya ingin mendaftar sebagai mitra:\n\n` +
                  `Nama: ${nama}\n` +
                  `Alamat: ${alamat}\n` +
                  `Nomor WhatsApp: ${whatsapp}\n` +
                  `Saldo Awal: Rp${saldo}\n\n` +
                  `Silakan proses pendaftaran saya.`;
  
  form.text.value = encodeURIComponent(message);
  return true;
}