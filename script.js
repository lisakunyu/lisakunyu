document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const overlay = document.createElement("div");

  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Toggle Menu dari Samping
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Klik di luar menu untuk menutup
  overlay.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });

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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Pilihan Saldo
  function selectSaldo(amount) {
    document.getElementById("selectedSaldo").value = amount;
    document.querySelectorAll(".saldo-option").forEach(option => {
      option.style.background = "#007bff";
    });
    event.target.style.background = "#0056b3";
  }

  // Format Pesan WhatsApp
  window.formatWhatsAppMessage = function (form) {
    const nama = form.nama.value;
    const alamat = form.alamat.value;
    const whatsapp = form.whatsapp.value;
    const saldo = form.saldo.value;

    if (!saldo) {
      alert("Silakan pilih saldo awal!");
      return false;
    }

    const message = `Halo Admin, saya ingin mendaftar sebagai Mitra Pulsa.\n\nNama: ${nama}\nAlamat: ${alamat}\nNomor WhatsApp: ${whatsapp}\nSaldo Awal: Rp${saldo}`;
    document.getElementById("whatsappMessage").value = encodeURIComponent(message);

    return true;
  };

  // Tambahkan event listener ke setiap saldo-option
  document.querySelectorAll(".saldo-option").forEach(option => {
    option.addEventListener("click", function () {
      selectSaldo(this.textContent.replace(".", "").trim());
    });
  });
});