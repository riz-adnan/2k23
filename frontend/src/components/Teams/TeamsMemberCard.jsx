import React from "react";

export default function TeamsMemberCard({ data }) {
    return (
        <div className="row d-flex justify-content-center TotalCards m-0">
            {data.map((props) => (
                <div className="col-lg-3 col-md-4 col-9 p-md-3 p-sm-3 h-100 TeamCard">
                    <div className="card MembersCard row pb-2">
                        <img className="card-img-top p-0 profile-pic" src={props.img} alt="Card" />
                        <div className="card-body pb-0 container-fluid TeamsCardBody">
                            <div className="row">
                                <p className="col-md-12 pt-1 pb-3 px-1 Detail text-center">{props.name}</p>
                                {/* <p className="col-md-12 Detail">Position : {props.position}</p>
                                <p className="col-md-12 Detail">Contact : {props.contact}</p>
                                <p className="col-md-12 Detail">Mail ID : {props.email}</p> */}

                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="text-center teams-icon-instagram" href={props.instagram} target="_blank" rel="noreferrer">
                                        <i class="bi bi-instagram Instagram"></i>
                                    </a>
                                    <a className="text-center teams-icon" href={props.linkedin} target="_blank" rel="noreferrer">
                                        <i class="bi bi-linkedin LinkedIn"></i>
                                    </a>
                                    <a className="text-center teams-icon" href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
                                        <i class="bi bi-envelope email"></i>
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