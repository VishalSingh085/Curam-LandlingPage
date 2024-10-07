
import './App.css'
import CarerBar from './components/CarerBar'
import FooterSection from './components/Footer/Footer-section'
import ModalFooter from './components/Footer/ModalFooter'

import Header from './components/Header/Header'


import BannerSection from './components/Main/HomePage-banner-section/BannerSection'
import CuramMatches from './components/Main/HomePage-banner-section/CuramMatches'
import PrioritySection from './components/Main/HomePage-banner-section/PrioritySection'
// import Section from './components/Main/Section'


function App() {
 

  return (
    <>
{/* Optional: CarerBar component for additional features */}
<CarerBar/>

{/* Header component to display the main title and navigation */}
<Header/>

{/* Main section containing the banner and other specific components */}
{/* BannerSection: Displays a promotional banner */}
<BannerSection/>

{/* CuramMatches: Component for showing current matches or offers */}
<CuramMatches/>

{/* PrioritySection: Highlights priority information or services */}
<PrioritySection/>

{/* Footer section: Contains additional links and information */}
{/* Optional: Modal footer can be added if needed, but does not include specific CSS */}
<FooterSection/>
<ModalFooter/>

{/* In the Curam application, I use Vite for React development and utilize Tailwind CSS minimally, primarily relying on external CSS for styling. */}
    </>
  )
}

export default App
