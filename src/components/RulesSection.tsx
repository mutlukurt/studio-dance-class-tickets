import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const RuleItem = ({ title, description, isActive, onClick }: { title: string; description: string; isActive: boolean; onClick: () => void }) => {
    return (
        <div className="border-b border-white/20">
            <button
                onClick={onClick}
                className={`w-full py-4 px-6 flex items-center justify-between transition-colors duration-300 ${isActive ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-white'
                    }`}
            >
                <span className="font-display text-lg font-bold uppercase tracking-wide">{title}</span>
                <ChevronRight
                    className={`transform transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
                    size={20}
                />
            </button>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/5"
                    >
                        <div className="p-6 text-gray-300 font-body text-sm leading-relaxed">
                            <p>
                                {description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const RulesSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(2); // Default open index (Cancellation)

    const rules = [
        {
            title: 'PASS VALIDITY PERIOD',
            description: 'Passes are valid for a specific period from the date of purchase. Please check the expiration date on your pass. Expired passes cannot be extended or refunded.'
        },
        {
            title: 'REGISTRATION FOR CLASSES',
            description: 'Pre-registration is required for all classes. You can book your spot online through our website or mobile app. Walk-ins are subject to availability.'
        },
        {
            title: 'CANCELLATION AND RESCHEDULING',
            description: 'If you are unable to attend a class you have signed up for, please cancel your appointment at least 3 hours prior to the start of the class. If you cancel on time, the class will remain on your subscription. Late cancellations or no-shows will result in the class being deducted from your pass.'
        },
        {
            title: 'FREEZING A SEASON TICKET',
            description: 'Season tickets can be frozen for medical reasons with a valid doctor\'s note. The freeze period cannot exceed the total validity duration of the pass.'
        },
        {
            title: 'REFUNDS',
            description: 'All sales are final. Refunds are only issued in case of a medical emergency preventing you from using the services, subject to management approval and valid documentation.'
        },
        {
            title: 'TRANSFER OF THE SEASON TICKET',
            description: 'Season tickets are non-transferable and can only be used by the person under whose name they were purchased.'
        },
        {
            title: 'SCHEDULE CHANGES',
            description: 'The studio reserves the right to change the schedule, instructors, or class types without prior notice. Please check the online schedule for the most up-to-date information.'
        }
    ];

    return (
        <section className="py-20 bg-dark-bg">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl text-center mb-16 text-white text-shadow-neon"
                >
                    GENERAL RULES
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Rules List */}
                    <div className="border-t border-white/20">
                        {rules.map((rule, index) => (
                            <RuleItem
                                key={index}
                                title={rule.title}
                                description={rule.description}
                                isActive={activeIndex === index}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Info / Image Placeholder */}
                    <div className="relative hidden lg:block">
                        <div className="sticky top-24">
                            <div className="aspect-[3/4] bg-gray-900 border border-white/10 p-4 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-red/20 to-neon-green/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <p className="font-display text-2xl text-white mb-4">READ MORE ABOUT OUR POLICIES</p>
                                    <a href="#" className="text-neon-green hover:text-white underline underline-offset-4 font-bold uppercase text-sm">
                                        Read More
                                    </a>
                                </div>
                                {/* Abstract shapes */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green blur-[80px] opacity-20" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-red blur-[80px] opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RulesSection;
