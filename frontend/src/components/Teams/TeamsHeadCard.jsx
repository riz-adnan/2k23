import React from "react";


export default function TeamsHeadCard({ data }) {
    return (
        <div className="row col-10">
            {data.map((props) => (
                <div className="p-md-5 mb-3">
                    <div class="card HeadsCard">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img className="img-fluid rounded-start profile-pic" src={props.img} alt="Card image cap" />
                            </div>
                            <div class="col-md-9 pb-3">
                                <div class="card-body pb-0">
                                    <p className="col-md-12 Detail-Head">Name : {props.name}</p>
                                    <p className="col-md-12 Detail-Head">Position : {props.position}</p>
                                    <p className="col-md-12 Detail-Head">Contact : {props.contact}</p>
                                    <div className="col-md-12">
                                        <p className="Detail-Head">Mail ID : </p>
                                        <a>{props.email}</a>
                                    </div>
                                    

                                    <a className="col-2 text-center px-2 teams-icon" href={props.instagram} target="_blank" rel="noreferrer">
                                        <i class="bi bi-instagram Instagram"></i>
                                    </a>
                                    <a className="col-2 text-center px-2 teams-icon" href={props.linkedin} target="_blank" rel="noreferrer">
                                        <i class="bi bi-linkedin LinkedIn"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}