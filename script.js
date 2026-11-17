// Nomor WhatsApp KostService. Format internasional tanpa tanda +.
const WHATSAPP_NUMBER = "6282114933545";
let selectedService = "";

function whatsappUrl(message = "Halo KostService, saya ingin bertanya tentang layanan.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".wa-link").forEach(link => {
  link.href = whatsappUrl();
});

const modal = document.getElementById("orderModal");
const serviceTitle = document.getElementById("modalService");
const orderForm = document.getElementById("orderForm");

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    selectedService = button.dataset.service;
    serviceTitle.textContent = selectedService;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

function closeOrderModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeOrderModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeOrderModal();
});

orderForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(orderForm);
  const name = form.get("name");
  const phone = form.get("phone");
  const address = form.get("address");
  const date = form.get("date");
  const detail = form.get("detail") || "-";

  const message = [
    "Halo KostService! Saya ingin memesan layanan.",
    "",
    `Layanan: ${selectedService}`,
    `Nama: ${name}`,
    `No. WhatsApp: ${phone}`,
    `Alamat kos: ${address}`,
    `Tanggal layanan: ${date}`,
    `Detail kebutuhan: ${detail}`,
    "",
    "Mohon informasi ketersediaan jadwal dan estimasi harga. Terima kasih."
  ].join("\n");

  window.open(whatsappUrl(message), "_blank", "noopener");
  closeOrderModal();
  orderForm.reset();
});

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Set tanggal minimum pada form agar pengguna tidak memilih tanggal lampau.
const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
dateInput.min = localToday;
