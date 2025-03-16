import "./Keyboard.css";

const Keyboard = ({setGuessedLetters}: {setGuessedLetters:React.Dispatch<React.SetStateAction<string[]>>}) => {

    const alphabets: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="keyboard-div">
            {alphabets.map(alphabet => (
                <button className="key" key={alphabet} onClick={() => setGuessedLetters((guessedLetters) => ([...guessedLetters, alphabet]))}>{alphabet}</button>
            ))}
        </div>
    )
}

export default Keyboard;