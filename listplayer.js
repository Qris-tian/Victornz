// === DATA PLAYER ===
const players = {
  player1: {
    name: "Christian252010",
    skin: "skin/cris.png",
    discord: "christianjuniadi",
    rank: "Mythic",
    role: "Builder",
    timezone: "WIB",
    free: "Malam",
    hobby: "Turu",
    cita: "Orang Sukses",
    about: "Dingin Tetapi Tidak Kejam",
    moto: "Menyerah Bukanlah Pilihan",
    isSlim: true
  },
  player2: {
    name: "Elrumi19",
    skin: "skin/elrum.png",
    discord: "eroitina",
    rank: "Mythic",
    role: "Grinder",
    timezone: "WIT",
    free: "Setiap Hari",
    hobby: "Ngocok",
    cita: "Biduan",
    about: "Saya adalah raja ibelis",
    moto: "Hidup seperti Lery",
    isSlim: true
  },
  player3: {
    name: "frexymax",
    skin: "skin/prex.png",
    discord: "frexyy0166",
    rank: "Mythic",
    role: "Builder",
    timezone: "Pluto",
    free: "Selalu ada",
    hobby: "Mancing",
    cita: "Presiden",
    about: "Yo ndak tau kok tanya saya",
    moto: "Buly elrumi setiap hari",
    isSlim: true
  },
  player4: {
    name: "AsaaNiBozz",
    skin: "skin/asaa.png",
    discord: "mocha_hasya",
    rank: "Legend",
    role: "Builder",
    timezone: "WIB",
    free: "Kapan-Kapan",
    hobby: "Bernafas",
    cita: "LC",
    about: "Hanya manusia biasa",
    moto: "Jangan lupa bernafas",
    isSlim: true
  }
};

// === HEAD CROP DI LIST MEMBER ===
Object.keys(players).forEach((key, index) => {
  const headId = `head${index + 1}`;
  const canvas = document.getElementById(headId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const img = new Image();
  img.src = players[key].skin;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // crop kepala 8x8 px → scale 64x64
    ctx.drawImage(img, 8, 8, 8, 8, 0, 0, 64, 64);
    ctx.drawImage(img, 40, 8, 8, 8, 0, 0, 64, 64); // overlay top layer
  };
});

// === OVERLAY PLAYER ===
function showOverlay(id) {
  const p = players[id];
  if (!p) return;

  document.getElementById("ov-name").textContent = p.name;

  const canvas = document.getElementById("ov-skin");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  const img = new Image();
  img.src = p.skin;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = 2;
    const armWidth = p.isSlim ? 3 : 4;

    // Offset posisi tangan kanan (agar seimbang dengan model slim & wide)
    const rightArmX = p.isSlim ? 24 : 24;
    const leftArmX = p.isSlim ? 2 : 0;

    // === Kepala ===
    ctx.drawImage(img, 8, 8, 8, 8, 8, 0, 8 * scale, 8 * scale);
    ctx.drawImage(img, 40, 8, 8, 8, 8, 0, 8 * scale, 8 * scale);

    // === Badan ===
    ctx.drawImage(img, 20, 20, 8, 12, 8, 16, 8 * scale, 12 * scale);
    ctx.drawImage(img, 20, 36, 8, 12, 8, 16, 8 * scale, 12 * scale);
    // === Lengan kiri (base + overlay) ===
    ctx.drawImage(img, 44, 20, armWidth, 12, leftArmX, 16, armWidth * scale, 12 * scale);
    ctx.drawImage(img, 44, 36, armWidth, 12, leftArmX, 16, armWidth * scale, 12 * scale);

    // === Lengan kanan (base + overlay) ===
    ctx.drawImage(img, 36, 52, armWidth, 12, rightArmX, 16, armWidth * scale, 12 * scale);
    ctx.drawImage(img, 52, 52, armWidth, 12, rightArmX, 16, armWidth * scale, 12 * scale);

    // === Kaki kiri (base + overlay) ===
    ctx.drawImage(img, 4, 20, 4, 12, 8, 40, 4 * scale, 12 * scale);
    ctx.drawImage(img, 4, 36, 4, 12, 8, 40, 4 * scale, 12 * scale);

    // === Kaki kanan (base + overlay) ===
    ctx.drawImage(img, 20, 52, 4, 12, 16, 40, 4 * scale, 12 * scale);
    ctx.drawImage(img, 4, 52, 4, 12, 16, 40, 4 * scale, 12 * scale);
  };

  // === Info player ===
  document.getElementById("ov-discord").textContent = p.discord;
  document.getElementById("ov-rank").textContent = p.rank;
  document.getElementById("ov-role").textContent = p.role;
  document.getElementById("ov-timezone").textContent = p.timezone;
  document.getElementById("ov-free").textContent = p.free;
  document.getElementById("ov-hobby").textContent = p.hobby;
  document.getElementById("ov-cita").textContent = p.cita;
  document.getElementById("ov-about").textContent = p.about;
  document.getElementById("ov-moto").textContent = p.moto;

  document.getElementById("playerOverlay").classList.remove("hidden");
  const overlay = document.getElementById("playerOverlay");
overlay.classList.add("show");
}

function closeOverlay() {
  document.getElementById("playerOverlay").classList.add("hidden");
  const overlay = document.getElementById("playerOverlay");
overlay.classList.add("show");
}

// === SIDEBAR TOGGLE ===
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => sidebar.classList.remove('active'));
});
