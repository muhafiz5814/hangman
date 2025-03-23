import "./HangmanWord.css";

type HangmanWordProps = {
    wordToGuess: string,
    guessedLetters: string[],
    result: string | undefined
}
const HangmanWord = ({ wordToGuess, guessedLetters, result }: HangmanWordProps) => {
    
    console.log(wordToGuess);

    return (
        <div className="word-to-guess">
            {wordToGuess.split("").map((char, index) => (
                <div className="character-div"  key={index}>
                    <span
                        className="character-in-word-to-guess"
                        style={{
                            visibility: result ? "visible" : guessedLetters.includes(char) ? "visible" : "hidden",
                            color: guessedLetters.includes(char) ? "white" : "red"
                        }}
                    >
                        {char.toUpperCase()}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default HangmanWord;