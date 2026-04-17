

// --- Assumendo che STORE sia già dichiarato all'inizio dello script o importato ---
// Funzione per ottenere la data odierna in formato MM-DD

function getTodayKey() {
  const d = new Date();
  return String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
}
function getWeekdayKey(date) {
  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  return days[date.getDay()];
}
// Funzione per estrarre ID video da URL YouTube
function getYouTubeID(url) {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[1].length === 11) ? match[1] : null;
}

// Mostra messaggio del giorno nello slider con thumbnail
let currentDay = getTodayKey();

// Mostra slide del giorno con data, messaggio e thumbnail
function showSlide(dayKey) {
  const dateObj = new Date(`2026-${dayKey}`);

  // 1. Prova giorno specifico
  let data = STORE.daily[dayKey];

  // 2. Fallback su giorno settimana
  if (!data) {
    const weekday = getWeekdayKey(dateObj);
    data = STORE.weekly[weekday];
  }

  if (!data) return;

  document.getElementById('sliderDate').textContent = dayKey;

  const videoID = getYouTubeID(data.playlist.url);
  const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : "";

  const slider = document.getElementById('messageSlider');
  slider.innerHTML = `
    <p class="mainMessage">${data.mainMessage}</p>
    <p style="font-size:1.5rem; color:#0055aa;">${data.marcoMessage}</p>

    <div class="playlist">
      <h4>La canzone del giorno:</h4>
    
      ${thumbnail ? `
        <a href="${data.playlist.url}" target="_blank"> 
               <p style="text-align:center;font-size:18px; ;margin-bottom:0">${data.playlist.title}</p>

          <img src="${thumbnail}" class="playlistImage" style="">
        </a>` : ""}  
        <a href="${data.playlist.url}" target="_blank">
      </a>
    </div>
  `;
}

// Controlli slider
document.getElementById('prevDay').addEventListener('click', () => {
  const prevDate = new Date(`2026-${currentDay}`);
  prevDate.setDate(prevDate.getDate() - 1);
  currentDay = String(prevDate.getMonth() + 1).padStart(2, '0') + "-" + String(prevDate.getDate()).padStart(2, '0');
  showSlide(currentDay);
});

document.getElementById('nextDay').addEventListener('click', () => {
  const nextDate = new Date(`2026-${currentDay}`);
  nextDate.setDate(nextDate.getDate() + 1);
  currentDay = String(nextDate.getMonth() + 1).padStart(2, '0') + "-" + String(nextDate.getDate()).padStart(2, '0');
  showSlide(currentDay);
});

// Mostra la slide iniziale
showSlide(currentDay);

// Countdown al 4 aprile
function updateCountdown() {
  const today = new Date();
  const year = today.getFullYear();
  const targetDate = new Date(`${year}-04-04T00:00:00`);

  if (today > targetDate) targetDate.setFullYear(year + 1);

  const diff = targetDate - today;
  const countdown = document.getElementById('countdown');

  if (diff <= 0) {
    countdown.textContent = "Buon Compleanno!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days} giorni ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// --- Funzione per generare le card dei coupon ---
function renderCoupons() {
  const grid = document.getElementById('couponsGrid');
  const today = new Date();

  STORE.coupons.forEach(coupon => {
    const activation = new Date(coupon.activationDate);
    const isLocked = today < activation;

    const card = document.createElement('div');
    card.classList.add('coupon-card');
    if (isLocked) card.classList.add('locked');

    card.innerHTML = `
      <h4>Coupon #${coupon.number}</h4>
      <p>${activation.toLocaleDateString()}</p>
    `;

    // Click sulla card
    card.addEventListener('click', () => {
      document.getElementById('popupTitle').textContent = coupon.title;
      document.getElementById('popupDescription').textContent = coupon.description;
      document.getElementById('popupInfo').textContent = `Numero: ${coupon.number} - Attivo dal: ${activation.toLocaleDateString()}`;
      document.getElementById('couponPopup').style.display = 'block';
    });

    grid.appendChild(card);
  });
}

// Chiudi popup
document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('couponPopup').style.display = 'none';
});

