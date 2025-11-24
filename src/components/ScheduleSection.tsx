import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScheduleSection = () => {
    const [activeDay, setActiveDay] = useState('MONDAY');

    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

    const scheduleData: { [key: string]: { time: string; class: string; instructor: string; level: string }[] } = {
        MONDAY: [
            { time: '18:00', class: 'HIP HOP FOUNDATIONS', instructor: 'ALEX', level: 'BEGINNER' },
            { time: '19:30', class: 'CONTEMPORARY FLOW', instructor: 'SARAH', level: 'INTERMEDIATE' },
            { time: '21:00', class: 'CHOREOGRAPHY', instructor: 'ALEX', level: 'ADVANCED' },
        ],
        TUESDAY: [
            { time: '18:00', class: 'JAZZ FUNK', instructor: 'MIKE', level: 'ALL LEVELS' },
            { time: '19:30', class: 'STREET JAZZ', instructor: 'JESS', level: 'INTERMEDIATE' },
        ],
        WEDNESDAY: [
            { time: '18:00', class: 'BREAKDANCE BASICS', instructor: 'JESS', level: 'BEGINNER' },
            { time: '19:30', class: 'HOUSE DANCE', instructor: 'MIKE', level: 'OPEN LEVEL' },
            { time: '21:00', class: 'FREESTYLE SESSION', instructor: 'ALEX', level: 'ADVANCED' },
        ],
        THURSDAY: [
            { time: '18:00', class: 'CONTEMPORARY TECH', instructor: 'SARAH', level: 'INTERMEDIATE' },
            { time: '19:30', class: 'COMMERCIAL POP', instructor: 'MIKE', level: 'BEGINNER' },
        ],
        FRIDAY: [
            { time: '18:00', class: 'K-POP COVER', instructor: 'JESS', level: 'ALL LEVELS' },
            { time: '19:30', class: 'HEELS CLASS', instructor: 'SARAH', level: 'INTERMEDIATE' },
            { time: '21:00', class: 'PARTY DANCE', instructor: 'ALEX', level: 'OPEN LEVEL' },
        ],
        SATURDAY: [
            { time: '12:00', class: 'KIDS HIP HOP', instructor: 'MIKE', level: 'KIDS' },
            { time: '14:00', class: 'WORKSHOP SERIES', instructor: 'GUEST', level: 'ALL LEVELS' },
        ],
        SUNDAY: [
            { time: '14:00', class: 'OPEN PRACTICE', instructor: 'SUPERVISED', level: 'ALL LEVELS' },
        ],
    };

    return (
        <section className="py-20 bg-dark-bg relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl text-center mb-16 text-white text-shadow-neon"
                >
                    WEEKLY SCHEDULE
                </motion.h2>

                {/* Days Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-6 py-2 font-display text-lg tracking-wider transition-all duration-300 border border-transparent ${activeDay === day
                                ? 'bg-neon-green text-black border-neon-green skew-x-[-10deg]'
                                : 'text-gray-400 hover:text-white hover:border-white/20 skew-x-[-10deg]'
                                }`}
                        >
                            <span className="block skew-x-[10deg]">{day}</span>
                        </button>
                    ))}
                </div>

                {/* Schedule Content */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-4"
                        >
                            {scheduleData[activeDay].map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-6">
                                            <span className="font-display text-3xl text-neon-green w-24">
                                                {item.time}
                                            </span>
                                            <div>
                                                <h3 className="font-display text-2xl text-white mb-1 group-hover:text-neon-red transition-colors">
                                                    {item.class}
                                                </h3>
                                                <p className="text-gray-400 text-sm">
                                                    INSTRUCTOR: <span className="text-white">{item.instructor}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 border border-white/20 text-xs text-gray-300 uppercase tracking-wider">
                                                {item.level}
                                            </span>
                                            <button className="px-6 py-2 bg-white text-black font-bold hover:bg-neon-green transition-colors duration-300 uppercase text-sm">
                                                Book
                                            </button>
                                        </div>
                                    </div>
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
