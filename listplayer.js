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
  },
  player5: {
    name: "GyzzaFaril20",
    skin: "skin/aril.png",
    discord: "gyzzafaril",
    rank: "Mythic",
    role: "Grinder",
    timezone: "WIB",
    free: "Weekend-Malam",
    hobby: "Catur",
    cita: " Desain grafis",
    moto: "It's the one and only G Y double Z",
    about: "Teknisi Redstone yang berorientasi pada efisiensi dengan keahlian ganda dalam optimalisasi ekonomi Villager. Berpengalaman dalam merancang dan mengeksekusi sistem otomatisasi skala besar yang resource-friendly dan server-friendly (minim lag). Memiliki pemahaman mendalam tentang mekanika inti permainan (game mechanics) untuk menemukan solusi inovatif. Spesialis dalam mengubah sirkuit yang rumit menjadi desain yang ringkas dan andal. Terbukti berhasil membangun infrastruktur trading hall yang mampu mengamankan penawaran dagang (trade) paling berharga dengan diskon maksimum. Terampil dalam troubleshooting sirkuit yang ada dan siap menerapkan otomatisasi penuh untuk mencapai kemandirian sumber daya.",
    isSlim: false
  },
  player6: {
    name: "setya_315104",
    skin: "skin/setya.png",
    discord: "setya031",
    rank: "Legend",
    role: "Grinder",
    timezone: "WIB",
    free: "malam",
    hobby: "Fishing and reading a novel",
    cita: "Bartender",
    moto: "Stay true to yourself",
    about: "I am a mighty person",
    isSlim: false
  },
  player7: {
    name: "Ponkzz_x_C",
    skin: "skin/ponk.png",
    discord: "ponkkzzz",
    rank: "Rakyat",
    role: "Grinder",
    timezone: "WIB",
    free: "MALAM",
    hobby: "Basket😋",
    cita: "ke jepang🙏",
    moto: "GTW",
    about: "aku manusia, kalo kau apa, ga boleh sama",
    isSlim: false
  },
  player8: {
    name: "ReinyArthana ",
    skin: "skin/rein.png",
    discord: "reiny27 ",
    rank: "Legend",
    role: "Grinder",
    timezone: "WIB",
    free: "Malam",
    hobby: "Eksperimen makanan ",
    cita: "Nikahin Arion ",
    moto: "Pengen tinggi ",
    about: "Suka makan ",
    isSlim: false
  },
  player9: {
    name: "Rafz5381",
    skin: "skin/steve.png",
    discord: "Fearman._",
    rank: "Legend",
    role: "Builder",
    timezone: "WIB",
    free: "Hari libur",
    hobby: "Main takraw",
    cita: "Jadi pemadam kebakaran",
    moto: "Bernafas manual terkadang tidak buruk itu mengingatkan kita pada siapa yg menciptakan kita.",
    about: "Suka kepanasan ,kipas gua rusak tolong, gua perbaiki bang",
    isSlim: false
  },
  player10: {
    name: "AGUNG_TURU2402",
    skin: "skin/agung.png",
    discord: "agung_turu",
    rank: "Master",
    role: "Grinder",
    timezone: "WIB",
    free: "Tergantung",
    hobby: "Main Game",
    cita: "Ultramen (belum ada) ",
    moto: "Season depan pasti imortal",
    about: "GANTENG ABIS",
    isSlim: false
  },
  player11: {
    name: "Mufit166383698",
    skin: "skin/mufit.png",
    discord: "Mufit10635",
    rank: "Master",
    role: "Grinder",
    timezone: "WIB",
    free: "Malam kalau lagi gabut",
    hobby: "Membuat kerajinan ",
    cita: "Menjadi YouTuber ",
    moto: "Gabut gabutt gabut",
    about: "Seseorang yang ganteng ",
    isSlim: false
  },
  player12: {
    name: "Bayu_Alif7693",
    skin: "skin/steve.png",
    discord: "bayu_alif",
    rank: "Master",
    role: "Builder",
    timezone: "WIB",
    free: "Sore jam 3 sampai jam 5an",
    hobby: "Gatau/Gaada",
    cita: "Masuk surga",
    moto: "Bersatu kita teguh, berperang kita runtuh",
    about: "Gw orang nya agak sok asik",
    isSlim: false
  },
  player13: {
    name: "nareys15",
    skin: "skin/narey.png",
    discord: "nnaresyh",
    rank: "Legend",
    role: "Grinder",
    timezone: "WIB",
    free: "sore, malam",
    hobby: "cooking ",
    cita: "jdi org terkaya sedunia 💀🤤",
    moto: "gaada moto yg penting hidup sehat dan banya uang",
    about: "Akulah jawir imupt",
    isSlim: false
  },
  player14: {
    name: "Undercocoo",
    skin: "skin/under.png",
    discord: "undercoco_mc",
    rank: "Rakyat",
    role: "Builder",
    timezone: "WIB",
    free: "Sore sampai malam",
    hobby: "Maen roblox dan minecraft",
    cita: "Jadi developer 🗿",
    moto: "gk ada 🗿",
    about: "Males",
    isSlim: false
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
// === SEARCH & SORT FUNCTION ===
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const playerList = document.querySelector(".player-list");
const playerItems = Array.from(document.querySelectorAll(".player-item"));

// Simpan urutan default
const defaultOrder = [...playerItems];

// 🔍 Fitur Search
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  playerItems.forEach(item => {
    const name = item.querySelector("span").textContent.toLowerCase();
    item.style.display = name.includes(searchTerm) ? "flex" : "none";
  });
});

// 🟨 Fitur Sort
sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;
  let sortedItems = [];

  if (value === "default") {
    sortedItems = defaultOrder;
  } else if (value === "az") {
    sortedItems = [...playerItems].sort((a, b) => {
      return a.querySelector("span").textContent.localeCompare(b.querySelector("span").textContent);
    });
  } else {
    // Sort berdasarkan rank atau role
    sortedItems = playerItems.filter(item => {
      const name = item.querySelector("span").textContent;
      const data = players[`player${defaultOrder.indexOf(item) + 1}`];
      return data.rank === value || data.role === value;
    });
  }

  playerList.innerHTML = "";
  sortedItems.forEach(item => playerList.appendChild(item));
});
// === FITUR SCROLL UNTUK OVERLAY ===
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("playerOverlay");
  const content = overlay.querySelector(".overlay-content");

  // Pastikan overlay bisa di-scroll tanpa memengaruhi body
  overlay.addEventListener("wheel", (e) => {
    const canScroll =
      content.scrollHeight > content.clientHeight &&
      (
        (e.deltaY < 0 && content.scrollTop > 0) ||
        (e.deltaY > 0 && content.scrollTop + content.clientHeight < content.scrollHeight)
      );

    if (canScroll) {
      e.stopPropagation(); // cegah scroll body
    }
  }, { passive: false });

  // Tambahkan gaya scroll otomatis
  content.style.maxHeight = "85vh";
  content.style.overflowY = "auto";
  content.style.overscrollBehavior = "contain";
});