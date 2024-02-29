import { React, useState } from "react";
import axios from "../../axios.js";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import "./card.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import badge from "./../../Images/badge.png";

const Card = ({ data }, page) => {
  const [keyPopout, setKeyPopout] = useState(Math.random());
  const getNameFontSize = (name) => {
    const length = name.length;
    if (length > 20) {
      return "19px";
    } else if (length > 10) {
      return "21px";
    } else {
      return "23px";
    }
  };
  return (
    <>
    {data.map ((card) => (
   
   <div className="styled-cardContainer col-lg-4 col-md-6 col-sm-12">
          <image/>
          <MDBCard className={`h-95 StyledCard_${card.page}`} >
            
            <div className="styled-ImageCard">
                {/* {card.isSpecial ? <div className='styled-badgeImage'><img src={badge} alt=""></img></div>:""} */}
                <MDBCardImage className='styled-cardImage' src={card.image_card} alt='...' position='top'/>
            </div>
            <MDBCardBody>
              <MDBCardTitle
                className={`styled-card-title_${card.page}`}
                style={{ fontSize: getNameFontSize(card.name) }}
              >
                {card.name}
              </MDBCardTitle>
              <div className="card_buttons">
                <button
                  type="button"
                  className={`btn btn-outline CardRegister_${card.page}`}
                  onClick={() => {
                    if (card.page == "work") {
                      window.open(card.registrationlink);
                    } else {
                      if (localStorage.getItem("username")) {
                        if (
                          localStorage
                            .getItem("username")
                            .endsWith("@iittp.ac.in")
                        ) {
                          axios.post("/eventregistration",{email:localStorage.getItem("username"),event:card.name,sname:card.sname}).then(function(res){
                            NotificationManager.success('You have successfully registered!', 'Success');
                          }).catch(function(err){
                            if((err["response"]["status"]==409)){
                              
                              NotificationManager.info('You are already registered for this event!');
                            }
                            else{
                              NotificationManager.error('Oops!! something went wrong', 'Try Again!', 5000);
                            }
                            
                          });
                        } else {
                          {
                            window.open(card.registrationlink);
                          }
                        }
                      } else {
                        window.location.href = "/login";
                      }
                    }
                  }}
                >
                  Register
                </button>
                <button
                  type="button"
                  className={`btn btn-outline CardButton_${card.page}`}
                  onClick={() => {
                    window.open(card.rulebook, "_blank");
                  }}
                >
                  Know More
                </button>
                {/* <div className="modal fade" id={`info-popout-${card.name}`} tabindex="-1" aria-labelledby="info-popout" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
                        <InfoPopout keyPopout={keyPopout}/>
                    </div>
                </div> */}
              </div>
            </MDBCardBody>
          </MDBCard>

        </div>
      ))}
      <NotificationContainer/>
    </>
  );
};

export default Card;
