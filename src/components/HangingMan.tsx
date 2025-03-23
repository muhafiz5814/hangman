import "./HangingMan.css";

const HEAD = <div id="head" key={"head"} />;
const BODY = <div id="body" key={"body"} />
const RIGHT_ARM = <div className="arm right-arm" key={"right-arm"} />
const LEFT_ARM = <div className="arm left-arm" key={"left-arm"} />
const RIGHT_LEG = <div className="leg right-leg" key={"right-leg"} />
const LEFT_LEG = <div className="leg left-leg" key={"left-leg"} />

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangingManProps = {
    totalIncorrectGuesses: number
}

const HangingMan = ({totalIncorrectGuesses}: HangingManProps) => {
    return (
        <>
            {BODY_PARTS.slice(0, totalIncorrectGuesses)}
        </>
    )
}

export default HangingMan;