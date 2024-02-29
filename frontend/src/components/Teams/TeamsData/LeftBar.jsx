import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function LeftBar(props) {
    const [activeTN, setActiveTN] = useState(props.name1);
    const [mem, setMem] = useState(props.name2);

    return (

        <div className="combinedTeamNames">
            <Link to='/ourteam/fest-heads'><h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Fest" ? "TeamName-active" : null)}>Fest Heads</h3></Link>
            <Link to='/ourteam/sponsorship'><h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Sponsorship" ? "TeamName-active" : null)}>Sponsorship Committee</h3></Link>
            <Link to='/ourteam/marketing' > <h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Marketing" ? "TeamName-active" : null)}>Marketing Committee</h3></Link>
            <Link to='/ourteam/creative'> <h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Creative" ? "TeamName-active" : null)}>Creative Cell</h3></Link>
            <Link to='/ourteam/finance'><h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Finance" ? "TeamName-active" : null)}>Finance Committee</h3></Link>
            <Link to='/ourteam/eventsManagement'><h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Events" ? "TeamName-active" : null)}>Events Management Committee</h3></Link>
            
            <Link to='/ourteam/graphics'><h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Graphic" ? "TeamName-active" : null)}>Graphics and Content Committee</h3></Link>
            <Link to='/ourteam/logistics'><h3 className={"TeamName p-md-2 m-md-1 " + (activeTN === "Hospitality" ? "TeamName-active" : null)}>Logistics, Security and Hospitality Committee</h3></Link>
        </div>

    );
}