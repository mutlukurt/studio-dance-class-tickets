import { motion } from 'framer-motion';

const TicketCard = ({ title, price, highlight = false }: { title: string; price: string; highlight?: boolean }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative flex h-40 w-full overflow-hidden ${highlight ? 'bg-neon-green text-black' : 'bg-card-bg text-white'} border border-white/10`}
        >
            {/* Left Part (Main Info) */}
            <div className="flex-1 p-6 flex flex-col justify-between relative z-10">
                <h3 className="font-display text-3xl font-bold uppercase">{title}</h3>
                <div className="flex items-center justify-between mt-auto">
                    <span className="font-display text-xl font-bold">{price}</span>
                    <button className={`px-4 py-1 text-xs font-bold uppercase tracking-wider ${highlight ? 'bg-neon-red text-white' : 'bg-neon-red text-white'} hover:bg-white hover:text-black transition-colors`}>
                        Purchase
                    </button>
                </div>
            </div>

            {/* Perforation Line */}
            <div className="relative w-8 h-full flex flex-col justify-between items-center">
                <div className="w-4 h-4 rounded-full bg-dark-bg -mt-2" />
                <div className="h-full border-l-2 border-dashed border-current opacity-30 mx-auto" />
                <div className="w-4 h-4 rounded-full bg-dark-bg -mb-2" />
            </div>

            {/* Right Part (Barcode) */}
            <div className="w-24 p-4 flex items-center justify-center bg-black/10">
                <div className="w-full h-full flex flex-col justify-between opacity-50">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-full bg-current" style={{ height: Math.random() * 4 + 1 }} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const TicketSection = () => {
    const tickets = [
        { title: '1 CLASS', price: '1 000 ₽' },
        { title: '10 CLASSES', price: '9 000 ₽' },
        { title: '20 CLASSES', price: '17 000 ₽', highlight: true },
        { title: '40 CLASSES', price: '34 000 ₽' },
    ];

    return (
        <section className="py-20 bg-dark-bg relative z-30">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl text-center mb-16 text-white"
                >
                    PURCHASE TICKET
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tickets.map((ticket, index) => (
                        <TicketCard key={index} {...ticket} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TicketSection;
