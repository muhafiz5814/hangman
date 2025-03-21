import "./Keyboard.css";

const Keyboard = ({addGuessedLetter, incorrectGuesses, result}: {addGuessedLetter: (letter: string) => void, incorrectGuesses: string[], result: string | undefined}) => {

    const KEYS: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="keyboard-div">
            {KEYS.map(key => (
                <button
                    className="key"
                    key={key}
                    onClick={() => addGuessedLetter(key)}
                    disabled = {result !== undefined || incorrectGuesses.includes(key)}
                >
                    {key.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export default Keyboard;