import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ValueProposition from './components/ValueProposition';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';

function LandingPage() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />
      <Hero />
      <BrandStory />
      <ValueProposition />
      <ProductGrid />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
