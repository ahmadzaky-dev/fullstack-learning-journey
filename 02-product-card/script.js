let quantity = 1; 
const btnTambah = document.getElementById('btn-tambah');
const btnKurang = document.getElementById('btn-kurang');
const angkaJumlah = document.getElementById('angka-jumlah'); 
const totalHargaElemen = document.getElementById('total-harga');
const hargaSatuan = 190000;

if (!btnTambah || !btnKurang || !angkaJumlah) {
    console.error("elemen html tidak ditemukan.");
} else {
    console.log("javascript berhasil dihubungkan");
}
function updateTampilan() {
    angkaJumlah.innerText = quantity;
    let total = quantity * hargaSatuan;
    totalHargaElemen.innerText = "Rp " + total.toLocaleString('id-ID');
}
btnTambah.addEventListener('click', function() {
    quantity++;
    updateTampilan(); 
    console.log("Ditambah jadi: " + quantity);
});

btnKurang.addEventListener('click', function() {
    if (quantity > 1) {
        quantity--;
        updateTampilan();
    } else {
        alert("Minimal beli 1");
    }
});
