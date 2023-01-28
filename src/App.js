
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Skill } from './components/Skill';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Clients } from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main id="main">
        <Clients />
        <About />

        <Skill />
        <Services />
        <Portfolio />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <BrowserRouter>
        <div>
          <Link to="/about" className="mx-4">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <Routes>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
