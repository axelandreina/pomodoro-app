import React, { useState, useEffect } from "react";

export default function Pomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1)
                } else {
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage)
                }
            }  else {
                setSeconds(seconds - 1);
            }          
        }, 1000);
    },[seconds]);

    return (
        <div className="container">
            <div className="text-container">
                {displayMessage && <div>Anda a tomarte break! Empiezas otra vez en</div>}
            </div>
            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>
        </div>
    );
}
