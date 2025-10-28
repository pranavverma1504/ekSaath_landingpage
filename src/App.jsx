import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import ImageSlider from "./components/ImageSlider/ImageSlider"
import Location from "./components/Location/Location"
import Navbar from "./components/Nav/Navbar"
import TextSection from "./components/TextSection/TextSection"




const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TextSection/>
    <Location/>
    <About/>
    <ImageSlider/>
    <Footer/>
    </>
  )
}

export default App