import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading Portfolio...</h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* FIXED: Changed 'to' to 'path' */}
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              {/* <Testimonials /> */}
              <Contact />
            </main>
          }/>
          
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={
            <div className="not-found">
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <a href="/" className="btn btn-primary">Go Back Home</a>
            </div>
          } />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;