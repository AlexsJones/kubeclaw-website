import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySympozium from './components/WhySympozium'
import WhoItsFor from './components/WhoItsFor'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Comparison from './components/Comparison'
import Security from './components/Security'
import GetStarted from './components/GetStarted'
import CRDs from './components/CRDs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <Hero />
      <WhySympozium />
      <WhoItsFor />
      <Features />
      <Architecture />
      <Comparison />
      <Security />
      <CRDs />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
