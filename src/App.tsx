import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Materials from './components/Materials';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Materials />
      <WhyChooseUs />
      <Gallery />
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
