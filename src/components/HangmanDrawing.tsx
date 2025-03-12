import HangingMan from "./HangingMan";

import "./HangmanDrawing.css";

const HangmanDrawing = () => {
    return (
        <div id="pole-container">
            <div id="pole-top" />
            <div id="hanging-rope" />
            <div id="pole-middle" />
            <div id="pole-bottom" />
            <HangingMan />
        </div>
    )
}

export default HangmanDrawing;