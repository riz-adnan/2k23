import React, { useState } from "react";
import Footer from '../../components/Footer/footer';
import "./Teams.css";

import { hospitalityCommitteeData } from "./TeamsData/Hospitality";

import TeamsMemberCard from "./TeamsMemberCard";
import { Link } from "react-router-dom";
import LeftBar from "./TeamsData/LeftBar";


export default function Logistics() {

    const [data, setTeamData] = useState(hospitalityCommitteeData);
    const [activeTN, setActiveTN] = useState("Hospitality");
    const [mem, setMem] = useState("MEMBERS");

    return (
        <div className="TeamsPage">
            <div className="Team-body">
                <div className='TeamsHeading p-0'>
                <LeftBar name1="Hospitality" name2="MEMBERS" />
                </div>

                <div className="TeamAllCards container-fluid m-0 p-0">

                    <div className="d-flex justify-content-center">
                        <p className="m-0 Heads">HEADS</p>
                    </div>

                    <TeamsMemberCard data={data[0]} />

                    <div className="d-flex justify-content-center">
                        <p className="m-0 Heads">{mem}</p>
                    </div>

                    <TeamsMemberCard data={data[1]} />

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}