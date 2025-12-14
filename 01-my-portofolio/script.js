// --- 1. DATA STORE (Pakai CONST karena objectnya gak kita ganti-ganti isinya) ---
const myPortfolio = {
    nama: "Ahmad Zaky",
    umur: 19,
    status: "Mahasiswa TKJ Semester 3",
    asal: "Jakarta Selatan",
    kampus: "Universitas Indraprasta PGRI",
    
    // Data About Me
    aboutMe: {
        title: "Hi, I'm Ahmad Zaky. Tech Enthusiast & Learner.",
        desc: "Saya adalah mahasiswa semester 3 jurusan Teknik Komputer dan Jaringan (TKJ) di Universitas Indraprasta PGRI. Memiliki ketertarikan kuat pada infrastruktur jaringan dan dunia pengembangan web. Saat ini sedang fokus mendalami dasar-dasar JavaScript untuk membangun website yang interaktif, sambil terus mengeksplorasi teknologi baru di bidang IT."
    },

    // Data Projects
    projects: [
        { 
            title: "Website Perkenalan Diri", 
            status: "Selesai", 
            desc: "Website portofolio pertama saya menggunakan HTML, CSS, dan JS Dasar.",
            link: "index.html" 
        },
        { 
            title: "Project Berikutnya...", 
            status: "Segera Hadir", 
            desc: "Tunggu karya saya selanjutnya.",
            link: "#" 
        }
    ],

    // Data Sertifikat
    certificates: [
        {
            id: "01",
            name: "Sertifikat Dicoding",
            image: "sertifikat1.jpg", // Pastikan nama file bener
            color: "#ff6b6b" 
        },
        {
            id: "02",
            name: "Sertifikat Web",
            image: "cert-web.png", 
            color: "#feca57" 
        },
        {
            id: "03",
            name: "Sertifikat Jaringan",
            image: "cert-jaringan.jpg", 
            color: "#4facfe" 
        },
        {
            id: "04",
            name: "Sertifikat Desain",
            image: "cert-desain.jpg", 
            color: "#5f27cd" 
        }
    ]
};

// --- 2. FUNCTION: ISI BIODATA (Pakai CONST buat elemen) ---
function isiBiodata() {
    const elemenNama = document.getElementById('nama');
    const elemenUmur = document.getElementById('umur');
    const elemenStatus = document.getElementById('status');
    const elemenAsal = document.getElementById('asal');
    const elemenKampus = document.getElementById('kampus');

    if (elemenNama) elemenNama.innerHTML = myPortfolio.nama;
    if (elemenUmur) elemenUmur.innerHTML = myPortfolio.umur + " Tahun";
    if (elemenStatus) elemenStatus.innerHTML = myPortfolio.status;
    if (elemenAsal) elemenAsal.innerHTML = myPortfolio.asal;
    if (elemenKampus) elemenKampus.innerHTML = myPortfolio.kampus;
}

// --- 3. FUNCTION: ISI ABOUT ME ---
function isiAboutMe() {
    const judulAbout = document.getElementById('about-title');
    const deskripsiAbout = document.getElementById('about-desc');

    if (judulAbout) judulAbout.innerHTML = myPortfolio.aboutMe.title;
    if (deskripsiAbout) deskripsiAbout.innerHTML = myPortfolio.aboutMe.desc;
}

// --- 4. FUNCTION: RENDER PROJECT (OPTIMASI PERFORMA) ---
function tampilkanProject(data) {
    const container = document.getElementById('project-container');
    if (!container) return; 
    let content = ""; 

    data.forEach(function(p) {
        content += `
            <div class="card">
                <h3>${p.title}</h3>
                <p><strong>Status:</strong> ${p.status}</p>
                <p>${p.desc}</p>
                <a href="${p.link}" target="_blank">
                    Klik untuk melihat >>
                </a>
            </div>
        `;
    });
    container.innerHTML = content;
}

// --- 5. FUNCTION: RENDER SERTIFIKAT (OPTIMASI PERFORMA) ---
function tampilkanSertifikat() {
    const container = document.getElementById('certificate-container');
    if (!container) return; 
    let content = "";

    myPortfolio.certificates.forEach(function(cert) {
        content += `
            <div class="cert-card" style="background-color: ${cert.color}">
                <div class="cert-number">${cert.id}</div>
                <div class="cert-name">${cert.name}</div>
                <img src="${cert.image}" alt="${cert.name}">
            </div>
        `;
    });
    container.innerHTML = content;
}

// --- 6. SEARCH LOGIC ---
const tombolCari = document.getElementById('search-button');
const inputCari = document.getElementById('search-input');

if (tombolCari) { 
    tombolCari.addEventListener('click', function(event) {
        event.preventDefault(); 
        const keyword = inputCari.value.toLowerCase(); 
        
        const hasilPencarian = myPortfolio.projects.filter(function(p) {
            return p.title.toLowerCase().includes(keyword);
        });

        tampilkanProject(hasilPencarian);
    });
}
isiBiodata();
isiAboutMe();
tampilkanProject(myPortfolio.projects);
tampilkanSertifikat();
tampilkanProject(myPortfolio.projects);
tampilkanSertifikat();

// --- 8. ANIMASI SCROLL (INTERSECTION OBSERVER) 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element'); 
        }
    });
});
const hiddenElements = document.querySelectorAll('.card, .cert-card, .about-card, section h2, .hero-content');

hiddenElements.forEach((el) => {
    el.classList.add('hidden-element'); 
    observer.observe(el); 
});