// Genera le card all'avvio
renderCoupons();
// --- Funzione per mostrare la lista delle "Cose da fare insieme" ---
function renderCoseDaFare() {
  const container = document.getElementById('coseDaFareList');
  container.innerHTML = ''; // pulisce prima

  STORE.coseDaFare.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('cose-item');
    li.textContent = item.name;
       li.style.textAlign="left";

    // Se c'è una data, borda l'elemento di dorato e mostra la data a destra
    if (item.date) {
      li.style.border = "2px solid blue";
      li.style.padding = "5px 10px";
      li.style.borderRadius = "5px";
      li.style.marginBottom = "5px";
   

      const dateSpan = document.createElement('span');
      dateSpan.textContent = item.date;
      dateSpan.style.float = 'right';
      dateSpan.style.fontStyle = 'italic';
      li.appendChild(dateSpan);
    }

    container.appendChild(li);
  });
}
// --- BISCOTTI DELLA FORTUNA ---
document.addEventListener("DOMContentLoaded", () => {
  const cookie = document.getElementById('fortuneCookie');
  const messageEl = document.getElementById('fortuneMessage');

  if (!cookie || !messageEl || !STORE.fortuneMessages) return;

  cookie.addEventListener('click', () => {
    const messages = STORE.fortuneMessages;

    if (!messages.length) return;

    const random = messages[Math.floor(Math.random() * messages.length)];

    messageEl.textContent = random;

    // reset animazione
    messageEl.classList.remove('show');
    void messageEl.offsetWidth; // forza reflow

    messageEl.classList.add('show');
  });
});
// --- PLAYLIST SECTION ---
let currentPlaylist = 0;
let currentSong = 0;

// cache per salvare l'ordine random di ogni playlist
const shuffledPlaylists = {};

function shuffleArray(array) {
  const arr = [...array]; // copia per non modificare originale
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getYouTubeThumbnail(url) {
  const regExp = /^.*(?:youtu.be\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[1].length === 11)
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : "";
}

function renderPlaylist() {
  const playlist = STORE.playlistSection[currentPlaylist];
  if (!playlist) return;

  // crea shuffle SOLO la prima volta per questa playlist
  if (!shuffledPlaylists[currentPlaylist]) {
    shuffledPlaylists[currentPlaylist] = shuffleArray(playlist.songs);
  }

  document.getElementById('playlistInfo').innerHTML = `
    <h3>${playlist.name}</h3>
    <p>${playlist.description}</p>
  `;

  currentSong = 0;
  renderSong();
}

function renderSong() {
  const playlist = STORE.playlistSection[currentPlaylist];
  const song = playlist.songs[currentSong];
  if (!song) return;

  const container = document.getElementById('songsSlider');
  const oldContent = container.firstElementChild;

  const thumb = getYouTubeThumbnail(song.url);

  const newContent = document.createElement('div');
  newContent.classList.add('song-enter');
  newContent.innerHTML = `<div class=songThumb>
    <h4>${song.title}</h4>
    <p>${song.subtitle}</p>
    ${thumb ? `
      <a href="${song.url}" target="_blank">
        <img src="${thumb}" style="width:250px; border-radius:8px; cursor:pointer;">
      </a>
      </div>
      <div class="SongDesc"> 
      <h4>Dedicata a te.</h4> 
      <h5>Il mio messaggio in questa canzone</h5>
      ${song.description.map(line => `<p>${line}</p>`).join('')}</div>
    ` : ""}
  `;

  // animazione uscita
  if (oldContent) {
    oldContent.classList.add('song-exit-active');

    setTimeout(() => {
      container.innerHTML = "";
      container.appendChild(newContent);

      // trigger animazione entrata
      requestAnimationFrame(() => {
        newContent.classList.add('song-enter-active');
      });
    }, 400); // durata animazione
  } else {
    container.appendChild(newContent);
    requestAnimationFrame(() => {
      newContent.classList.add('song-enter-active');
    });
  }
}

// CONTROLLI PLAYLIST
document.getElementById('prevPlaylist').addEventListener('click', () => {
  currentPlaylist = (currentPlaylist - 1 + STORE.playlistSection.length) % STORE.playlistSection.length;
  renderPlaylist();
});

document.getElementById('nextPlaylist').addEventListener('click', () => {
  currentPlaylist = (currentPlaylist + 1) % STORE.playlistSection.length;
  renderPlaylist();
});

// CONTROLLI CANZONI
document.getElementById('nextSong').addEventListener('click', () => {
  const songs = STORE.playlistSection[currentPlaylist].songs;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * songs.length);
  } while (newIndex === currentSong && songs.length > 1);

  currentSong = newIndex;
  renderSong();
});

document.getElementById('prevSong').addEventListener('click', () => {
  const songs = STORE.playlistSection[currentPlaylist].songs;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * songs.length);
  } while (newIndex === currentSong && songs.length > 1);

  currentSong = newIndex;
  renderSong();
});

