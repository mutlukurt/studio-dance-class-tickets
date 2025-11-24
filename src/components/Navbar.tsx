import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'CLASSES', href: '#' },
        { name: 'DANCERS', href: '#dancers' },
        { name: 'SCHEDULE', href: '#schedule' },
        { name: 'TICKETS', href: '#tickets', active: true },
        { name: 'ABOUT US', href: '#about' },
        { name: 'GENERAL RULES', href: '#rules' },
        { name: 'CONTACTS', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="font-display text-2xl font-bold tracking-tighter">SDC</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${link.active
                                        ? 'text-white bg-neon-red'
                                        : 'text-gray-300 hover:text-neon-green'
                                        }`}
                                >
                                    {link.name}
                                    {link.active && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-red shadow-[0_0_10px_#ff0033]" />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Location */}
                    <div className="hidden lg:flex items-center text-xs text-gray-400 space-x-2">
                        <span>MOSCOW</span>
                        <span className="w-1 h-1 bg-neon-green rounded-full"></span>
                        <span>SEOUL</span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-dark-bg border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-3 py-2 text-base font-medium ${link.active
                                        ? 'text-neon-red bg-white/5'
                                        : 'text-gray-300 hover:text-neon-green hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
