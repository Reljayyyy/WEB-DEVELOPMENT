import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-900 text-slate-100">
            <div className="w-full sm:max-w-md mt-6 px-8 py-10 bg-white dark:bg-slate-800 shadow-2xl overflow-hidden sm:rounded-3xl border border-slate-700/50">
                <div className="mb-8 text-center">
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Campus Portal</span>
                    <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3">School Announcement</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sign in to access your student or faculty dashboard</p>
                </div>
                {children}
            </div>
        </div>
    );
}