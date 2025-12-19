// FUNGSI 1: Buka/Tutup Amplop (Animasi Awal)
function toggleAmplop() {
    const envelope = document.querySelector('.envelope');
    const hint = document.querySelector('.click-hint');
    
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        if(hint) hint.style.opacity = '0';
    } else {
        if(hint) hint.style.opacity = '1';
    }
}

// FUNGSI 2: Transisi ke Halaman Utama
function bukaUndangan(event) {
    event.stopPropagation(); // Mencegah amplop menutup lagi

    const landingContainer = document.getElementById('landing-container');
    const mainPage = document.getElementById('main-page');

    landingContainer.classList.add('fade-out');

    setTimeout(() => {
        landingContainer.style.display = 'none';
        
        mainPage.style.display = 'block';
        mainPage.classList.add('fade-in');
        
        // Aktifkan scroll body
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
        document.body.style.display = 'block';
    }, 1000);
}

// FUNGSI 3: Logika Countdown Timer
// Target: 14 Desember 2026 (Format: Tahun, Bulan-1, Tanggal, Jam)
const weddingDate = new Date(2026, 11, 14, 8, 0, 0).getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// FUNGSI 4: Fitur Tombol Donasi & Copy Rekening
function toggleGift() {
    const bankDetails = document.getElementById('bank-details');
    if (bankDetails.style.display === 'none') {
        bankDetails.style.display = 'block';
    } else {
        bankDetails.style.display = 'none';
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor Rekening Berhasil Disalin!");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}