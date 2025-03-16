import HangingMan from "./HangingMan";

import "./HangmanDrawing.css";

const HangmanDrawing = ({totalIncorrectGuesses}: {totalIncorrectGuesses: number}) => {
    return (
        <div id="pole-container">
            <div id="pole-top" />
            <div id="hanging-rope" />
            <div id="pole-middle" />
            <div id="pole-bottom" />
            <HangingMan totalIncorrectGuesses={totalIncorrectGuesses} />
        </div>
    )
}

export default HangmanDrawing;