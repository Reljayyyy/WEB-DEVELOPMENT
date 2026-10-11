import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default({ auth }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [userRole, setUserRole] = useState('student');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [myRsvps, setMyRsvps] = useState([1]);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const [showPostModal, setShowPostModal] = useState(false);
    
    // New announcement form state
    const [newTitle, setNewTitle] = useState('');
    const [newCategory, setNewCategory] = useState('Academic');
    const [newUrgent, setNewUrgent] = useState('false');
    const [newContent, setNewContent] = useState('');

    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            title: 'Midterm Examination Schedule Released',
            category: 'Academic',
            date: 'October 8, 2026',
            author: 'Office of the Registrar',
            content: 'Midterm examinations for Fall Term 2026 are scheduled from October 20 to October 24. Please check your personalized timetables for exact room assignments and seating arrangements.',
            badgeClass: 'bg-red-50 text-red-700',
            urgent: true
        },
        {
            id: 2,
            title: 'Annual Inter-Department Sports Fest Kickoff',
            category: 'Sports',
            date: 'October 6, 2026',
            author: 'Athletics Department',
            content: 'Join us this coming Friday at the main campus stadium for the opening ceremony of the Annual Sports Fest. Basketball, track & field, and e-sports tournaments will take place throughout the week.',
            badgeClass: 'bg-emerald-50 text-emerald-700',
            urgent: false
        },
        {
            id: 3,
            title: 'Library Extended Operating Hours for Finals Prep',
            category: 'Administrative',
            date: 'October 4, 2026',
            author: 'University Library Services',
            content: 'To support student studying and group research, the main library will remain open until 2:00 AM every night starting next week until the end of examinations.',
            badgeClass: 'bg-blue-50 text-blue-700',
            urgent: false
        },
        {
            id: 4,
            title: 'Guest Lecture: AI & Ethics in Modern Engineering',
            category: 'Events',
            date: 'October 2, 2026',
            author: 'College of Engineering',
            content: 'Dr. Evelyn Vance from MIT will host a keynote seminar discussing ethical dilemmas in AI deployment and automated systems at the Main Auditorium.',
            badgeClass: 'bg-amber-50 text-amber-700',
            urgent: false
        }
    ]);

    const events = [
        { id: 1, title: 'AI & Ethics Keynote Seminar', date: 'Oct 12, 2026', time: '10:00 AM', location: 'Main Auditorium', capacity: 250, rsvpCount: 184, desc: 'Keynote presentation on modern engineering ethics.' },
        { id: 2, title: 'Inter-Department Basketball Finals', date: 'Oct 14, 2026', time: '4:30 PM', location: 'Campus Gymnasium', capacity: 500, rsvpCount: 390, desc: 'Cheer for your departmental representatives.' },
        { id: 3, title: 'Research Grant Writing Workshop', date: 'Oct 18, 2026', time: '1:00 PM', location: 'Science Hall 302', capacity: 60, rsvpCount: 42, desc: 'Essential guidance for graduate students and faculty.' }
    ];

    const filteredAnnouncements = announcements.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleRsvp = (eventId) => {
        if (myRsvps.includes(eventId)) {
            setMyRsvps(myRsvps.filter(id => id !== eventId));
        } else {
            setMyRsvps([...myRsvps, eventId]);
        }
    };

    const handlePostAnnouncement = (e) => {
        e.preventDefault();
        const newNotice = {
            id: Date.now(),
            title: newTitle,
            category: newCategory,
            date: 'Just now',
            author: userRole === 'admin' ? 'Administrator' : 'Faculty Member',
            content: newContent,
            badgeClass: 'bg-red-50 text-red-700',
            urgent: newUrgent === 'true'
        };
        setAnnouncements([newNotice, ...announcements]);
        setShowPostModal(false);
        setNewTitle('');
        setNewContent('');
        alert('New announcement successfully published to the school board!');
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center space-x-4">
                        <h2 className="font-semibold text-xl text-slate-800 leading-tight">School Announcement & Dashboard</h2>
                        <div className="hidden md:flex space-x-1 bg-slate-100 p-1 rounded-xl">
                            <button onClick={() => setActiveTab('overview')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === 'overview' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-600'}`}>Dashboard</button>
                            <button onClick={() => setActiveTab('announcements')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === 'announcements' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-600'}`}>Announcements (4)</button>
                            <button onClick={() => setActiveTab('events')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === 'events' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-600'}`}>Events & RSVP</button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-xs font-semibold text-slate-500">Role View:</span>
                        <select value={userRole} onChange={(e) => setUserRole(e.target.value)} className="bg-white text-xs font-semibold py-1.5 px-3 rounded-lg border border-slate-200 focus:outline-none">
                            <option value="student">Student Portal</option>
                            <option value="faculty">Faculty Portal</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard & Announcements" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                
                {/* TAB 1: OVERVIEW */}
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl flex justify-between items-center">
                            <div className="space-y-2">
                                <span className="bg-red-500/30 text-red-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{userRole} Portal Active</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold">Welcome back, {auth.user.name}!</h2>
                                <p className="text-slate-300 text-sm">Here is your campus briefing for Friday, October 9, 2026.</p>
                            </div>
                            <button onClick={() => setActiveTab('announcements')} className="hidden sm:inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition text-sm">
                                View Announcements
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase">Unread Notices</span>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mt-1">4</h3>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl"><i className="fa-solid fa-bullhorn"></i></div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase">Event RSVPs</span>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{myRsvps.length}</h3>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl"><i className="fa-solid fa-calendar-check"></i></div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase">Standing</span>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mt-1">3.88</h3>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl"><i className="fa-solid fa-graduation-cap"></i></div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase">Status</span>
                                    <h3 className="text-lg font-bold text-emerald-600 mt-1">Normal Ops</h3>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl"><i className="fa-solid fa-shield-halved"></i></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8 space-y-4">
                                <h3 className="text-lg font-bold text-slate-900">Recent Notices</h3>
                                {announcements.slice(0, 3).map(item => (
                                    <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.badgeClass}`}>{item.category}</span>
                                            <span className="text-xs text-slate-400">{item.date}</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm line-clamp-2">{item.content}</p>
                                        <button onClick={() => setSelectedAnnouncement(item)} className="text-red-600 text-xs font-semibold hover:underline">Read full notice &rarr;</button>
                                    </div>
                                ))}
                            </div>
                            <div className="lg:col-span-4 space-y-4">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                                    <h4 className="font-bold text-slate-900 text-sm">Quick Portal Links</h4>
                                    <a href="#" className="block p-3 bg-slate-50 hover:bg-red-50 text-xs font-semibold rounded-xl text-slate-700 hover:text-red-600 transition">Grade Transcript & Audit</a>
                                    <a href="#" className="block p-3 bg-slate-50 hover:bg-red-50 text-xs font-semibold rounded-xl text-slate-700 hover:text-red-600 transition">Class Timetable & Rooms</a>
                                    <a href="#" className="block p-3 bg-slate-50 hover:bg-red-50 text-xs font-semibold rounded-xl text-slate-700 hover:text-red-600 transition">Library Booking</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: ANNOUNCEMENTS */}
                {activeTab === 'announcements' && (
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h2 className="text-xl font-extrabold text-slate-900">Campus Announcement Board</h2>
                                <p className="text-xs text-slate-500">Filter official school news and notices</p>
                            </div>
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search notices..." className="px-4 py-2 rounded-xl border border-slate-200 text-xs w-full sm:w-64 focus:outline-none focus:border-red-600" />
                                {(userRole === 'admin' || userRole === 'faculty') && (
                                    <button onClick={() => setShowPostModal(true)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow shrink-0">Post Notice</button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['All', 'Academic', 'Events', 'Administrative', 'Sports'].map(cat => (
                                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredAnnouncements.map(item => (
                                <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${item.badgeClass}`}>{item.category}</span>
                                            <span className="text-xs text-slate-400">{item.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600 text-sm line-clamp-3">{item.content}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                                        <span className="text-slate-500 font-medium">By {item.author}</span>
                                        <button onClick={() => setSelectedAnnouncement(item)} className="bg-red-50 text-red-600 hover:bg-red-100 font-semibold px-3 py-1.5 rounded-lg transition">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 3: EVENTS & RSVP */}
                {activeTab === 'events' && (
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-extrabold text-slate-900">Campus Activities & Event RSVP</h2>
                                <p className="text-xs text-slate-500">Confirm your attendance for upcoming seminars and fests</p>
                            </div>
                            <span className="bg-red-50 text-red-700 px-4 py-2 rounded-xl text-xs font-semibold border border-red-200">
                                {myRsvps.length} active RSVPs
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {events.map(event => (
                                <div key={event.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                                    <div className="p-6 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-2.5 py-1 rounded">{event.date}</span>
                                            <span className="text-xs font-bold text-emerald-600">{event.time}</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-lg">{event.title}</h3>
                                        <p className="text-slate-600 text-xs">{event.desc}</p>
                                        <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                                            <div><i className="fa-solid fa-location-dot text-red-600 mr-2"></i> {event.location}</div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-xs font-semibold text-slate-500">{event.rsvpCount} going</span>
                                        <button onClick={() => toggleRsvp(event.id)} className={`text-xs font-semibold px-4 py-2 rounded-xl shadow transition ${myRsvps.includes(event.id) ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
                                            {myRsvps.includes(event.id) ? '✓ Confirmed' : 'RSVP Now'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Read Modal */}
            {selectedAnnouncement && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
                        <div className="flex justify-between items-center">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${selectedAnnouncement.badgeClass}`}>{selectedAnnouncement.category}</span>
                            <button onClick={() => setSelectedAnnouncement(null)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{selectedAnnouncement.title}</h3>
                        <p className="text-xs text-slate-400">By {selectedAnnouncement.author} • {selectedAnnouncement.date}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{selectedAnnouncement.content}</p>
                    </div>
                </div>
            )}

            {/* Post Modal */}
            {showPostModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
                    <form onSubmit={handlePostAnnouncement} className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
                        <h3 className="text-lg font-bold text-slate-900">Post New Notice</h3>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required className="w-full px-3 py-2 rounded-xl border text-xs" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                            <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-xs bg-white">
                                <option value="Academic">Academic</option>
                                <option value="Events">Events</option>
                                <option value="Administrative">Administrative</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Content</label>
                            <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} rows="3" required className="w-full px-3 py-2 rounded-xl border text-xs"></textarea>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button type="button" onClick={() => setShowPostModal(false)} className="px-4 py-2 text-xs text-slate-600">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-semibold">Publish</button>
                        </div>
                    </form>
                </div>
            )}
        </AuthenticatedLayout>
    );
};