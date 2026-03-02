import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import WomenInAnalytics from './components/WomenInAnalytics';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-coffee-light selection:text-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <WomenInAnalytics />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
