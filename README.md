# 💕 Rena - Sewa Pacar Online Terbaik

> Platform sewa pacar terpercaya #1 di Indonesia! Cari pacar cantik buat acara penting? Rena solusinya! 😍


## 🌟 Kenapa Pilih Rena?

- **🛡️ 100% Aman & Terpercaya** - Semua cewek udah diverifikasi
- **⭐ Kualitas Premium** - Cewek cantik dengan skill komunikasi top
- **📱 Booking Gampang** - Tinggal pilih, isi form, langsung ke WhatsApp
- **🌟 Rating Tinggi** - Customer satisfaction 4.9/5 bintang
- **🔒 Privasi Terjaga** - Data aman, pelayanan diskret
- **💬 Support 24/7** - Tim siap bantu kapan aja

## 🚀 Fitur Unggulan

### 🎯 Filter Cewek Cantik
- **Semua Cewek** - Lihat semua pilihan (50+ cewek)
- **Populer** - Cewek paling laris berdasarkan review
- **Baru** - Cewek baru yang fresh join
- **Premium** - Cewek kelas atas untuk acara special

### 📱 Sistem Booking Modern
- Form booking yang user-friendly
- Integrasi langsung ke WhatsApp admin
- Konfirmasi real-time
- Payment instruction yang jelas

### 💎 Talent Berkualitas
- Verified & background check
- Rating & review system
- Multi-language support
- Berbagai specialties (dinner date, business event, dll)

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Styling:** Modern glassmorphism design
- **Data:** JSON-based (mudah di-manage)
- **Integration:** WhatsApp API
- **Hosting:** Vercel (100% gratis)

## 📁 Struktur Project

```
rena/
├── src/app/
│   ├── page.tsx          # Homepage dengan filter & testimoni
│   ├── booking/          # Form booking ke WhatsApp
│   └── rules/            # Aturan main & pricing
├── data/
│   ├── talents.json      # Data cewek-cewek cantik
│   └── booking-rules.json # Rules & pricing
└── public/images/        # Foto-foto talent
```

## 🎨 Design Highlights

### Modern & Responsive
- **Glassmorphism effects** - Backdrop blur yang elegan
- **Gradient animations** - Warna-warna yang eye-catching
- **Micro-interactions** - Hover effects yang smooth
- **Mobile-first** - Perfect di semua device

### Indonesian Vibes
- **Bahasa santai** - Komunikasi yang friendly & relatable
- **Local context** - Sesuai kultur Indonesia
- **Warm colors** - Rose, pink, orange yang hangat
- **Emoji integration** - Bikin tampilan lebih fun

## 📱 Cara Tambah Cewek Baru

1. **Edit `data/talents.json`:**
```json
{
  "id": 9,
  "name": "Sinta",
  "age": 22,
  "photo": "/images/sinta.jpg",
  "bio": "Cewek manis yang suka traveling dan kuliner",
  "price": "180k",
  "duration": "per day",
  "rating": 4.7,
  "reviews": 25,
  "specialties": ["Travel", "Kuliner", "Shopping"],
  "availability": "Available",
  "category": "new",
  "joinDate": "2024-12-10",
  "location": "Bandung",
  "languages": ["Indonesian", "English"],
  "verified": true
}
```

2. **Upload foto ke `public/images/`**
3. **Push ke GitHub → Auto deploy!**

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/username/rena.git
cd rena

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

## 📞 WhatsApp Integration

Ganti nomor admin di `src/app/booking/page.tsx`:
```javascript
const whatsappUrl = `https://wa.me/62085183162312?text=${encodedMessage}`
//                              ^^^^^^^^^^^^^ 
//                              Nomor WhatsApp admin
```

Format pesan otomatis:
```
Halo Admin! Saya ingin booking companion:

📋 BOOKING DETAILS
👤 Talent: Sarah
📅 Tanggal: 2024-12-25
⏰ Waktu: 19:00
⏱️ Durasi: 4 hours
📍 Lokasi: Jakarta
🎉 Jenis Acara: Dinner Date

👨‍💼 CLIENT INFO
📛 Nama: Budi Santoso
📱 Phone: 08123456789
📧 Email: budi@email.com

💬 SPECIAL REQUESTS
Tidak ada

Mohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih!
```

## 🎯 Deployment

### Vercel (Recommended)
1. Push ke GitHub
2. Connect ke Vercel
3. Deploy otomatis
4. Custom domain gratis

### Netlify Alternative
1. Drag & drop build folder
2. Configure redirects
3. Deploy instant

## 💰 Pricing Model

| Durasi | Harga | Cocok Buat |
|--------|-------|------------|
| 2 Jam | Mulai 150k | Dinner date |
| 4 Jam | Mulai 250k | Party/event |
| 6 Jam | Mulai 350k | Wedding |
| Full Day | Mulai 500k | Trip/travel |

## 📊 Analytics & Metrics

- **50+ Cewek Cantik** tersedia
- **1000+ Cowok Bahagia** sudah merasakan
- **4.9/5 Rating** customer satisfaction
- **24/7 Support** always available

## 🔒 Security & Privacy

- Background check semua talent
- Data encryption
- Secure payment gateway
- Diskret service
- Privacy policy compliant

## 🤝 Contributing

Mau kontribusi? Silakan!

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - Feel free to use for personal/commercial projects

## 📞 Support

Butuh bantuan? Kontak kita:

- **WhatsApp:** +62 851-8316-2312
- **Email:** hello@rena.id
- **Website:** https://rena.vercel.app

---

<div align="center">

**Made with 💕 by Rena Team**

*Sewa Pacar Online Terbaik di Indonesia*

[🌐 Website](https://rena.vercel.app) • [📱 WhatsApp](https://wa.me/62085183162312) • [📧 Email](mailto:hello@rena.id)

</div>
