// ==========================================
// 🚀 KONFIGURASI PUSAT URL API & STORAGE
// ==========================================

// 1. Alamat IP Utama Server Laravel Temanmu (Sesuaikan port-nya, biasanya 8000)
const IP_SERVER = "10.21.3.180:8000"; 

// 2. Base URL Otomatis untuk API dan File Storage
const API_BASE_URL = `http://${IP_SERVER}/api`;
const STORAGE_BASE_URL = `http://${IP_SERVER}/storage`;

// 3. Kumpulan Endpoint yang Siap Dipakai di Semua Halaman HTML
const API_ENDPOINTS = {
    pendaftaran: `${API_BASE_URL}/pendaftaran`,
    seleksi: `${API_BASE_URL}/seleksi`,
    notifikasi: `${API_BASE_URL}/notifikasi`, 
    cbtSession: `${API_BASE_URL}/cbt-session`,
    assignCbt: `${API_BASE_URL}/assign-cbt`,
    soal: `${API_BASE_URL}/soal` // 🟢 BERHASIL DITAMBAHKAN AMAN UNTUK INPUT DATA SOAL
};

// Log ke konsol browser untuk mempermudah kamu ngecek saat inspect element/F12
console.log("🌐 API Config Berhasil Dimuat!");
console.log("🔗 Base API URL:", API_BASE_URL);