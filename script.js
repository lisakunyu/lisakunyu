document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Navigation
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", function () {
    sidebar.classList.add("visible");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("visible");
    overlay.classList.remove("active");
  });

  // Pilihan Saldo
  window.selectSaldo = function (amount) {
    document.getElementById("selectedSaldo").value = amount;
    document.querySelectorAll(".saldo-option").forEach(option => {
      option.style.background = "#007bff";
    });
    event.target.style.background = "#0056b3";
  };

  // Format Pesan WhatsApp (Perbaikan agar lebih mudah dibaca)
  window.formatWhatsAppMessage = function (form) {
    const nama = form.nama.value.trim();
    const alamat = form.alamat.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const saldo = form.saldo.value.trim();

    if (!nama || !alamat || !whatsapp || !saldo) {
      alert("Harap isi semua data dengan lengkap!");
      return false;
    }

    // Format pesan dengan newline (\n) tanpa encodeURIComponent
    const message = `Halo Admin, saya ingin mendaftar sebagai Mitra Pulsa.\n\nNama: ${nama}\nAlamat: ${alamat}\nNomor WhatsApp: ${whatsapp}\nSaldo Awal: Rp${saldo}`;

    // Ganti karakter newline agar terbaca dengan baik di WhatsApp
    const formattedMessage = message.replace(/\n/g, "%0A");

    // Redirect ke WhatsApp dengan pesan yang rapi
    const whatsappURL = `https://wa.me/6282190108094?text=${formattedMessage}`;
    window.open(whatsappURL, "_blank");

    return false; // Hindari pengiriman formulir default
  };

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});