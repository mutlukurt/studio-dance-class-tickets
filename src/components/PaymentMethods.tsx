import { motion } from 'framer-motion';
import dancerPortrait from '../assets/dancer_portrait.png';

const PaymentMethods = () => {
    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl text-center mb-16 text-white relative z-10"
                >
                    METHODS OF PAYMENT
                </motion.h2>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-md aspect-[3/4] border-4 border-white p-2 transform -rotate-3"
                    >
                        <div className="w-full h-full overflow-hidden bg-gray-800 relative">
                            <img
                                src={dancerPortrait}
                                alt="Dancer"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Graffiti Overlay */}
                            <div className="absolute top-4 left-4 text-neon-red font-display text-4xl font-bold rotate-[-15deg] mix-blend-hard-light">
                                DANCE
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-lg font-display text-4xl md:text-5xl leading-tight uppercase"
                    >
                        <p className="mb-4">
                            WE ACCEPT <span className="text-neon-green italic transform -skew-x-12 inline-block">CASH</span>
                        </p>
                        <p className="mb-4">
                            PAYMENT DIRECTLY AT THE STUDIO
                        </p>
                        <p className="mb-4">
                            OR VIA THE WEBSITE WITH
                        </p>
                        <p className="text-neon-green">
                            BANK CARDS.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Background Splatter Effect (CSS only) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-neon-red/5 to-transparent pointer-events-none z-0" />
        </section>
    );
};

export default PaymentMethods;
