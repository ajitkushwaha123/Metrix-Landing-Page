import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BrandCarousel from './components/ClientCarousel'
import Review from './components/Review'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Faqs from './components/Faqs'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <BrandCarousel />
      <Pricing />
      <Review />
      <ContactForm />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