// INIT
renderPlaylist();
document.addEventListener("DOMContentLoaded", () => {

  const btnC = document.getElementById("btnComplimenti");
  const textC = document.getElementById("textComplimenti");

  const btnI = document.getElementById("btnInsulti");
  const textI = document.getElementById("textInsulti");

  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (btnC && textC) {
    btnC.addEventListener("click", () => {
      textC.textContent = randomFrom(STORE.complimenti);
      textC.classList.remove("show");
      void textC.offsetWidth;
      textC.classList.add("show");
    });
  }

  if (btnI && textI) {
    btnI.addEventListener("click", () => {
      textI.textContent = randomFrom(STORE.insulti);
      textI.classList.remove("show");
      void textI.offsetWidth;
      textI.classList.add("show");
    });
  }

});
document.addEventListener("DOMContentLoaded", () => {

  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // TOOL 1
  const btn1 = document.getElementById("btnUtility1");
  const out1 = document.getElementById("outUtility1");

  if (btn1 && out1) {
    btn1.addEventListener("click", () => {
      out1.textContent = randomFrom(STORE.utility1Answers);
      out1.classList.remove("show");
      void out1.offsetWidth;
      out1.classList.add("show");
    });
  }

  // TOOL 2 (MONETA TRUCCATA 😄)
  const coin = document.getElementById("coin");
const out2 = document.getElementById("outUtility2");

const btnTesta = document.getElementById("btnTesta");
const btnCroce = document.getElementById("btnCroce");

let rotation = 0; // può continuare a girare se vuoi animazione

function flipCoin(result) {
  // ruota la moneta (animazione)
  rotation += 1800; // 5 giri
  coin.style.transform = `rotateY(${rotation}deg)`;

  // cambia il testo visibile
  const coinText = document.getElementById('coinText');
  if (result === 'testa') {
    coinText.textContent = 'Testa';
  } else {
    coinText.textContent = 'Croce';
  }

  // output del risultato
  setTimeout(() => {
    out2.textContent = `È uscito ${result} 🎯`;
    out2.classList.remove("show");
    void out2.offsetWidth;
    out2.classList.add("show");
  }, 1000);
}

if (btnTesta) {
  btnTesta.addEventListener("click", () => flipCoin("testa"));
}

if (btnCroce) {
  btnCroce.addEventListener("click", () => flipCoin("croce"));
}

  // TOOL 3
  const btn3 = document.getElementById("btnUtility3");
  const out3 = document.getElementById("outUtility3");

  if (btn3 && out3) {
    btn3.addEventListener("click", () => {
      out3.textContent = randomFrom(STORE.utility3Answers);
      out3.classList.remove("show");
      void out3.offsetWidth;
      out3.classList.add("show");
    });
  }

});

// --- Sezione Film e Serie TV ---
// let currentFilmIndex = 0;
// let filteredFilms = STORE.films.slice(); // inizialmente tutti

// const filmDisplay = document.getElementById('filmDisplay');
// const filterDuration = document.getElementById('filterDuration');
// const filterMood = document.getElementById('filterMood');
// // Variabile per evitare animazioni sovrapposte
// let isAnimating = false;

// function renderFilm(index, direction = "none") {
//   if (filteredFilms.length === 0) {
//     filmDisplay.innerHTML = "<p>Nessun film corrisponde ai filtri.</p>";
//     return;
//   }

//   const film = filteredFilms[index];
//   const newContent = document.createElement('div');
//   newContent.classList.add('film-slide');
//   newContent.innerHTML = `
//     <div class="film-left">
//       <a href="${film.url}" target="_blank">
//         <img src="${film.image}" alt="${film.title}" style="width:150px; border-radius:5px;">
//       </a>
//       <h3>${film.title}</h3>
//       <p>⭐ ${film.rating.score} - ${film.rating.comment}</p>
//     </div>
//     <div class="film-right">
//       <p>${film.description}</p>
//       <ul>
//         ${film.keyPoints.map(point => `<li>${point}</li>`).join('')}
//       </ul>
//     </div>
//   `;

//   if (direction === "none") {
//     filmDisplay.innerHTML = "";
//     filmDisplay.appendChild(newContent);
//     return;
//   }

//   if (isAnimating) return;
//   isAnimating = true;

//   const oldContent = filmDisplay.querySelector('.film-slide');
//   newContent.style.position = "absolute";
//   newContent.style.top = 0;
//   newContent.style.width = "100%";
//   newContent.style.transition = "transform 0.5s ease";
//   oldContent.style.transition = "transform 0.5s ease";

//   // Posiziona il nuovo contenuto a destra o sinistra
//   newContent.style.transform = `translateX(${direction === "next" ? "100%" : "-100%"})`;
//   filmDisplay.appendChild(newContent);

//   // Forza reflow
//   void newContent.offsetWidth;

