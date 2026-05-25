import './App.css'
import SolarPanel from './Components/SolarPanel'
import Navbar from './Components/Navbar'
import Tesla1 from './Components/Tesla1'
import Tesla2 from './Components/Tesla2'
import Tesla3 from './Components/Tesla3'
import SolarRoof from './Components/SolarRoof'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div id="vehicle" className="scroll-mt-16">
        <Tesla1 />
      </div>
      <div id="energy" className="scroll-mt-16">
        <Tesla2 />
      </div>
      <div id="charge" className="scroll-mt-16">
        <Tesla3 />
      </div>
      <div id="discover" className="scroll-mt-16">
        <SolarPanel />
      </div>
      <div id="shop" className="scroll-mt-16">
        <SolarRoof />
      </div>
      <Footer />
    </div>
  )
}
export default App