import React, { useEffect, useState } from "react";

export default function CountdownClock(){
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [timeOut, setTimeOut] = useState(false);
    
    useEffect(() => {
        // We will get the end time from the backend
        const endTime = new Date("February 15, 2023 23:59:59").getTime();
        const currentTime = new Date().getTime();
        const diff = Math.floor((endTime - currentTime) / 1000);

        // Set the time remaining to the difference
        setTimeRemaining(diff);
        setTimeOut(false);
    }
    , []);

    useEffect(() => {
        if(timeOut) return;

        const timer = setTimeout(() => {
            updateTimeRemaining();
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeRemaining, timeOut]);

    function updateTimeRemaining(){
        if(timeRemaining === 0) return setTimeOut(true);
        setTimeRemaining(timeRemaining - 1);
    }

    function calculateTimeRemaining(){
        const days = Math.floor(timeRemaining / 86400);
        const hours = Math.floor((timeRemaining % 86400) / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = Math.floor(timeRemaining % 60);
        return {days, hours, minutes, seconds};
    }

    function displayTimeRemaining(){
        const {days, hours, minutes, seconds} = calculateTimeRemaining();
        return (
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column align-items-center rounded-2 p-2 cdc-timeBox">
                    <span className="cdc-time">{days}</span>
                    <span className="cdc-label">Days</span>
                </div>
                <div className="d-flex flex-column align-items-center p-2">
                    <span className="cdc-colon">:</span>
                </div>
                <div className="d-flex flex-column align-items-center rounded-2 p-2 cdc-timeBox">
                    <span className="cdc-time">{hours}</span>
                    <span className="cdc-label">Hours</span>
                </div>
                <div className="d-flex flex-column align-items-center p-2">
                    <span className="cdc-colon">:</span>
                </div>
                <div className="d-flex flex-column align-items-center rounded-2 p-2 cdc-timeBox">
                    <span className="cdc-time">{minutes}</span>
                    <span className="cdc-label">Minutes</span>
                </div>
                <div className="d-flex flex-column align-items-center p-2">
                    <span className="cdc-colon">:</span>
                </div>
                <div className="d-flex flex-column align-items-center rounded-2 p-2 cdc-timeBox">
                    <span className="cdc-time">{seconds}</span>
                    <span className="cdc-label">Seconds</span>
                </div>
            </div>
        );
        }

        function displayTimeOut(){

            return (
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <span className="cdc-timeOut">Time's Up!</span>
                    </div>
                </div>
            );

        }
        
    return(
        <div style={{padding: "10px"}}>
            {timeOut ? displayTimeOut() : displayTimeRemaining()}
        </div>
    );
}