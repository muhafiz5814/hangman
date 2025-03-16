import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import { words } from "./wordsList.json";

import { useState } from 'react';

import './App.css'

function App() {

  const [randomWord] = useState<string>(() => words[Math.floor(Math.random() * words.length)]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(guessedLetters);

  return (
    <div className='wrapper'>
      <div className='result-message'>Win / Lose</div>

      <HangmanDrawing />
      <HangmanWord wordToGuess={randomWord} guessedLetters={ guessedLetters } />
      <Keyboard setGuessedLetters={ setGuessedLetters } />

      <p>
        Made with love by <strong>Muhafiz Raza</strong> using Vite + React
      </p>
    </div>
  )
}

export default App
