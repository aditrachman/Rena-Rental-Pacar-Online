'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import talents from '../../data/talents.json'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const talentsPerPage = 6

  // Filter talents based on active filter
  const filteredTalents = useMemo(() => {
    switch (activeFilter) {
      case 'popular':
        return talents.filter(t => t.category === 'popular').sort((a, b) => b.reviews - a.reviews)
      case 'new':
        return talents.filter(t => t.category === 'new').sort((a, b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime())
      case 'premium':
        return talents.filter(t => t.category === 'premium').sort((a, b) => parseInt(b.price.replace('k', '')) - parseInt(a.price.replace('k', '')))
      default:
        return talents.sort((a, b) => b.rating - a.rating)
    }
  }, [activeFilter])

  // Pagination
  const totalPages = Math.ceil(filteredTalents.length / talentsPerPage)
  const startIndex = (currentPage - 1) * talentsPerPage
  const currentTalents = filteredTalents.slice(startIndex, startIndex + talentsPerPage)

  const filterButtons = [
    { key: 'all', label: 'Semua Cewek', icon: '👥', count: talents.length },
    { key: 'popular', label: 'Populer', icon: '🔥', count: talents.filter(t => t.category === 'popular').length },
    { key: 'new', label: 'Baru', icon: '✨', count: talents.filter(t => t.category === 'new').length },
    { key: 'premium', label: 'Premium', icon: '💎', count: talents.filter(t => t.category === 'premium').length }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-pink-100/30 to-orange-100/40"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-t from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-rose-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-rose-100/60 sticky top-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">💕</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
                  Rena
                </h1>
                <p className="text-sm text-gray-600 font-semibold">Sewa Pacar Online Terbaik ✨</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#talents" className="text-gray-700 hover:text-rose-600 transition-all duration-300 font-semibold relative group">
                Cewek Cantik
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-rose-600 transition-all duration-300 font-semibold relative group">
                Kenapa Rena?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/rules" className="text-gray-700 hover:text-rose-600 transition-all duration-300 font-semibold relative group">
                Aturan Main
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-rose-600 transition-all duration-300 font-semibold relative group">
                Kontak
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#talents" className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Sewa Sekarang</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-3 rounded-2xl bg-white/60 hover:bg-white/80 transition-colors shadow-lg">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-200 rounded-full mb-10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <span className="text-3xl mr-4 group-hover:animate-bounce">🌟</span>
            <span className="text-rose-800 font-bold text-lg">Platform Sewa Pacar #1 di Indonesia</span>
            <span className="ml-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold rounded-full animate-pulse">TERPERCAYA</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-10 leading-tight">
            Cari Pacar
            <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent mt-4 relative">
              Cantik & Asik?
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-60"></div>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            Mau punya pacar cantik buat acara penting?
            <span className="block mt-3 font-bold text-gray-800">Di Rena, semua cewek cantik, asik, dan profesional! 😍</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Link
              href="#talents"
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-xl rounded-3xl hover:shadow-2xl hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Lihat Cewek Cantik</span>
              <svg className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center px-12 py-6 bg-white/80 backdrop-blur-sm text-gray-700 font-bold text-xl rounded-3xl border-3 border-gray-200 hover:border-rose-300 hover:text-rose-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Kenapa Pilih Rena?
              <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '50+', label: 'Cewek Cantik', icon: '�', color: 'from - rose - 500 to- pink - 500' },
              { number: '1000+', label: 'Cowok Bahagia', icon: '😊', color: 'from-blue-500 to-cyan-500' },
              { number: '4.9', label: 'Rating Bintang', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
              { number: '24/7', label: 'Siap Melayani', icon: '🕐', color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce shadow-lg`}>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-800 mb-3">{stat.number}</div>
                <div className="text-gray-600 font-bold text-base md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talents Section */}
      <section id="talents" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-8">
              Cewek-Cewek Cantik Rena
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-medium">
              Pilih pacar impianmu! Semua cewek di sini cantik, asik, dan siap nemenin kamu kapan aja 💕
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {filterButtons.map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setActiveFilter(filter.key)
                  setCurrentPage(1)
                }}
                className={`inline-flex items-center px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === filter.key
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-2xl scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-rose-300 hover:text-rose-600 hover:shadow-xl'
                  }`}
              >
                <span className="text-2xl mr-3">{filter.icon}</span>
                {filter.label}
                <span className={`ml-3 px-3 py-1 text-sm font-bold rounded-full ${activeFilter === filter.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
                  }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Talents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {currentTalents.map((talent, index) => (
              <div key={talent.id} className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 border-2 border-white/60 hover:border-rose-200">
                <div className="relative h-96 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                    {/* Enhanced background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400/40 to-pink-400/40 group-hover:from-rose-500/50 group-hover:to-pink-500/50 transition-all duration-500"></div>

                    {/* Profile placeholder */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:animate-bounce">
                        <span className="text-6xl">👸</span>
                      </div>
                      <span className="text-gray-700 font-bold bg-white/90 px-6 py-3 rounded-full shadow-xl text-lg">
                        Foto Segera Hadir
                      </span>
                    </div>
                  </div>

                  {/* Enhanced badges */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm shadow-xl border-2 ${talent.availability === 'Available'
                      ? 'bg-green-100/90 text-green-800 border-green-200'
                      : 'bg-red-100/90 text-red-800 border-red-200'
                      }`}>
                      {talent.availability === 'Available' ? '✅ Siap Kencan' : '❌ Lagi Sibuk'}
                    </div>
                    {talent.verified && (
                      <div className="px-4 py-2 bg-blue-100/90 text-blue-800 text-sm font-bold rounded-full backdrop-blur-sm border-2 border-blue-200 shadow-xl">
                        ✓ Terverifikasi
                      </div>
                    )}
                  </div>

                  {/* Category badges */}
                  {talent.category === 'popular' && (
                    <div className="absolute top-6 left-6 px-4 py-2 bg-orange-100/90 text-orange-800 text-sm font-bold rounded-full backdrop-blur-sm border-2 border-orange-200 shadow-xl">
                      🔥 Paling Laris
                    </div>
                  )}
                  {talent.category === 'new' && (
                    <div className="absolute top-6 left-6 px-4 py-2 bg-green-100/90 text-green-800 text-sm font-bold rounded-full backdrop-blur-sm border-2 border-green-200 shadow-xl">
                      ✨ Cewek Baru
                    </div>
                  )}
                  {talent.category === 'premium' && (
                    <div className="absolute top-6 left-6 px-4 py-2 bg-purple-100/90 text-purple-800 text-sm font-bold rounded-full backdrop-blur-sm border-2 border-purple-200 shadow-xl">
                      💎 Premium
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                        {talent.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-full font-semibold">
                          {talent.age} tahun
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-full font-semibold">
                          📍 {talent.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-base leading-relaxed font-medium">{talent.bio}</p>

                  {/* Enhanced rating */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-xl mr-3">
                        {'★'.repeat(Math.floor(talent.rating))}
                        {talent.rating % 1 !== 0 && '☆'}
                      </div>
                      <span className="font-black text-gray-800 text-lg">{talent.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-md font-semibold">
                      {talent.reviews} review
                    </span>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Bisa Ngomong:</p>
                    <div className="flex flex-wrap gap-2">
                      {talent.languages.map((lang, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Cocok Buat:</p>
                    <div className="flex flex-wrap gap-2">
                      {talent.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 text-sm font-semibold rounded-full border-2 border-rose-200">
                          {specialty}
                        </span>
                      ))}
                      {talent.specialties.length > 2 && (
                        <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full border border-gray-200">
                          +{talent.specialties.length - 2} lagi
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 pt-6 border-t-2 border-gray-100">
                    <div className="text-center sm:text-left">
                      <div className="flex items-baseline justify-center sm:justify-start">
                        <span className="text-2xl font-black text-gray-800">Rp {talent.price}</span>
                        <span className="text-gray-500 ml-2 text-lg font-semibold">/{talent.duration}</span>
                      </div>
                      <span className="text-sm text-gray-400 font-medium">Harga mulai dari</span>
                    </div>

                    {talent.availability === 'Available' ? (
                      <Link
                        href={`/booking?talent=${talent.id}`}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-lg text-center rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                      >
                        <span className="relative z-10">Sewa Sekarang</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    ) : (
                      <button className="w-full sm:w-auto px-8 py-4 bg-gray-200 text-gray-500 font-bold text-lg rounded-2xl cursor-not-allowed">
                        Lagi Ga Available
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl font-semibold text-gray-700 hover:bg-rose-50 hover:border-rose-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                Sebelumnya
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-5 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${currentPage === page
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl'
                    : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 hover:bg-rose-50 hover:border-rose-300'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl font-semibold text-gray-700 hover:bg-rose-50 hover:border-rose-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                Selanjutnya
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-black text-gray-800 mb-8">
              Kata Cowok-Cowok Bahagia
            </h3>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Mereka udah ngerasain serunya punya pacar cantik dari Rena. Sekarang giliran kamu! 😎
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Budi Santoso",
                role: "Pengusaha Muda",
                rating: 5,
                text: "Gila sih, Sarah cantik banget dan asik diajak ngobrol! Acara kantor jadi berkesan banget. Recommended!",
                talent: "Sarah"
              },
              {
                name: "Andi Wijaya",
                role: "Content Creator",
                rating: 5,
                text: "Maya orangnya profesional banget, cocok buat acara formal. Temen-temen pada iri lihat pacar gue hehe",
                talent: "Maya"
              },
              {
                name: "Doni Pratama",
                role: "Mahasiswa",
                rating: 5,
                text: "Pelayanannya top! Booking gampang, ceweknya cantik, harga juga masuk akal. Bakal sewa lagi pasti!",
                talent: "Kira"
              },
              {
                name: "Eko Saputra",
                role: "Dokter Muda",
                rating: 5,
                text: "Bella asik banget orangnya! Ga canggung sama sekali, kayak udah kenal lama. Thanks Rena!",
                talent: "Bella"
              },
              {
                name: "Fajar Nugroho",
                role: "Programmer",
                rating: 5,
                text: "Aman dan terpercaya! Diana profesional banget, cocok buat acara keluarga. Ortu gue juga suka!",
                talent: "Diana"
              },
              {
                name: "Gilang Ramadhan",
                role: "Marketing",
                rating: 5,
                text: "Kualitas pelayanan juara! Ceweknya cantik, sopan, dan tau etika. Worth it banget deh!",
                talent: "Sarah"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-white/60 hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-4 shadow-xl group-hover:animate-bounce">
                    <span className="text-white font-bold text-2xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-semibold">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-6 text-xl">
                  {'★'.repeat(testimonial.rating)}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">"{testimonial.text}"</p>

                <div className="text-sm text-gray-500 bg-rose-50 px-4 py-2 rounded-full inline-block border border-rose-200">
                  Sewa: <span className="font-bold text-rose-600">{testimonial.talent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-8">
              Kenapa Harus Pilih Rena?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-medium">
              Rena bukan cuma platform biasa. Kita kasih yang terbaik buat kamu! 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: '🛡️',
                title: '100% Aman & Terpercaya',
                description: 'Semua cewek udah diverifikasi dan background check. Kamu ga perlu khawatir, semuanya aman!',
                gradient: 'from-rose-500 to-pink-500'
              },
              {
                icon: '⭐',
                title: 'Kualitas Premium',
                description: 'Cewek-cewek cantik dengan skill komunikasi top! Cocok buat acara apapun, dijamin ga malu-maluin.',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                icon: '📱',
                title: 'Booking Gampang Banget',
                description: 'Tinggal pilih cewek, isi form, langsung ke WhatsApp admin. Ga ribet, ga pake lama!',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🌟',
                title: 'Rating Selalu Tinggi',
                description: 'Customer satisfaction kita selalu 4.9/5! Bukti kalau pelayanan Rena emang juara.',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '🔒',
                title: 'Privasi Terjaga',
                description: 'Data kamu aman, pelayanan diskret. Ga ada yang tau kecuali kamu dan ceweknya.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '💬',
                title: 'Support 24/7',
                description: 'Ada masalah? Tim kita siap bantu kapan aja! Chat aja langsung, pasti direspon cepet.',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group p-10 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h4 className="text-2xl font-black text-gray-800 mb-6 text-center">{feature.title}</h4>
                <p className="text-gray-600 text-center leading-relaxed font-medium text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-10">
            Siap Punya Pacar Cantik?
          </h3>
          <p className="text-lg md:text-xl text-rose-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Jangan tunggu lagi! Pilih cewek cantik impianmu sekarang juga. Dijamin ga nyesel! 😍
          </p>
          <Link
            href="#talents"
            className="inline-flex items-center px-12 py-6 bg-white text-rose-600 font-black text-2xl rounded-3xl hover:bg-gray-50 hover:shadow-2xl hover:scale-110 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">Mulai Sewa Sekarang</span>
            <svg className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-3xl">💕</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                    Rena
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold">Sewa Pacar Online Terbaik</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg font-medium">
                Platform sewa pacar terpercaya di Indonesia. Udah 1000+ cowok bahagia dengan pelayanan kita!
                Kamu kapan? 😉
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: '📱', label: 'WhatsApp' },
                  { icon: '📧', label: 'Email' },
                  { icon: '💬', label: 'Telegram' },
                  { icon: '📍', label: 'Lokasi' }
                ].map((social, index) => (
                  <a key={index} href="#" className="w-14 h-14 bg-gray-800 hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group">
                    <span className="text-2xl group-hover:animate-bounce">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-black mb-8 text-white">Menu Cepat</h4>
              <ul className="space-y-4">
                {['Cewek Cantik', 'Kenapa Rena?', 'Aturan Main', 'Harga', 'Tentang Kita', 'Blog'].map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300 flex items-center group font-medium text-lg">
                      <span className="w-0 group-hover:w-3 h-0.5 bg-rose-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-black mb-8 text-white">Kontak Kita</h4>
              <ul className="space-y-6">
                {[
                  { icon: '📱', text: '+62 851-8316-2312', label: 'WhatsApp' },
                  { icon: '📧', text: 'hello@rena.id', label: 'Email' },
                  { icon: '📍', text: 'Jakarta, Indonesia', label: 'Lokasi' },
                  { icon: '⏰', text: 'Siap Melayani 24/7', label: 'Waktu' }
                ].map((contact, index) => (
                  <li key={index} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                    <span className="mr-4 text-2xl group-hover:animate-bounce">{contact.icon}</span>
                    <div>
                      <p className="font-bold text-lg">{contact.text}</p>
                      <p className="text-sm text-gray-500">{contact.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-10 text-center">
            <p className="text-gray-400 text-lg font-medium">
              © 2024 Rena - Sewa Pacar Online Terbaik. Semua hak dilindungi. |
              <Link href="#" className="hover:text-rose-400 transition-colors ml-2 font-semibold">Kebijakan Privasi</Link> |
              <Link href="#" className="hover:text-rose-400 transition-colors ml-2 font-semibold">Syarat & Ketentuan</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}