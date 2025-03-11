import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import './App.css'

function App() {

  return (
    <div className='wrapper'>
      <div className='result-message'>Win / Lose</div>

      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

      <p>
        Made with love by <strong>Muhafiz Raza</strong> using Vite + React
      </p>
    </div>
  )
}

export default App
