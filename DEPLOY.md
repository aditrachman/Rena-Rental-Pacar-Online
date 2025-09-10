# 🚀 Quick Deploy Guide

## 1. Push ke GitHub (2 menit)
```bash
git init
git add .
git commit -m "Initial commit - CompanionRent website"
git branch -M main
git remote add origin https://github.com/USERNAME/companion-rent.git
git push -u origin main
```

## 2. Deploy ke Vercel (1 menit)
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Click "New Project"
4. Import repository "companion-rent"
5. Click "Deploy"

## 3. Setup WhatsApp (30 detik)
Ganti nomor di `src/app/booking/page.tsx` line 45:
```javascript
const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`
//                              ^^^^^^^^^^^^^ 
//                              Ganti dengan nomor admin
```

## 4. Tambah Talent Baru (1 menit)
Edit `data/talents.json`:
```json
{
  "id": 9,
  "name": "Nama Baru",
  "age": 24,
  "photo": "/images/nama-baru.jpg",
  "bio": "Deskripsi talent",
  "price": "200k",
  "duration": "per day",
  "rating": 4.8,
  "reviews": 50,
  "specialties": ["Event Type 1", "Event Type 2"],
  "availability": "Available",
  "category": "new",
  "joinDate": "2024-12-10",
  "location": "Jakarta",
  "languages": ["Indonesian", "English"],
  "verified": true
}
```

## 5. Upload Foto (Optional)
- Tambah foto ke folder `public/images/`
- Format: JPG/PNG, max 1MB
- Nama file sesuai dengan field "photo" di JSON

## ✅ DONE! Website Live dalam 5 menit!

### Features Ready:
- ✅ Filter system (All/Popular/New/Premium)
- ✅ Pagination (6 talents per page)
- ✅ WhatsApp booking integration
- ✅ Mobile responsive
- ✅ Professional design
- ✅ 100% gratis hosting

### Next Steps:
- Ganti nomor WhatsApp admin
- Tambah foto talent yang real
- Customize content sesuai kebutuhan
- Add Google Analytics (optional)