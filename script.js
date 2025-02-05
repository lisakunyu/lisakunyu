document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Navigation
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", function () {
    sidebar.classList.add("visible");
    overlay.classList.add("active");
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("visible");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("visible");
    overlay.classList.remove("active");
  });

  // Pilihan Saldo
  window.selectSaldo = function(amount) {
    document.getElementById("selectedSaldo").value = amount;
    document.querySelectorAll(".saldo-option").forEach(option => {
      option.style.background = "#007bff";
    });
    event.target.style.background = "#0056b3";
  };

  // Format Pesan WhatsApp
  window.formatWhatsAppMessage = function (form) {
    const nama = form.nama.value.trim();
    const alamat = form.alamat.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const saldo = form.saldo.value.trim();

    if (!nama || !alamat || !whatsapp || !saldo) {
      alert("Harap isi semua data dengan lengkap!");
      return false;
    }

    const message = `Halo Admin, saya ingin mendaftar sebagai Mitra Pulsa.\n\nNama: ${nama}\nAlamat: ${alamat}\nNomor WhatsApp: ${whatsapp}\nSaldo Awal: Rp${saldo}`;
    document.getElementById("whatsappMessage").value = encodeURIComponent(message);

    return true;
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