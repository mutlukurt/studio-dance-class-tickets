import { motion } from 'framer-motion';

const DancersSection = () => {
    const dancers = [
        {
            id: 1,
            name: 'ALEX',
            style: 'HIP HOP',
            image: '/dancers/dancer1.png',
            delay: 0.1
        },
        {
            id: 2,
            name: 'SARAH',
            style: 'CONTEMPORARY',
            image: '/dancers/dancer2.png',
            delay: 0.2
        },
        {
            id: 3,
            name: 'MIKE',
            style: 'STREET DANCE',
            image: '/dancers/dancer3.png',
            delay: 0.3
        },
        {
            id: 4,
            name: 'JESS',
            style: 'BREAKDANCE',
            image: '/dancers/dancer4.png',
            delay: 0.4
        }
    ];

    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-red/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl text-white mb-4 text-shadow-neon">
                        OUR DANCERS
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
                        Meet the professionals who will take your skills to the next level.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dancers.map((dancer) => (
                        <motion.div
                            key={dancer.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: dancer.delay }}
                            className="group relative"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gray-900 border border-white/10 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />

                                <img
                                    src={dancer.image}
                                    alt={`${dancer.name} - ${dancer.style}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Glitch effect overlay on hover */}
                                <div className="absolute inset-0 bg-neon-green/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300 z-20" />

                                <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                                    <h3 className="font-display text-3xl text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        {dancer.name}
                                    </h3>
                                    <p className="text-neon-green font-bold text-sm tracking-wider uppercase transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                        {dancer.style}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative borders */}
                            <div className="absolute -inset-1 border border-white/5 scale-95 group-hover:scale-100 group-hover:border-neon-green/30 transition-all duration-500 -z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DancersSection;
