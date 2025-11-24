import { motion } from 'framer-motion';

const AboutUsSection = () => {
    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] relative z-10 overflow-hidden border border-white/10">
                            <img
                                src="/about/studio.png"
                                alt="Our Dance Studio"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent mix-blend-multiply" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-full h-full border border-neon-green/30 z-0" />
                        <div className="absolute -bottom-4 -right-4 w-full h-full border border-neon-red/30 z-0" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-display text-5xl md:text-6xl text-white mb-8 text-shadow-neon">
                            WHO WE ARE
                        </h2>
                        <div className="space-y-6 text-gray-300 font-body text-lg leading-relaxed">
                            <p>
                                Welcome to <span className="text-neon-green font-bold">SDC</span>, where movement meets passion. We are more than just a dance studio; we are a community of artists, dreamers, and creators.
                            </p>
                            <p>
                                Founded in 2020, our mission has been to provide a space where dancers of all levels can explore their potential. From the raw energy of street styles to the precision of contemporary technique, we offer a diverse range of classes taught by industry professionals.
                            </p>
                            <p>
                                Our state-of-the-art facility features professional sprung floors, high-end sound systems, and an atmosphere that inspires creativity. Whether you're training for a career or dancing for the soul, you belong here.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="font-display text-4xl text-white mb-2">5+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="font-display text-4xl text-white mb-2">20+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Pro Instructors</p>
                            </div>
                            <div>
                                <h4 className="font-display text-4xl text-white mb-2">1k+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Happy Students</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
