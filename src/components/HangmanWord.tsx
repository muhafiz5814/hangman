import "./HangmanWord.css";

const HangmanWord = ({ wordToGuess, guessedLetters }: { wordToGuess: string, guessedLetters: string[] }) => {
    
    console.log(wordToGuess);

    return (
        <div className="word-to-guess">
            {wordToGuess.split("").map((char, index) => (
                <div className="character-div"  key={index}>
                    <span
                        className="character-in-word-to-guess"
                        style={{ visibility: guessedLetters.includes(char) ? "visible" : "hidden" }}
                    >
                        {char.toUpperCase()}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default HangmanWord;