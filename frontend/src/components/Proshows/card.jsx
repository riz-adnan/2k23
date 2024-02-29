import React from "react";
import "./card.css";

export default function Card({
    imgSrc,
    desc,
    date,
    time,
}) {
    return (
        <div className="pr-card">
            <img src={imgSrc} alt="img" className="pr-card-img" />
            <div className="pr-card-content">
                <div className="pr-date-time">
                    <h1 className="pr-date">DATE</h1>
                    <h1 className="pr-time">TIME</h1>
                </div>
                <div className="pr-date-time-content">
                    <h2 className="pr-date-content">{date}</h2>
                    <h2 className="pr-time-content">{time}</h2>
                </div>
                <div className="pr-event-details">
                    <h1 className="pr-event">EVENT DETAILS</h1>
                </div>
                <div className="pr-event-details-content">
                    <h2 className="pr-event-content">{desc}</h2>
                </div>
            </div>
        </div>
    );
}
