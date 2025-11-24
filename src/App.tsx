import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import DancersSection from './components/DancersSection';
import ScheduleSection from './components/ScheduleSection';
import TicketSection from './components/TicketSection';
import PaymentMethods from './components/PaymentMethods';
import RulesSection from './components/RulesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-neon-green selection:text-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutUsSection />
        </section>
        <section id="dancers">
          <DancersSection />
        </section>
        <section id="schedule">
          <ScheduleSection />
        </section>
        <section id="tickets">
          <TicketSection />
        </section>
        <section id="payment">
          <PaymentMethods />
        </section>
        <section id="rules">
          <RulesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
