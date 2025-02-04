function formatWhatsAppMessage(form) {
  const nama = document.getElementById('nama').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const saldo = document.getElementById('selectedSaldo').value;
  const message = `Halo Admin, saya ingin mendaftar sebagai mitra.\n\nNama: ${nama}\nAlamat Rumah: ${alamat}\nWhatsApp: ${whatsapp}\nSaldo Awal: ${saldo}\n\nSilakan proses pendaftaran saya. Terima kasih!`;
  document.getElementById('whatsappMessage').value = message;
}

function selectSaldo(nominal) {
  const options = document.querySelectorAll('.saldo-option');
  options.forEach(opt => opt.classList.remove('selected'));
  event.target.classList.add('selected');
  document.getElementById('selectedSaldo').value = nominal;
}

const saldoOptions = document.querySelectorAll('.saldo-option');

saldoOptions.forEach(option => {
  option.addEventListener('click', () => {
    saldoOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    document.getElementById('selectedSaldo').value = option.textContent;
  });
});