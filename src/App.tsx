import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import { words } from "./wordsList.json";

import { useEffect, useState } from 'react';

import './App.css'

function App() {

  const [randomWord] = useState<string>(() => words[Math.floor(Math.random() * words.length)]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const [result, setResult] = useState<"won" | "lost" | undefined>();

  const incorrectGuesses = guessedLetters.filter(letter => !randomWord.includes(letter));

  useEffect(() => {
    if (incorrectGuesses.length >= 6) setResult("lost");
    if (randomWord.split("").every(char => guessedLetters.includes(char))) setResult("won");
  }, [guessedLetters]);

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }

  return (
    <div className='wrapper'>
      {result &&
        (
          result === "won"
            ? <div className='result-message'>You won!</div>
            : <div className='result-message'>You lost! try again.</div>
        )
      }
      

      <HangmanDrawing totalIncorrectGuesses = {incorrectGuesses.length} />
      <HangmanWord wordToGuess={randomWord} guessedLetters={ guessedLetters } result={result} />
      <Keyboard addGuessedLetter={addGuessedLetter} incorrectGuesses={incorrectGuesses} result={result} />

      <p>
        Made with love by <strong>Muhafiz Raza</strong> using Vite + React
      </p>
    </div>
  )
}

export default App
