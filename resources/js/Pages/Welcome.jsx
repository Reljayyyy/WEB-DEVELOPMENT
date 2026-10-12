import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="CampusHub - Student Portal & Resources" />

            <div className="min-h-screen bg-gradient-to-br from-indigo-50/60 via-teal-50/30 to-slate-50 text-slate-800 font-sans antialiased">
                {/* Top Announcement Bar */}
                <div className="bg-indigo-600 text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center shadow-inner">
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="bg-white/20 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
                                ANNOUNCEMENT
                            </span>
                            <span className="truncate">
                                Midterm Examination Schedule Released! Check your portals for room assignments and timetables.
                            </span>
                        </div>
                        <button className="text-white/80 hover:text-white text-lg font-bold ml-4">&times;</button>
                    </div>
                </div>

                {/* Header / Navigation */}
                <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    {/* Brand Logo & Title */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md shadow-indigo-200">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">CampusHub</h1>
                            <p className="text-[10px] font-bold text-teal-600 tracking-widest uppercase mt-1">
                                Student & Faculty Portal
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition px-3 py-2"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-indigo-200 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-6 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Hero Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full border border-teal-200/60">
                            Centralized Student Platform
                        </span>

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                            Streamlining <span className="text-teal-600">Campus Life</span> Through Connected Learning.
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                            Welcome to the centralized announcement board, live event RSVP schedule, grades management, and faculty portal. Log in to access your personalized campus dashboard.
                        </p>

                        <div className="flex items-center space-x-4 pt-2">
                            <Link
                                href={route('login')}
                                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-xl shadow flex items-center space-x-2 transition"
                            >
                                <span>Log In to Portal</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </Link>

                            <Link
                                href={route('register')}
                                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-6 py-3 rounded-xl shadow-sm transition"
                            >
                                Register Account
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Three Announcement Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        {/* Notice Card 1 */}
                        <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-lg shadow-indigo-100/50 space-y-2">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-lg">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-sm">Latest Campus Notice</h3>
                                        <p className="text-xs text-slate-500">Posted by Dean's Office</p>
                                    </div>
                                </div>
                                <span className="bg-amber-50 text-amber-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-amber-200/50">
                                    Important
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed pt-1">
                                Enrollment for Summer Term 2026 begins next Monday. Please review your degree audit before advising appointments.
                            </p>
                        </div>

                        {/* Notice Card 2 */}
                        <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-lg shadow-indigo-100/50 space-y-2">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-teal-50 text-teal-600 p-2.5 rounded-lg">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-sm">Library System Maintenance</h3>
                                        <p className="text-xs text-slate-500">Posted by IT Services</p>
                                    </div>
                                </div>
                                <span className="bg-emerald-50 text-emerald-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-emerald-200/50">
                                    Scheduled
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed pt-1">
                                The online research portal and digital catalog will undergo scheduled maintenance this Saturday from 10:00 PM to 2:00 AM.
                            </p>
                        </div>

                        {/* Notice Card 3 (NEW) */}
                        <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-lg shadow-indigo-100/50 space-y-2">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-lg">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-sm">Annual Tech Symposium RSVP</h3>
                                        <p className="text-xs text-slate-500">Posted by Student Affairs</p>
                                    </div>
                                </div>
                                <span className="bg-purple-50 text-purple-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-purple-200/50">
                                    Event
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed pt-1">
                                Registration for the 2026 Student Tech Expo is now open. Reserve your seat and submit project showcase entries through your portal.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}