//   // Muove i due elementi
//   newContent.style.transform = "translateX(0)";
//   oldContent.style.transform = `translateX(${direction === "next" ? "-100%" : "100%"})`;

//   // Al termine dell'animazione
//   setTimeout(() => {
//     oldContent.remove();
//     newContent.style.position = "relative";
//     newContent.style.transition = "";
//     newContent.style.transform = "";
//     isAnimating = false;
//   }, 500);
// }

// // Navigazione slider con animazione
// document.getElementById('prevFilm').addEventListener('click', () => {
//   if (filteredFilms.length === 0) return;
//   const oldIndex = currentFilmIndex;
//   currentFilmIndex = (currentFilmIndex - 1 + filteredFilms.length) % filteredFilms.length;
//   renderFilm(currentFilmIndex, "prev");
// });
// document.getElementById('nextFilm').addEventListener('click', () => {
//   if (filteredFilms.length === 0) return;
//   const oldIndex = currentFilmIndex;
//   currentFilmIndex = (currentFilmIndex + 1) % filteredFilms.length;
//   renderFilm(currentFilmIndex, "next");
// });


// // Filtri
// function applyFilters() {
//   const dur = filterDuration.value;
//   const mood = filterMood.value;

//   filteredFilms = STORE.films.filter(f => 
//     (dur === "all" || f.duration === dur) &&
//     (mood === "all" || f.mood === mood)
//   );

//   currentFilmIndex = 0;
//   renderFilm(currentFilmIndex);
// }

// filterDuration.addEventListener('change', applyFilters);
// filterMood.addEventListener('change', applyFilters);

// // Render iniziale
// renderFilm(currentFilmIndex);

// --- Sezione Stile di vita ---
const stileButton = document.getElementById('stileButton');
const stileSanoText = document.getElementById('stileSanoText');
const stileInversoText = document.getElementById('stileInversoText');

function getRandomPair(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

stileButton.addEventListener('click', () => {
  const [sano, inverso] = getRandomPair(STORE.stile);

  stileSanoText.textContent = sano;
  stileInversoText.textContent = inverso;

  // Animazione semplice
  stileSanoText.classList.remove("show");
  stileInversoText.classList.remove("show");
  void stileSanoText.offsetWidth;
  void stileInversoText.offsetWidth;
  stileSanoText.classList.add("show");
  stileInversoText.classList.add("show");
});
// Chiamata iniziale
renderCoseDaFare();

const overlay = document.getElementById('passwordOverlay');
const input = document.getElementById('passwordInput');
const button = document.getElementById('passwordButton');
const message = document.getElementById('passwordMessage');

const correctPassword = '160319'; // modifica qui la password desiderata

button.addEventListener('click', () => {
    if(input.value === correctPassword){
      overlay.style.display = 'none';
    } else {
      message.textContent = 'Password errata, riprova con un abbraccio DDMMYY';
      input.value = '';
    }
});

input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') button.click();
});
let currentQuoteIndex = 0;
function getRandomIndex() {
  return Math.floor(Math.random() * STORE.quotes.length);
}
function showQuote(index) {
  const quote = STORE.quotes[index];
  if (!quote) return;

  const quoteText = document.getElementById('quoteText');
  const quoteSource = document.getElementById('quoteSource');

  quoteText.textContent = quote.citazione;
  quoteSource.textContent = quote.fonte;

  // Animazione semplice fade
  quoteText.classList.remove("show");
  quoteSource.classList.remove("show");
  void quoteText.offsetWidth;
  void quoteSource.offsetWidth;
  quoteText.classList.add("show");
  quoteSource.classList.add("show");
}

// Controlli slider
document.getElementById('prevQuote').addEventListener('click', () => {
  currentQuoteIndex = getRandomIndex();
  showQuote(currentQuoteIndex);
});

document.getElementById('nextQuote').addEventListener('click', () => {
  currentQuoteIndex = getRandomIndex();
  showQuote(currentQuoteIndex);
});

// Mostra la prima citazione
showQuote(currentQuoteIndex);

const btn = document.querySelector(".flirt");
const hoverlay = btn.querySelector(".hoverlay");

// 👇 IL TUO CODICE (intatto)
btn.addEventListener("mouseover", () => {
  const x = (Math.random() - 0.1) * 300;
  const y = (Math.random() - 0.1) * 200;
  btn.style.transform = `translate(${x}px, ${y}px)`;
});

// 👇 aggiunta click
btn.addEventListener("click", () => {
  hoverlay.style.opacity = "1";

  setTimeout(() => {
    hoverlay.style.opacity = "0";
  }, 2000);
});