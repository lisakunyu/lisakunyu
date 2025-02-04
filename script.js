// script.js

// Hamburger Menu untuk Mobile
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const header = document.querySelector('.header');

// Buat hamburger icon dinamis
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
header.prepend(hamburger);

// Toggle sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  content.classList.toggle('expanded');
  hamburger.classList.toggle('active');
});

// Tutup sidebar saat klik di luar area
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.add('hidden');
    content.classList.add('expanded');
    hamburger.classList.remove('active');
  }
});

// Smooth scroll untuk menu
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Tutup sidebar di mobile setelah memilih menu
    if (window.innerWidth <= 768) {
      sidebar.classList.add('hidden');
      content.classList.add('expanded');
      hamburger.classList.remove('active');
    }
  });
});

// Efek scroll header
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.cssText = `
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      padding: 10px 0;
      background: rgba(255,255,255,0.95);
    `;
  } else {
    header.style.cssText = `
      box-shadow: none;
      padding: 20px 0;
      background: transparent;
    `;
  }
});

// Handle pilihan saldo
window.selectSaldo = function(amount) {
  const options = document.querySelectorAll('.saldo-option');
  options.forEach(opt => opt.classList.remove('selected'));
  event.target.classList.add('selected');
  document.getElementById('selectedSaldo').value = amount;
}

// Format pesan WhatsApp
window.formatWhatsAppMessage = function(form) {
  const nama = encodeURIComponent(form.nama.value);
  const alamat = encodeURIComponent(form.alamat.value);
  const saldo = encodeURIComponent(form.saldo.value);
  const noWA = encodeURIComponent(form.whatsapp.value);
  
  const message = `Halo, saya ingin mendaftar sebagai mitra:\n\nNama: ${nama}\nAlamat: ${alamat}\nSaldo awal: ${saldo}\nNomor WhatsApp: ${noWA}`;
  
  document.getElementById('whatsappMessage').value = message;
  return true;
}

// Back to top button
   const backToTopButton = document.getElementById('back-to-top');

   window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
       backToTopButton.style.display = 'block';
     } else {
       backToTopButton.style.display = 'none';
     }
   });

   backToTopButton.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   });

document.getElementById('whatsapp').addEventListener('input', function() {
     if (!this.value.startsWith('62')) {
       this.setCustomValidity('Nomor WhatsApp harus dimulai dengan 62');
     } else {
       this.setCustomValidity('');
     }
   });

const sections = document.querySelectorAll('.section');

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
       }
     });
   }, { threshold: 0.1 });

   sections.forEach(section => {
     observer.observe(section);
   });