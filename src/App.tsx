import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyKubeClaw from './components/WhyKubeClaw'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Comparison from './components/Comparison'
import GetStarted from './components/GetStarted'
import CRDs from './components/CRDs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <Hero />
      <WhyKubeClaw />
      <Features />
      <Architecture />
      <Comparison />
      <CRDs />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
