document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  document.querySelector('.header').appendChild(hamburger);
  
  const sidebar = document.getElementById('sidebar');
  
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Back to top button visibility on scroll
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

  // Smooth scroll for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });
});

// Function to handle saldo selection
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
  const nama = form.nama.value.trim();
  const alamat = form.alamat.value.trim();
  const whatsapp = form.whatsapp.value.trim();
  const saldo = form.saldo.value.trim();
  
  if (!nama || !alamat || !whatsapp || !saldo) {
    alert("Semua field harus diisi!");
    return false; // Prevent form submission if any field is empty
  }

  const message = `Halo, saya ingin mendaftar sebagai mitra:\n\n` +
                  `Nama: ${nama}\n` +
                  `Alamat: ${alamat}\n` +
                  `Nomor WhatsApp: ${whatsapp}\n` +
                  `Saldo Awal: Rp${saldo}\n\n` +
                  `Silakan proses pendaftaran saya.`;
  
  // Set the message text to the WhatsApp message hidden input
  form.text.value = encodeURIComponent(message);
  return true; // Proceed with form submission
}
