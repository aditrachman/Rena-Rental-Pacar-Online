'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import talents from '../../../data/talents.json'

type Talent = {
    id: number
    name: string
    age: number
    photo: string
    bio: string
    price: string
    duration: string
    rating: number
    reviews: number
    specialties: string[]
    availability: string
    category: string
    joinDate: string
    location: string
    languages: string[]
    verified: boolean
}

export default function Booking() {
    const searchParams = useSearchParams()
    const talentId = searchParams.get('talent')
    const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        duration: '',
        location: '',
        eventType: '',
        specialRequests: ''
    })

    useEffect(() => {
        if (talentId) {
            const talent = talents.find(t => t.id === parseInt(talentId))
            if (talent) {
                setSelectedTalent(talent)
            }
        }
    }, [talentId])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `Halo Admin! Saya ingin booking companion:

📋 *BOOKING DETAILS*
👤 Talent: ${selectedTalent?.name}
📅 Tanggal: ${formData.date}
⏰ Waktu: ${formData.time}
⏱️ Durasi: ${formData.duration}
📍 Lokasi: ${formData.location}
🎉 Jenis Acara: ${formData.eventType}

👨‍💼 *CLIENT INFO*
📛 Nama: ${formData.name}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email}

💬 *SPECIAL REQUESTS*
${formData.specialRequests || 'Tidak ada'}

Mohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih!`

        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/62085183162312?text=${encodedMessage}`

        window.open(whatsappUrl, '_blank')
    }

    if (!selectedTalent) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Talent not found</h2>
                    <Link href="/" className="text-rose-600 hover:text-rose-700">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-pink-100/20 to-orange-100/30"></div>

            {/* Header */}
            <header className="relative z-50 bg-white/70 backdrop-blur-md border-b border-rose-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-lg">💕</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-800">
                                CompanionRent
                            </span>
                        </Link>
                        <Link href="/" className="flex items-center text-gray-700 hover:text-rose-600 transition-colors font-medium">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50">
                    {/* Selected Talent Info */}
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white">
                        <h1 className="text-3xl font-bold mb-4">Sewa {selectedTalent.name} Yuk!</h1>
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">👤</span>
                            </div>
                            <div>
                                <p className="text-lg opacity-90">{selectedTalent.bio}</p>
                                <p className="text-xl font-semibold mt-2">Rp {selectedTalent.price}/{selectedTalent.duration}</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6 relative z-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Info */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Event Type *
                                </label>
                                <select
                                    name="eventType"
                                    required
                                    value={formData.eventType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                >
                                    <option value="">Select event type</option>
                                    <option value="Dinner Date">Dinner Date</option>
                                    <option value="Business Event">Business Event</option>
                                    <option value="Social Event">Social Event</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Party">Party</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date *
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Time *
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Duration *
                                </label>
                                <select
                                    name="duration"
                                    required
                                    value={formData.duration}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                >
                                    <option value="">Select duration</option>
                                    <option value="2 hours">2 hours</option>
                                    <option value="4 hours">4 hours</option>
                                    <option value="6 hours">6 hours</option>
                                    <option value="Full day">Full day</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location *
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                    placeholder="Event location"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Special Requests
                            </label>
                            <textarea
                                name="specialRequests"
                                rows={4}
                                value={formData.specialRequests}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
                                placeholder="Any special requests or additional information..."
                            />
                        </div>

                        <div className="bg-rose-50 p-6 rounded-xl border border-rose-200">
                            <h3 className="font-semibold text-gray-900 mb-2">📱 Next Steps:</h3>
                            <p className="text-gray-600 text-sm">
                                After clicking "Send to WhatsApp", you'll be redirected to our admin WhatsApp with your booking details pre-filled.
                                Our admin will confirm availability and provide payment instructions.
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            📱 Send Booking to WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}