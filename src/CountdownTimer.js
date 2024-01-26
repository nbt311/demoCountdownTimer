import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    setIsRunning(false);
                    clearInterval(timer);
                } else {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            setHours((prevHours) => prevHours - 1);
                            setMinutes(59);
                        } else {
                            setMinutes((prevMinutes) => prevMinutes - 1);
                        }
                        setSeconds(59);
                    } else {
                        setSeconds((prevSeconds) => prevSeconds - 1);
                    }
                }
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, hours, minutes, seconds]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
    };

    return (
        <div className="App">
            <h1>Countdown Timer</h1>
            <div>
                <label>Hours:</label>
                <input type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value, 10))} />
            </div>
            <div>
                <label>Minutes:</label>
                <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
            </div>
            <div>
                <label>Seconds:</label>
                <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value, 10))} />
            </div>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <div>
                <p>
                    {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </p>
            </div>
        </div>
    );
}

export default CountdownTimer;
