import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import { words } from "./wordsList.json";
import './App.css'

function App() {

  const randomWord: string = words[Math.floor(Math.random() * words.length)];

  return (
    <div className='wrapper'>
      <div className='result-message'>Win / Lose</div>

      <HangmanDrawing />
      <HangmanWord wordToGuess={randomWord} />
      <Keyboard />

      <p>
        Made with love by <strong>Muhafiz Raza</strong> using Vite + React
      </p>
    </div>
  )
}

export default App
