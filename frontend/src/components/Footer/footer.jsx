//react boiler plate
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="foot-footer">
      <div className="foot-address">
        <p className="foot-p">
          <a
            className="foot-links"
            href="https://goo.gl/maps/DUKwia2Q1CMqYMNn7"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} />
          </a>
        </p>
        <p className="foot-p">IIT Tirupati</p>
        <p className="foot-p">Yerpedu-Venkatagiri Road</p>
        <p className="foot-p">Yerpedu Post.</p>
        <p className="foot-p">Tirupati District, Andhra Pradesh</p>
        <p className="foot-p">Pincode - 517619</p>
      </div>
      <div className="foot-logo">
        <div className="foot-img">
          <img
            src={require("./tirutsavalogo.png")}
            alt="tirutsava logo"
            width={"45%"}
          />
          <img
            src={require("./tirutsava.png")}
            alt="tirutsava logo"
            width={"90%"}
          />
        </div>
        <p className="foot-p">Made With ❤️ By The Tirutsava Team 2023</p>
      </div>
      <div className="foot-contact">
        <p className="foot-p">
          <FontAwesomeIcon icon={faPhone} /> Contact
        </p>
        <p className="foot-p">
          Pavan Sandaka{" "}
          <a className="foot-links" href="tel:+919390158155">
            9390158155
          </a>
        </p>
        <p className="foot-p">
          Shamil Niyas{" "}
          <a className="foot-links" href="tel:+918606528301">
            8606528301
          </a>
        </p>
        <p className="foot-p">
          Get In Touch
          <div className="foot-icons-div">
            <a
              className="foot-links"
              href="https://www.instagram.com/tirutsava.iittirupati/"
              target="_blank"
            >
              <FontAwesomeIcon className="foot-icons" icon={faInstagram} />
            </a>
            <a
              className="foot-links"
              href="https://www.facebook.com/tirutsava.IITTirupati/"
              target="_blank"
            >
              <FontAwesomeIcon className="foot-icons" icon={faFacebook} />
            </a>
            <a
              className="foot-links"
              href="https://twitter.com/tirutsava_iit"
              target="_blank"
            >
              <FontAwesomeIcon className="foot-icons" icon={faTwitter} />
            </a>
            <a
              className="foot-links"
              href="mailto:tirutsava@iittp.ac.in"
              target="_blank"
            >
              <FontAwesomeIcon className="foot-icons" icon={faEnvelope} />
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
}
