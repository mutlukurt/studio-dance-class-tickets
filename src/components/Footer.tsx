

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-display text-2xl font-bold text-white">SDC</span>
                </div>
                <div className="text-gray-500 text-sm text-center md:text-left">
                    &copy; 2025 Mutlu Kurt. Licensed under the MIT License.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">INSTAGRAM</a>
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">YOUTUBE</a>
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">TELEGRAM</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
