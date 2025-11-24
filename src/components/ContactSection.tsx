import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Youtube, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl text-white mb-4 text-shadow-neon">
                        GET IN TOUCH
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-neon-green/50 transition-colors duration-300">
                                    <MapPin className="text-neon-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-display text-xl text-white mb-2">VISIT US</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        123 Dance Street<br />
                                        Art District, City 10012
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-neon-green/50 transition-colors duration-300">
                                    <Phone className="text-neon-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-display text-xl text-white mb-2">CALL US</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        +1 (555) 123-4567<br />
                                        Mon-Fri from 8am to 5pm
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-neon-green/50 transition-colors duration-300">
                                    <Mail className="text-neon-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-display text-xl text-white mb-2">EMAIL US</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        hello@sdc-studio.com<br />
                                        support@sdc-studio.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="font-display text-xl text-white mb-6">FOLLOW US</h4>
                            <div className="flex space-x-6">
                                <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-neon-red hover:text-white hover:border-neon-red transition-all duration-300">
                                    <Youtube size={20} />
                                </a>
                                <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
                                    <Send size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-card-bg border border-white/10 p-8 md:p-12 relative"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-neon-green focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-neon-green focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-neon-green focus:outline-none transition-colors"
                                    placeholder="Class Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-neon-green focus:outline-none transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-display font-bold text-lg py-4 hover:bg-neon-green transition-colors duration-300 uppercase tracking-wider"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-green/50" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-red/50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
