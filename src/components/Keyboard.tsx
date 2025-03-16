import "./Keyboard.css";

const Keyboard = ({setGuessedLetters}: {setGuessedLetters:React.Dispatch<React.SetStateAction<string[]>>}) => {

    const KEYS: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="keyboard-div">
            {KEYS.map(key => (
                <button className="key" key={key} onClick={() => setGuessedLetters((guessedLetters) => ([...guessedLetters, key]))}>{key.toUpperCase()}</button>
            ))}
        </div>
    )
}

export default Keyboard;