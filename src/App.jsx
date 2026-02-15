import './App.css'
import Timer from './components/Timer'
import Rules from './components/Rules'
import GuessGrid from './components/GuessGrid'
import ToggleButtons from './components/ToggleButtons'
import FinalPopup from './components/FinalPopup'
import Footer from './components/Footer'

function App() {
  return <>
    <h1 className='heading'> WORDLE </h1>
    <Rules />
    <GuessGrid />
    <Timer />
    <ToggleButtons />
    <FinalPopup />
    <Footer />
  </>
}

export default App
