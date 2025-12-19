// 1. DATA STORE
const myPortfolio = {
    nama: "Ahmad Zaky",
    umur: 19,
    status: "Mahasiswa Teknik Informatika Semester 3",
    asal: "Jakarta Selatan",
    kampus: "Universitas Indraprasta PGRI",
    
    aboutMe: {
        title: "Hi, I'm Ahmad Zaky. Tech Enthusiast & Learner.",
        desc: "Saya adalah mahasiswa semester 3 jurusan Teknik Informatika di Universitas Indraprasta PGRI. Memiliki ketertarikan kuat di dunia pengembangan web. Saat ini sedang fokus mendalami dasar-dasar JavaScript untuk membangun website yang interaktif, sambil terus mengeksplorasi teknologi baru di bidang IT."
    },

    skills: [
        { name: "HTML", icon: "fab fa-html5", color: "#e34c26" },
        { name: "CSS", icon: "fab fa-css3-alt", color: "#264de4" },
        { name: "JavaScript", icon: "fab fa-js", color: "#f0db4f" }
    ],

    projects: [
        { 
            title: "Website Perkenalan Diri", 
            status: "Selesai", 
            desc: "Portofolio pertama dengan HTML, CSS, JS.",
            link: "index.html",
            image: "project1.png" 
        },
        { 
            title: "Wedding Website", 
            status: "Selesai", 
            desc: "Undangan interaktif dengan animasi amplop.",
            link: "#",
            image: "project2.png"
        }
    ],

    certificates: [
        { id: "01", name: "Sertifikat Lsp", image: "sertifikat4.jpg", color: "#ff6b6b" },
        { id: "02", name: "Sertifikat Pkl", image: "sertifikat2.jpg", color: "#feca57" },
        { id: "03", name: "Sertifikat Pkl", image: "sertifikat3.jpg", color: "#4facfe" },
    ]
};

// 2. BIODATA SECTION
function isiBiodata() {
    const ids = ['nama', 'umur', 'status', 'asal', 'kampus'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'umur') el.innerHTML = myPortfolio[id] + " Tahun";
            else el.innerHTML = myPortfolio[id];
        }
    });
}

// 3. ABOUT ME SECTION
function isiAboutMe() {
    const descElement = document.getElementById('about-desc');
    const roleElement = document.getElementById('dynamic-role');
    
    // Typing Effect: Deskripsi
    if (descElement) {
        const textDeskripsi = myPortfolio.aboutMe.desc;
        let i = 0;
        descElement.innerHTML = "";
        
        function typeDesc() {
            if (i < textDeskripsi.length) {
                descElement.innerHTML += textDeskripsi.charAt(i);
                i++;
                setTimeout(typeDesc, 15);
            }
        }
        typeDesc(); 
    }

    // Typing Effect: Role Loop
    if (roleElement) {
        const roles = ["Network Engineer", "Web Developer", "Frontend Enthusiast"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeRole() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                roleElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                roleElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed = 50;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex++;
                if (roleIndex === roles.length) roleIndex = 0;
            }

            setTimeout(typeRole, typeSpeed);
        }
        typeRole();
    }
}

// 4. SKILLS SECTION
function tampilkanSkills() {
    const container = document.getElementById('skill-container');
    if (!container) return;
    let content = "";
    myPortfolio.skills.forEach(skill => {
        content += `
            <div class="skill-card" style="border-color: ${skill.color}">
                <div class="skill-icon" style="color: ${skill.color}">
                    <i class="${skill.icon}"></i>
                </div>
                <h3>${skill.name}</h3>
            </div>`;
    });
    container.innerHTML = content;
}

// 5. PROJECTS SECTION
function tampilkanProject(data) {
    const container = document.getElementById('project-container');
    if (!container) return; 
    let content = ""; 

    data.forEach(function(p) {
        content += `
            <div class="book-card">
                <div class="book-inner">
                    <div class="book-front">
                        <h3>${p.title}</h3>
                        <p class="status">Status: ${p.status}</p>
                        <p class="desc">${p.desc}</p>
                        <div class="tap-hint">👇 Klik / Hover untuk buka</div>
                    </div>
                    <div class="book-back">
                        <img src="${p.image}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
                        <a href="${p.link}" target="_blank" class="btn-lihat">Lihat Website</a>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = content;
}

// 6. CERTIFICATES SECTION
function tampilkanSertifikat() {
    const container = document.getElementById('certificate-container');
    if (!container) return; 
    let content = "";
    myPortfolio.certificates.forEach(function(cert) {
        content += `
            <div class="cert-card" style="background-color: ${cert.color}">
                <div class="cert-number">${cert.id}</div>
                <div class="cert-name">${cert.name}</div>
                <img src="${cert.image}" alt="${cert.name}" onerror="this.style.display='none'">
            </div>`;
    });
    container.innerHTML = content;
}

// 7. SEARCH LOGIC
const tombolCari = document.getElementById('search-button');
const inputCari = document.getElementById('search-input');
if (tombolCari) { 
    tombolCari.addEventListener('click', function(event) {
        event.preventDefault(); 
        const keyword = inputCari.value.toLowerCase(); 
        const hasil = myPortfolio.projects.filter(p => p.title.toLowerCase().includes(keyword));
        tampilkanProject(hasil);
    });
}

// 8. MAIN EXECUTION
isiBiodata();
isiAboutMe();
tampilkanSkills();
tampilkanProject(myPortfolio.projects);
tampilkanSertifikat();

// 9. SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element'); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.book-card, .cert-card, .about-card, section h2, .hero-content, .skill-card');
hiddenElements.forEach((el) => {
    el.classList.add('hidden-element'); 
    observer.observe(el); 
});

// 10. 3D TILT EFFECT
setTimeout(() => {
    const cards = document.querySelectorAll('.book-card');

    cards.forEach(card => {
        const inner = card.querySelector('.book-inner');
        let isFlipped = false;

        card.addEventListener('mousemove', (e) => {
            if (isFlipped) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / 10; 
            const rotateY = (x - centerX) / 10;

            inner.style.transition = 'transform 0.1s ease';
            inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            if (isFlipped) return;

            inner.style.transition = 'transform 0.5s ease';
            inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
        
        card.addEventListener('click', () => {
            inner.style.transition = 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            if (isFlipped) {
                inner.style.transform = `perspective(1000px) rotateY(0deg)`;
                isFlipped = false;
            } else {
                inner.style.transform = `perspective(1000px) rotateY(180deg)`;
                isFlipped = true;
            }
        });
    });
}, 1000);