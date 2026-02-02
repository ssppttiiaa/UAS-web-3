# DApp Donasi Berbasis Blockchain (Sepolia)

Aplikasi web sederhana berbasis **Web3** yang mensimulasikan sistem donasi menggunakan teknologi **Blockchain Ethereum (Testnet Sepolia)**.  
Aplikasi ini menampilkan **riwayat donasi terpusat (backend)** dan **riwayat donasi terdesentralisasi (on-chain)** secara transparan.

##  Fitur Aplikasi

### Frontend (React.js)
- Menampilkan daftar riwayat donasi dari backend (REST API).
- Menampilkan riwayat donasi yang tercatat di blockchain.
- Menghubungkan aplikasi ke wallet **MetaMask** menggunakan **Ethers.js**.
- Menampilkan alamat wallet dan saldo ETH pengguna.
- Desain responsif menggunakan **CSS Flexbox**.
- Penanganan error saat wallet gagal terhubung.

### Backend (Node.js & Express.js)
- Menyediakan endpoint RESTful API:
- Endpoint mengembalikan data transaksi **dummy** dalam format JSON sebagai simulasi sistem terpusat.

### Integrasi Blockchain
- Menggunakan jaringan **Ethereum Testnet (Sepolia)**.
- Smart contract digunakan untuk mencatat donasi secara on-chain.
- Frontend membaca data donasi langsung dari smart contract (transparan & tidak dapat dimanipulasi).

##  Arsitektur Sistem

- **Backend** → simulasi sistem Web2 (data terpusat / dummy).
- **Blockchain** → sistem Web3 terdesentralisasi (data transparan).
- **Frontend** → penghubung antara user, backend, dan blockchain.

Donasi yang tercatat di blockchain **tidak otomatis masuk ke backend**, karena backend hanya digunakan sebagai simulasi sesuai ketentuan tugas.

## Teknologi yang Digunakan

- Frontend: React.js, Vite, Ethers.js
- Backend: Node.js, Express.js
- Blockchain: Ethereum Sepolia Testnet

## Cara Instalasi & Menjalankan Aplikasi

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
## cara menjalankan backend
cd backend
npm install
npm run dev
## backend akan berjalan di http://localhost:5000
## endpoint transaksi : GET http://localhost:5000/api/transactions
cara menjalankan frontend
## cd frontend
npm install
npm run dev
## frontend akan berjalan di http://localhost:5173
## Persyaratan Wallet
- Pastikan ekstensi MetaMask sudah terpasang di browser.
- Gunakan jaringan Sepolia Testnet.
- Pastikan wallet memiliki saldo ETH Sepolia (faucet).
## Catatan Penting
- Data backend bersifat dummy sesuai ketentuan tugas.
- Data blockchain bersifat real dan transparan.
- Web ini dibuat untuk keperluan pembelajaran Web3, bukan untuk produksi.

