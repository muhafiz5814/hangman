import "./HangmanWord.css";

const HangmanWord = () => {

    const wordToGuess: string = "random";
    return (
        <div className="word-to-guess">
            {wordToGuess.split("").map((char, index) => (
                <div className="character-div"  key={index}>
                    <span className="character-in-word-to-guess">{ char }</span>
                </div>
            ))}
        </div>
    )
}

export default HangmanWord;