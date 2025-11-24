import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)'
                }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg z-10" />

            {/* Content */}
            <div className="relative z-20 text-center w-full max-w-7xl mx-auto px-4">
                <div className="relative">
                    {/* Main Text Layer 1 (Back) */}
                    <h1 className="font-display text-[12vw] leading-none font-bold text-transparent text-stroke opacity-50 absolute top-0 left-0 w-full select-none transform translate-x-2 translate-y-2">
                        CLASS TICKETS
                    </h1>

                    {/* Main Text Layer 2 (Front) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="font-display text-[12vw] leading-none font-bold text-neon-green mix-blend-screen relative"
                    >
                        CLASS <span className="text-white">TICKETS</span>
                    </motion.h1>

                    {/* Center Info Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-bg/80 backdrop-blur-md p-6 border border-white/20 max-w-xs w-full hidden md:block"
                    >
                        <p className="font-display text-xl leading-tight text-white mb-2">
                            A FLEXIBLE SYSTEM
                        </p>
                        <p className="font-body text-sm text-gray-300">
                            CHOOSE THE BEST OPTION AND START YOUR DANCE JOURNEY WITH US!
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-32 h-32 border-t-4 border-r-4 border-neon-green opacity-50" />
            <div className="absolute bottom-1/4 left-0 w-32 h-32 border-b-4 border-l-4 border-neon-red opacity-50" />
        </div>
    );
};

export default Hero;
