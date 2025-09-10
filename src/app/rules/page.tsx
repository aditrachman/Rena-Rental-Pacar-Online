'use client'

import Link from 'next/link'
import rules from '../../../data/booking-rules.json'
export default function Rules() {
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Booking Rules & Guidelines
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Please read our terms and conditions before making a booking
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* General Rules */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="text-3xl mr-3">📋</span>
                            General Rules
                        </h2>
                        <div className="space-y-4">
                            {rules.generalRules.map((rule: any, index: number) => (
                                <div key={index} className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                                    <h3 className="font-semibold text-gray-800 mb-2">{rule.title}</h3>
                                    <p className="text-gray-600 text-sm">{rule.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Process */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="text-3xl mr-3">🔄</span>
                            Booking Process
                        </h2>
                        <div className="space-y-4">
                            {rules.bookingProcess.map((process: any, index: number) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {process.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-1">{process.title}</h3>
                                        <p className="text-gray-600 text-sm">{process.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="text-3xl mr-3">💰</span>
                        Pricing & Terms
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {rules.pricing.map((rate: any, index: number) => (
                            <div key={index} className="text-center p-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl border border-rose-200">
                                <h3 className="font-bold text-gray-800 text-lg mb-2">{rate.duration}</h3>
                                <p className="text-rose-600 font-semibold text-xl mb-3">{rate.price}</p>
                                <p className="text-gray-600 text-sm">{rate.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Additional Fees */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Fees</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {rules.additionalFees.map((fee: any, index: number) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-1">{fee.service}</h4>
                                <p className="text-rose-600 font-semibold mb-2">{fee.fee}</p>
                                <p className="text-gray-600 text-sm">{fee.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Start Booking Now
                        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}