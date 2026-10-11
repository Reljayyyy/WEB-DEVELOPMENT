import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

export default({ auth }) => {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="bg-[#F8FAFC] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
            <Head title="EduPulse - School Announcement & Dashboard Portal" />

            {/* TOP BULLETIN BANNER */}
            {showBanner && (
                <div className="bg-red-600 text-white px-4 py-2 text-xs sm:text-sm font-medium flex items-center justify-between shadow-inner">
                    <div className="flex items-center space-x-2 overflow-hidden">
                        <span className="bg-white/20 text-white uppercase text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">Bulletin</span>
                        <i className="fa-solid fa-bullhorn animate-bounce"></i>
                        <span className="truncate">Midterm Examination Schedule Released! Check your portals for room assignments and timetables.</span>
                    </div>
                    <button onClick={() => setShowBanner(false)} className="text-white/80 hover:text-white px-2 py-0.5 rounded transition">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )}

            {/* HERO / WELCOME VIEW */}
            <div className="flex-1 flex flex-col relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-rose-100">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute top-1/2 -right-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Header Navbar */}
                <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                            <i className="fa-solid fa-graduation-cap text-lg"></i>
                        </div>
                        <div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">EduPulse</span>
                            <span className="block text-[10px] text-red-600 font-semibold tracking-widest uppercase">Laravel Breeze Portal</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="text-sm font-semibold bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition">
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm font-semibold text-slate-600 hover:text-red-600 transition px-3 py-2">Log in</Link>
                                <Link href={route('register')} className="text-sm font-semibold bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md shadow-red-600/20 transition">Register</Link>
                            </>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <main className="flex-1 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 z-10">
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-red-100/80 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                            <i className="fa-solid fa-sparkles"></i>
                            <span>Next-Gen Academic Campus Hub</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight">
                            Empowering <span className="text-red-600">Education</span> Through Real-time Collaboration.
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Welcome to the centralized announcement board, live event RSVP schedule, grades management, and faculty portal. Log in to access your personalized campus dashboard.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-xl shadow-xl flex items-center space-x-2 transition">
                                    <span>Open My Dashboard</span>
                                    <i className="fa-solid fa-arrow-right text-sm"></i>
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-xl shadow-xl flex items-center space-x-2 transition">
                                        <span>Log In to Portal</span>
                                        <i className="fa-solid fa-arrow-right text-sm"></i>
                                    </Link>
                                    <Link href={route('register')} className="bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition">
                                        Register Account
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-xl space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm"><i className="fa-solid fa-newspaper"></i></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Latest Campus Notice</h4>
                                        <span className="text-xs text-slate-500">Posted by Dean's Office</span>
                                    </div>
                                </div>
                                <span className="bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full">Urgent</span>
                            </div>
                            <p className="text-slate-600 text-sm">
                                Enrollment for Summer Term 2026 begins next Monday. Please review your degree audit before advising appointments.
                            </p>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400">
                <p>EduPulse Academic Portal &copy; 2026. Powered by Laravel Breeze & React.</p>
            </footer>
        </div>
    );
};