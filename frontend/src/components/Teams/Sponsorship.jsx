import React, { useState } from "react";
import Footer from '../../components/Footer/footer';
import "./Teams.css";

import { sponsorshipCommitteeData } from "./TeamsData/Sponsorship";

import TeamsMemberCard from "./TeamsMemberCard";
import { Link } from "react-router-dom";
import LeftBar from "./TeamsData/LeftBar";

export default function Sponsorship() {

    const [data, setTeamData] = useState(sponsorshipCommitteeData);
    const [activeTN, setActiveTN] = useState("Sponsorship");
    const [mem, setMem] = useState("MEMBERS");

    return (
        <div className="TeamsPage">
            <div className="Team-body">
                <div className='TeamsHeading p-0'>
                    <LeftBar name1="Sponsorship" name2="MEMBERS" />
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