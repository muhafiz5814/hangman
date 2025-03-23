import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import { words } from "./wordsList.json";

import { useEffect, useState } from 'react';

import './App.css'

const getWord = (): string => words[Math.floor(Math.random() * words.length)];

function App() {

  const [randomWord, setRandomWord] = useState<string>(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const [result, setResult] = useState<"won" | "lost" | undefined>();

  const incorrectGuesses = guessedLetters.filter(letter => !randomWord.includes(letter));

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }

  useEffect(() => {
    if (incorrectGuesses.length >= 6) setResult("lost");
    if (randomWord.split("").every(char => guessedLetters.includes(char))) setResult("won");
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {

      const key: string = e.key;

      if (!key.match(/^[a-z]$/) || result) return;
      
      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters, result]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {

      const key: string = e.key;

      if (key !== "Enter") return;

      if (result === undefined) return;
      
      e.preventDefault();
      setGuessedLetters([]);
      setResult(undefined);
      setRandomWord(getWord());
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters, result]);

  return (
    <div className='wrapper'>

      {result && <div className='reload-message'>Press Enter or Refresh to try again.</div>}
      {result &&
        (
          result === "won"
            ? <div className='result-message win-message'>You won!</div>
            : <div className='result-message lose-message'>You lost!</div>
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
